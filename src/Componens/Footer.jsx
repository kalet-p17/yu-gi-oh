import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between items-center px-[60px] py-[30px] bg-[#0c1117] text-white font-[Arial] border-t border-[rgba(255,200,0,0.1)]" >

      <div className="flex items-center gap-[10px] font-bold">
        <span className="text-[#f3c94a] text-[20px]">⬢</span>
        <p>DUELO DE MOUNSTRUOS © 2026</p>
      </div>

      <div className="flex gap-[40px] text-[12px]">
        <a href="#" className="no-underline text-[#7a8ba1]">TÉRMINOS DEL DUELO</a>
        <a href="#" className="no-underline text-[#7a8ba1]">PRIVACIDAD DE RELIQUIAS</a>
        <a href="#" className="no-underline text-[#7a8ba1]">CONTACTO</a>
      </div>

      <div className="flex gap-[10px]">
        <button className="bg-transparent border border-[#444] text-white px-[10px] py-[8px] cursor-pointer">⤴</button>
        <button className="bg-transparent border border-neutral-700 text-white px-[10px] py-[8px] transition-colors hover:bg-neutral-800 cursor-pointer">✣</button>
      </div>

    </footer>
  );
}

export default Footer;