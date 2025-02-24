import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

interface TopUser {
  email: string;
  streak: number;
}

interface TopPost {
  post_id: string;
  count: number;
}

interface LastOpenedPost {
  post_id: string;
  opened_at: string;
}

interface UTMDataItem {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_channel?: string;
  count: number;
}

interface UTMData {
  utm_sources: UTMDataItem[];
  utm_mediums: UTMDataItem[];
  utm_campaigns: UTMDataItem[];
  utm_channels: UTMDataItem[];
}

interface AdminData {
  top_users: TopUser[];
  top_posts: TopPost[];
  last_opened_post: LastOpenedPost | null;
  utm_data: UTMData;
}

const useAdminData = () => {
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.rpc('get_admin_data');

        if (error) throw error;

        console.log("Admin Data:", data);

        // Garantir que as propriedades dentro de utm_data sejam arrays vazios se forem null
        const utm_data = {
          utm_sources: data.utm_data.utm_sources || [],
          utm_mediums: data.utm_data.utm_mediums || [],
          utm_campaigns: data.utm_data.utm_campaigns || [],
          utm_channels: data.utm_data.utm_channels || [],
        };

        setData({
          ...data,
          utm_data,
        });
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
  }, []);

  return { data, loading, error };
};

export default useAdminData;
