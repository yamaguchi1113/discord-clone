import React from "react";
import SidebarChannel from "./SidebarChannel";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/userSlice";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    if (user?.uid.startsWith("guest-")) {
      dispatch(logout());
    } else {
      auth.signOut();
    }
  };

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo512.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHedder">
            <div className="sidebarHedder">
              <ExpandMoreIcon />
              <h4>チャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img src={user?.photo} alt="" onClick={handleLogout} />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>
            </div>
          </div>
          <div className="sidebarVoice">
            <MicIcon />
            <HeadsetMicIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
