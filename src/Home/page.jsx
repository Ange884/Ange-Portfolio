import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Home() {
  return (
    <section className="home" id="home">
      <h1 className="main-heading">
        Hi, I'm <span className="highlight">Nziza Ange</span>
      </h1>

      <p className="sub-heading">
        <span>Specialized</span> <span>in</span> <span>crafting</span> <span>beautiful,</span> <span>responsive</span>
        <br /> <span>interfaces</span> <span>and</span> <span>delivering</span> <span>smooth</span> <span>mobile</span> <span>experiences</span>
        <br /> <span>using</span> <span>modern</span> <span>technologies.</span>
      </p>

      {/*  Typewriter text */}
      <div className="typewriter-text">
        <Typewriter
          words={[
            "Mobile Developer",
            "Frontend Developer",
            "UI/UX Enthusiast",
            "Machine Learning"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </div>

      <div className="buttons">
        <Link href="#projects"><button className="view">View my work</button></Link>
        <Link href="#contact"><button className="touch">Get in touch</button></Link>
      </div>
    </section>
  );
}
