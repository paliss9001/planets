import Content from "../components/MainContent";
import neptuneImage from "/assets/planet-neptune.svg";
import internalNeptune from "/assets/planet-neptune-internal.svg"
import geologyNeptune from "/assets/geology-neptune.png"

export default function Neptune() {
  const desc =
    "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";

  const planetData = [
    ["rotation time", "16.08 DAYS"],
    ["revolution time", "164.79 DAYS"],
    ["radius", "24,622 KM"],
    ["AVERAGE TEMP.", "-201°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={neptuneImage}
          description={desc}
          title="NEPTUNE"
          planetData={planetData}
          geology={geologyNeptune}
          internalImg={internalNeptune}
          wikipediaLink="https://en.wikipedia.org/wiki/Neptune"
        ></Content>
      </section>
    </main>
  );
}
