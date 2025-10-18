'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css"

export default function Page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image
            src="/images/Nziza.jpg"
            alt="Your Portrait"
            width={400}
            height={400}
            className={styles.profileImage}
            priority // Loads faster for above-the-fold image
          />
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.heroTitle}>Hello, I'm <span className={styles.highlightName}>[Nziza]</span></h1>
          <p className={styles.heroSubtitle}>
            Creative Developer | Designer | Dreamer<br />
            <span className={styles.welcomeText}>Welcome to my portfolio!</span>
          </p>
        </div>
      </div>
    </>
  );
}