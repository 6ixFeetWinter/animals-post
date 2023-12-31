import React from "react";
import { Board } from "./layout/Board";
import "../style/style.css";
import { Sidebar } from "./layout/Sidebar";
import { Profile } from "./layout/Profile";
export const Home = () => {
  return (
    <div className="p-home__display">
      <div className="p-home__sidebar-area">
        <Sidebar />
      </div>
      <div className="p-home__board-area">
        <Board />
      </div>
      <div className="p-home__profile-area">
        <Profile />
      </div>
    </div>
  );
};
