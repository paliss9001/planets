import Content from "../components/MainContent";
import mercImage from "/assets/planet-mercury.svg";
import internalMercury from "/assets/planet-mercury-internal.svg"
import geologyMercury from "/assets/geology-mercury.png"

export default function Mercury() {


  const desc =
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";

  const planetData = [
    ["rotation time", "58.6 DAYS"],
    ["revolution time", "87.97 DAYS"],
    ["radius", "2,439.7 km"],
    ["AVERAGE TEMP.", "430°C"]
  ]

  return (
    <main>
      <section className="planet">
        <Content
          img={mercImage}
          description={desc}
          title="MERCURY"
          planetData={planetData}
          geology={geologyMercury}
          internalImg={internalMercury}
          wikipediaLink="https://en.wikipedia.org/wiki/Mercury_(planet)"
        ></Content>
      </section>
    </main>
  );
}