import Content from "../components/MainContent";
import earthImage from "/assets/planet-earth.svg";
import internalEarth from "/assets/planet-earth-internal.svg"
import geologyEarth from "/assets/geology-earth.png"

export default function Earth() {
  const desc =
    "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";

  const planetData = [
    ["rotation time", "0.99 DAYS"],
    ["revolution time", "365.26 DAYS"],
    ["radius", "6,371 KM"],
    ["AVERAGE TEMP.", "16°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={earthImage}
          description={desc}
          title="EARTH"
          planetData={planetData}
          geology={geologyEarth}
          internalImg={internalEarth}
          wikipediaLink="https://en.wikipedia.org/wiki/Earth"
        ></Content>
      </section>
    </main>
  );
}
