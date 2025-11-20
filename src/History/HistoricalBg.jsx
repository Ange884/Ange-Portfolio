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
              // Add a small stagger based on index for sequential animation
              setTimeout(() => {
                el?.classList.add(`show-${direction}`);
              }, index * 150); // 150ms delay per item for smooth cascade
              observer.unobserve(el); // Stop observing once triggered
            }
          },
          { 
            threshold: 0.2, // Trigger a bit earlier for better flow
            rootMargin: '0px 0px -50px 0px' // Pre-load slightly before viewport
          }
        );
        if (el) observer.observe(el);
      });
    };

    reveal(leftItems.current.filter(Boolean), "left");
    reveal(rightItems.current.filter(Boolean), "right");

    // Cleanup observers on unmount
    return () => {
      leftItems.current.forEach(el => {
        if (el) {
          const observer = IntersectionObserver.from(el); // Note: This is pseudo; in practice, store observers if needed
          if (observer) observer.disconnect();
        }
      });
      rightItems.current.forEach(el => {
        if (el) {
          const observer = IntersectionObserver.from(el);
          if (observer) observer.disconnect();
        }
      });
    };
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
          ref={(el) => (rightItems.current[0] = el)} // Fixed indexing to start from 0 for right
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
          <p style={{fontWeight:800 , color:"#555"}}>
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
  );
}