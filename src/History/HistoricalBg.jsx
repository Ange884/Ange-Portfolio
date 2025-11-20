'use client';
import { useEffect, useRef } from "react";
import "../styles/historical.css";

export default function HistoricalBackground() {
  const leftItems = useRef([]);
  const rightItems = useRef([]);

  useEffect(() => {
    const reveal = (elements, direction) => {
      elements.forEach((el, index) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el?.classList.add(`show-${direction}`);
              }, index * 150);
              observer.unobserve(el);
            }
          },
          { 
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
          }
        );
        if (el) observer.observe(el);
      });
    };

    reveal(leftItems.current.filter(Boolean), "left");
    reveal(rightItems.current.filter(Boolean), "right");
  }, []);

  return (
    <section className="history-section-wrapper">
      {/* Heading */}
      <div className="history-heading">
        <h1>My Personal History</h1>
      </div>

      {/* Timeline Section */}
      <section className="history-section">
        <div className="vertical-line"></div>

        <div className="history-container">

          {/* LEFT SIDE */}
          <div
            className="history-box left"
            ref={(el) => (leftItems.current[0] = el)}
          >
            <h3>My Early Beginnings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this
              with your real story…
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="history-box right"
            ref={(el) => (rightItems.current[0] = el)}
          >
            <h3>Growing Up</h3>
            <p>
              Add your real historical background here… events, achievements, etc.
            </p>
          </div>

          {/* LEFT */}
          <div
            className="history-box left"
            ref={(el) => (leftItems.current[1] = el)}
          >
            <h3>Education Journey</h3>
            <p style={{ fontWeight: 800, color: "#555" }}>
              2015-2020 : New Vision Primary School <br/>
              2021-2024 : FAWE GIRLS' SCHOOL  <br/>
              2024-2027 : RWANDA CODING ACADEMY  <br/>
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="history-box right"
            ref={(el) => (rightItems.current[1] = el)}
          >
            <h3>Becoming Who I Am</h3>
            <p>
              Mention your dreams, inspirations, things you overcame…
            </p>
          </div>

        </div>
      </section>
    </section>
  );
}
