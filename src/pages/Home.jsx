import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="w-[800px] h-[700px] flex border-2 border-zinc-300 radius-[10px] rounded-xl shadow-2xl overflow-hidden ">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
