"use client";

import styles from "../styles/about.module.css";
import { StarsBackground } from "@/components/shooting-stars";

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutImage}>
        <img
          src="/images/Ange.jpg" // Put your image in /public/profile.jpg
          alt="About me"
        />
      </div>

      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <p>
          Hi! I'm Nziza — a passionate developer skilled in multiple areas of
          software development.
        </p>
        <div className={styles.skills}>
          <div className={styles.line}></div>
          <div className={styles.skillList}>
            <span>Frontend</span>
            <span>Backend</span>
            <span>Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}