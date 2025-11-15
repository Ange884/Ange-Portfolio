import "../styles/home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <h1 className="main-heading">
        Hi, I'm <span className="highlight">Nziza Ange</span>
      </h1>

      <p className="sub-heading">
        Specialized in crafting beautiful, responsive
        <br /> interfaces and delivering smooth mobile experiences
        <br /> using modern technologies.
      </p>

      <div className="buttons">
        <button className="view">View my work</button>
        <button className="touch">Get in touch</button>
      </div>
    </section>
  );
}
