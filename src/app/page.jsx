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
            src="/your-image.jpg"
            alt="Your Portrait"
            width={400}
            height={400}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textSection}>
          <h1>Hello, I'm [Your Name]</h1>
          <p>Creative Developer | Designer | Dreamer<br />Welcome to my portfolio!</p>
        </div>
      </div>
    </>
  );
}
