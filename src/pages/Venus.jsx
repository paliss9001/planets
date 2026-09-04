import Content from "../components/MainContent";
import venusImage from "/assets/planet-venus.svg";
import internalVenus from "/assets/planet-venus-internal.svg"
import geologyVenus from "/assets/geology-venus.png"

export default function Venus() {
  const desc =
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";

  const planetData = [
    ["rotation time", "243 DAYS"],
    ["revolution time", "224.7 DAYS"],
    ["radius", "6,051.8 KM"],
    ["AVERAGE TEMP.", "471°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={venusImage}
          description={desc}
          title="VENUS"
          planetData={planetData}
          geology={geologyVenus}
          internalImg={internalVenus}
          wikipediaLink="https://en.wikipedia.org/wiki/Venus"
        ></Content>
      </section>
    </main>
  );
}
