import "./App.css";
import Toolbar from "./components/toolbar/Toolbar";
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import Feeds from "./components/feeds/Feeds";

export default function App() {
  return (
    <div>
      <Toolbar />
      <div className="home_container">
        <Sidebar />
        <Feeds />
        <Rightbar />
      </div>
    </div>
  );
}
