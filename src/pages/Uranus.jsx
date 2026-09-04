import Content from "../components/MainContent";
import uranusImage from "/assets/planet-uranus.svg";
import internalUranus from "/assets/planet-uranus-internal.svg"
import geologyUranus from "/assets/geology-uranus.png"

export default function Uranus() {
  const desc =
    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";

  const planetData = [
    ["rotation time", "17.2 DAYS"],
    ["revolution time", "84 DAYS"],
    ["radius", "25,362 KM"],
    ["AVERAGE TEMP.", "-195°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={uranusImage}
          description={desc}
          title="URANUS"
          planetData={planetData}
          geology={geologyUranus}
          internalImg={internalUranus}
          wikipediaLink="https://en.wikipedia.org/wiki/Uranus"
        ></Content>
      </section>
    </main>
  );
}
