import Content from "../components/MainContent";
import marsImage from "/assets/planet-mars.svg";
import internalMars from "/assets/planet-mars-internal.svg"
import geologyMars from "/assets/geology-mars.png"

export default function Mars() {
  const desc =
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.";

  const planetData = [
    ["rotation time", "1.03 DAYS"],
    ["revolution time", "1.88 DAYS"],
    ["radius", "3,389.5 KM"],
    ["AVERAGE TEMP.", "−28°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={marsImage}
          description={desc}
          title="MARS"
          planetData={planetData}
          geology={geologyMars}
          internalImg={internalMars}
        ></Content>
      </section>
    </main>
  );
}
