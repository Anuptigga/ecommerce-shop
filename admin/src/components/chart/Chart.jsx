import { useEffect, useMemo, useState } from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {userRequest} from "../../requestMethods";

export default function Chart({ title, data, dataKey, grid }) {
 
  const [userStats,setUserStats]=useState([]);

  const MONTHS = useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    []
  );

  useEffect(()=>{
    const getStats= async ()=>{
      try {
        const res = await userRequest.get("/user/stats");
        res.data.map((item)=>
        setUserStats((prev)=>[
          ...prev,
          {name:MONTHS[item._id-1],"Active User":item.total},
        ]))
      } catch (error) {
        
      }
    }
    getStats();
  },[MONTHS]
  )
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={userStats}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
