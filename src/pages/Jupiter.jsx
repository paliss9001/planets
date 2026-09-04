import Content from "../components/MainContent";
import jupiterImage from "/assets/planet-jupiter.svg";
import internalJupiter from "/assets/planet-jupiter-internal.svg"
import geologyJupiter from "/assets/geology-jupiter.png"

export default function Jupiter() {
  const desc =
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.";

  const planetData = [
    ["rotation time", "9.93 DAYS"],
    ["revolution time", "11.86 DAYS"],
    ["radius", "69,911 KM"],
    ["AVERAGE TEMP.", "-108°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={jupiterImage}
          description={desc}
          title="JUPITER"
          planetData={planetData}
          geology={geologyJupiter}
          internalImg={internalJupiter}
          wikipediaLink="https://en.wikipedia.org/wiki/Jupiter"
        ></Content>
      </section>
    </main>
  );
}
