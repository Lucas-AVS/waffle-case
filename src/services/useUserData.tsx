import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

interface PostData {
  post_id: string;
  opened_at: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_channel: string | null;
}

interface UserData {
  email: string;
  last_opened_at: string;
  streak: number;
  last_opened_post: string | null;
  posts: PostData[];
}

const useUserData = (email: string) => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .rpc('get_user_data', { p_user_email: email });

        if (error) throw error;

        if (data && data.length > 0) {
          const userData: UserData = {
            email: data[0].email,
            last_opened_at: data[0].last_opened_at,
            streak: data[0].streak,
            last_opened_post: data[0].last_opened_post,
            posts: data[0].post_ids.map((post_id: string, index: number) => ({
              post_id,
              opened_at: data[0].opened_ats[index], // Mapeia opened_at
              utm_source: data[0].utm_sources[index] || null,
              utm_medium: data[0].utm_mediums[index] || null,
              utm_campaign: data[0].utm_campaigns[index] || null,
              utm_channel: data[0].utm_channels[index] || null,
            })),
          };
          setData(userData);
        } else {
          console.log("No data found for the given email.");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      } 
    };

    fetchData();
  }, [email]);

  return { data, loading, error };
};

export default useUserData;
