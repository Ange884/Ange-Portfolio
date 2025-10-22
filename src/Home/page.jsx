"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/Home.module.css"; // adjust to your css file

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image
            src="/images/Ange.jpg"
            alt="Your Portrait"
            width={400}
            height={400}
            className={styles.profileImage}
            priority
          />
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.heroTitle}>
            Hello, I'm <span className={styles.highlightName}>Nziza</span>
          </h1>

          <h2 className={styles.heroSubtitle}>
            <Typewriter
              words={[
                "Creative Developer ",
                "UI/UX Designer ",
                "Dreamer ",
                "Problem Solver ",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h2>

          <p className={styles.heroDescription}>
            I love building beautiful, functional web experiences that bring
            ideas to life. My work blends creativity, code, and user experience
            to make every project meaningful.  
            <br />
            <br />
            Explore my portfolio to see how I turn imagination into innovation 
          </p>
        </div>
      </div>
    </>
  );
}
