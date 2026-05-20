import React from "react";
import { timelineData } from "../data/timelineData";
import "./timeline.css";

function Timeline() {
  return (
    <section className="timeline">

      <h2 className="timeline-title">
        CRONOLOGÍA DEL ORIGEN DUELISTA
      </h2>

      <div className="timeline-container">
        {timelineData.map((item) => (
          <div className="timeline-card" key={item.id}>

            <img src={item.img} alt={item.title} />

            <p className="year">{item.year}</p>

            <h3>{item.title}</h3>

            <p className="desc">{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Timeline;