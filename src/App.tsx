import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { waffleColors } from "./styles/themes/waffle-colors"
// import AdminDashboard from "./pages/AdminDashboard"
// import SignUp from "./pages/SignUp/index"
import LogIn from "./pages/LogIn"

function App() {
  return (
    <ThemeProvider theme={waffleColors}>
      {/* <SignUp></SignUp> */}
      {/* <AdminDashboard></AdminDashboard> */}
      <LogIn></LogIn>
      <GlobalStyle />
    </ThemeProvider>
  )
}


export default App;