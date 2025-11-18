import "../styles/home.css";
import Typewriter  from "react-simple-typewriter";

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

       {/* ⭐ Typewriter text */}
      <div className="typewriter-text">
        <Typewriter
  options={{
    strings: [
      "Mobile Developer",
      "React & React Native Developer",
      "UI/UX Enthusiast",
    ],
    autoStart: true,
    loop: true,
  }}
/>

      </div>

      <div className="buttons">
        <button className="view">View my work</button>
        <button className="touch">Get in touch</button>
      </div>
    </section>
  );
}