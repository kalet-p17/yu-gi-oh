import React from "react";
import { events } from "../data/events";
import "./Coliseo.css";

function Coliseo() {

  return (
    <section className="coliseo">

      <div className="events">

        <h1>EL COLISEO <span>(PRÓXIMOS EVENTOS)</span></h1>

        {events.map((event) => (
          <div className="event" key={event.id}>

            <div className="date">
              <p className="month">{event.month}</p>
              <h2>{event.day}</h2>
            </div>

            <div className="info">
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>

            <div className="arrow">›</div>

          </div>
        ))}

      </div>



      <div className="form">

        <h2>INSCRIPCIÓN MINIMALISTA</h2>

        <label>FECHA SELECCIONADA</label>
        <select>
          <option>24 Oct - Esfinge de Oro</option>
          <option>02 Nov - Neo Egipto</option>
          <option>15 Dec - Kaiba Corp</option>
        </select>

        <label>DUELIST ID</label>
        <input type="text" placeholder="ID-7734-X" />

        <label>DECK LIST UPLOAD</label>

        <div className="upload">
          Arrastra tu mazo o haz clic para buscar
          <input type="file" />
        </div>

        <button>ACTIVAR INSCRIPCIÓN</button>

      </div>

    </section>
  );
}

export default Coliseo;