'use client';
import { useEffect, useRef } from "react";
import "../styles/historical.css";

export default function HistoricalBackground() {
  const leftItems = useRef([]);
  const rightItems = useRef([]);

  useEffect(() => {
    const reveal = (elements, direction) => {
      elements.forEach((el) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add(`show-${direction}`);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
      });
    };

    reveal(leftItems.current, "left");
    reveal(rightItems.current, "right");
  }, []);

  return (
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
          ref={(el) => (rightItems.current[1] = el)}
        >
          <h3>Growing Up</h3>
          <p>
            Add your real historical background here… events, achievements, etc.
          </p>
        </div>

        {/* LEFT */}
        <div
          className="history-box left"
          ref={(el) => (leftItems.current[2] = el)}
        >
          <h3>Education Journey</h3>
          <p>
            Here you can talk about schools you attended, memorable moments…
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="history-box right"
          ref={(el) => (rightItems.current[3] = el)}
        >
          <h3>Becoming Who I Am</h3>
          <p>
            Mention your dreams, inspirations, things you overcame…
          </p>
        </div>

      </div>
    </section>
  );
}
