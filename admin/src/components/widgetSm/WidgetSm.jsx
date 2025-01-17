import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import {userRequest} from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers]= useState([]);
  useEffect(()=>{
      const getUsers=async ()=>{
        try {
          const res =await userRequest.get("user/?new=true");
          setUsers(res.data);
        } catch{
          
        }
      }
      getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>
          <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
          )}
      </ul>
    </div>
  );
}
