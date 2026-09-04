import Content from "../components/MainContent";
import saturnImage from "/assets/planet-saturn.svg";
import internalSaturn from "/assets/planet-saturn-internal.svg"
import geologySaturn from "/assets/geology-saturn.png"

export default function Saturn() {
  const desc =
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";

  const planetData = [
    ["rotation time", "10.8 DAYS"],
    ["revolution time", "29.46 DAYS"],
    ["radius", "58,232 KM"],
    ["AVERAGE TEMP.", "-138°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={saturnImage}
          description={desc}
          title="SATURN"
          planetData={planetData}
          geology={geologySaturn}
          internalImg={internalSaturn}
          wikipediaLink="https://en.wikipedia.org/wiki/Saturn"
        ></Content>
      </section>
    </main>
  );
}
