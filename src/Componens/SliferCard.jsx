import React from "react";
import "./SliferCard.css";


function SliferCard() {
  return (
    <section className="slifer-section">

      <div className="slifer-container">

        <div className="slifer-image">
          <img src={slifer} alt="Slifer el Dragón del Cielo" />
        </div>

        <div className="slifer-info">

          <p className="slifer-subtitle">
            RELIQUIA CONSAGRADA DEL MES
          </p>

          <h1 className="slifer-title">
            SLIFER EL DRAGÓN DEL CIELO
          </h1>

          <div className="slifer-description">
            <p>
              “Los cielos se abren y el trueno resuena. Esta encarnación de la
              divinidad roja ha sido recuperada de los estratos más profundos
              de la Necrópolis de Giza. Su poder de ataque es infinito,
              dictado por el conocimiento en la mano del duelista.”
            </p>

            <div className="slifer-stats">
              <div>
                <span>OFERTA ACTUAL</span>
                <h2>$4,250.00</h2>
              </div>

              <div>
                <span>DUELISTAS PUJANDO</span>
                <h2>14</h2>
              </div>
            </div>
          </div>

          <div className="slifer-buttons">
            <button className="btn-gold">PUJAR AHORA</button>
            <button className="btn-blue">VER HISTORIAL DE ALTAR</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default SliferCard;