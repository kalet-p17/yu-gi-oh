import React from 'react'

function App() {
  return (
    <div className="container">

      <header className="flex justify-between items-center p-[20px] px-[40px] border-t border-[#222] p-2 mr-2.5 bg-[#111] gap-10">

        <div className="font-bold text-[#e0b84b]">DUELIST GATE</div>

        <nav className="m-px15 no-underline text-gray-300 hover:text-white gap-10 flex">
          <a className='m-px15 no-underline text-gray-300 hover:text-white' href="#">Mercado</a>
          <a className='m-px15 no-underline text-gray-300 hover:text-white' href="#">Torneos</a>
          <a className='m-px15 no-underline text-gray-300 hover:text-white' href="#">Reliquias</a>
          <a className='m-px15 no-underline text-gray-300 hover:text-white' href="#">Historia</a>
        </nav>

        <div className="p-2 mr-2.5 bg-[#111] border border-[#333] text-white">
          <input className='p-2 mr-2.5 bg-[#111] border border-[#333] text-white' type="text" placeholder="Buscar reliquia..." />
          <button className="bg-[#e0b84b] border-none px-3.5 py-2.5 cursor-pointer flex">CONECTAR DUELISTA</button>
        </div>
      </header>
      <main className="flex h-[90vh]">
        <section className="bg-gradient-to-r from-[#0c1425] to-[#0b0b0b] flex-1 p-[80px]">
          <p className="text-3xl text-[#e0b84b] mb-5 tracking-[2px]">FASE 01: MERCADO LOCAL</p>
          <h1 className='text-6xl mb-5 text-[#e0b84b]'>
            EL PORTAL <br />
            <span>DUAL</span>
          </h1>
          <p className="mb-7.5 text-[#7a8ba1] max-w-[300px] leading-6">
            Domina el duelo local con tecnología de reliquias holográficas.
            Neo-Egipto 2026 te espera.
          </p>
          <button className="btn-main bg-[#e0b84b] border-none px-5 py-3 cursor-pointer">Ver Cartas Locales </button>
        </section>
        <section className="bg-[#111] flex-1 p-[80px]">
          <p className="phase phase text-3xl text-[#e0b84b] mb-5 tracking-[2px]">FASE 02: MERCADO GLOBAL</p>
          <h1 className='text-6xl mb-5 text-[#e0b84b]'>
            MERCADO <br />
            <span className='text-[#e0b84b]'>GLOBAL</span>
          </h1>
          <p className="mb-7.5 text-[#7a8ba1] max-w-[300px] leading-6">
            Trasciende las fronteras. Intercambia fragmentos milenarios
            con duelistas de todo el mundo en tiempo real.
          </p>
          <button className="bg-transparent border border-[#e0b84b] text-[#e0b84b] px-5 py-3 cursor-pointer">Explorar Internacional </button>
        </section>
      </main>
    </div>
  );
}

export default App;