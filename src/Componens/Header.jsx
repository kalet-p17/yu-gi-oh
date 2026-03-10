import React from 'react'
import '../Componens/Header.css'

function App() {
  return (
    <div className="container">

      <header className="header">

        <div className="logo">DUELIST GATE</div>

        <nav className="menu">
          <a href="#">Mercado</a>
          <a href="#">Torneos</a>
          <a href="#">Reliquias</a>
          <a href="#">Historia</a>
        </nav>

        <div className="actions">
          <input type="text" placeholder="Buscar reliquia..." />
          <button className="btn-connect">CONECTAR DUELISTA</button>
        </div>
      </header>
      <main className="main">
        <section className="left">
          <p className="phase">PHASE 01: LOCAL DOMINION</p>
          <h1>
            EL PORTAL <br />
            <span>DUAL</span>
          </h1>
          <p className="desc">
            Domina el duelo local con tecnología de reliquias holográficas.
            Neo-Egipto 2026 te espera.
          </p>
          <button className="btn-main">Ver Cartas Locales </button>
        </section>
        <section className="right">
          <p className="phase">PHASE 02: GLOBAL CARTOGRAPHY</p>
          <h1>
            MERCADO <br />
            <span>GLOBAL</span>
          </h1>
          <p className="desc">
            Trasciende las fronteras. Intercambia fragmentos milenarios
            con duelistas de todo el mundo en tiempo real.
          </p>
          <button className="btn-secondary">Explorar Internacional </button>
        </section>
      </main>
    </div>
  );
}

export default App;