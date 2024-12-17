import Chart from "../../components/chart/Chart.jsx";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo.jsx";
import "./home.css";
import { userData } from "../../dummyData.js";
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx";
import WidgetLg from "../../components/widgetLg/WidgetLg.jsx";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
