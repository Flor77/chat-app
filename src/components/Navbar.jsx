import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[50px] p-3 items-center bg-[#2f2d52] justify-between text-[#ddddf7]">
      <span className="font-bold">Chat</span>
      <div className="flex items-center gap-2">
        <img
          src="https://images.pexels.com/photos/15405996/pexels-photo-15405996.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          className="bg-[#ddddf7] h-[24px] w-[24px] rounded-full object-cover"
        />
        <span>Flor</span>
        <button className="bg-[#5d5b8d] text-[#ddddf7] rounded border-none text-xs font-small p-1 cursor-pointer">
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
