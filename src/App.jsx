import "./App.scss"
import AdminAnalytics from "./components/ADMIN/Analytics/AdminAnalytics"
import AdminHome from "./components/ADMIN/Home/AdminHome"
import LocalDocuments from "./components/Local user/LocalDocuments"
import LocalHome from "./components/Local user/LocalHome"
import LocalOverview from "./components/Local user/LocalOverview"
import Login from "./components/Login/Login"
import Roles from "./components/Login/Roles"
import Sidebar from "./components/Login/Sidebar/Sidebar"
export default function App() {

return (
<>
{/* <Login/> */}
{/* <Roles/>     */}
<AdminHome/>
<Sidebar/>
<AdminAnalytics/>
{/* <LocalHome/> */}
{/* <LocalDocuments/> */}
{/* <LocalOverview/> */}
</>
)
}