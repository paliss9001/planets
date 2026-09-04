import { useState } from "react";
import nextIcon from "/assets/icon-source.svg";
import useWidth from "../helpers/hooks";

export default function Content({
  img,
  description,
  title,
  planetData,
  geology,
  internalImg,
}) {
  const actions = ["overview", "internal structure", "surface geology"];
  const [selectedAction, setSelectedAction] = useState("overview");
  const width = useWidth()

  function handleAction(e) {
    setSelectedAction(e.target.closest("button").dataset["action"]);
  }

  const targetPlanetImage =
    selectedAction === "internal structure" ? internalImg : img;

  const isSurfaceGeology = selectedAction === "surface geology";

  return (
    <>
      <div className="content container-mini">
        <div className="content__actions content__actions--mobile visible-mobile">
        {width < 767 && actions.map((action, index) => (
          <ActionItem
            key={index}
            action={action}
            index={index}
            selectedAction={selectedAction}
            handleAction={handleAction}
            planetType={title}
            width={width}
          />
        ))}
        </div>
        <div className="content__main">
          <div className="content__img">
            <div className="content__img-inner">
              <img
                width={400}
                height={400}
                className="content__image"
                src={targetPlanetImage}
              ></img>
              {isSurfaceGeology ? (
                <img className="content__image-extra" src={geology}></img>
              ) : null}
            </div>
          </div>
          <div className="content__extra">
            <div className="content__extra-main">
              <h1 className="content__title">{title}</h1>
              <div className="content__description">
                <p>{description}</p>
              </div>
              <span className="content__source">
                Source:{" "}
                <a
                  className="content__wikipedia"
                  href="https://en.wikipedia.org/wiki/Earth"
                >
                  Wikipedia<img className="content__next" src={nextIcon}></img>
                </a>
              </span>
            </div>
            <div className="content__actions hidden-mobile">
              {actions.map((action, index) => (
                <ActionItem
                  key={index}
                  action={action}
                  index={index}
                  selectedAction={selectedAction}
                  handleAction={handleAction}
                  planetType={title}
                />
              ))}
            </div>
          </div>
        </div>
        <dl className="content__info">
          {planetData.map((data, index) => (
            <DataItem key={index} orig={data} />
          ))}
        </dl>
      </div>
    </>
  );
}

function ActionItem({
  action,
  index,
  selectedAction,
  handleAction,
  planetType,
  width
}) {

  const isMobile = width < 767

  return (
    <button
      className={
        selectedAction === action
          ? "content__action-item button" + ` ${planetType.toLowerCase()}`
          : "content__action-item button"
      }
      data-action={action}
      onClick={handleAction}
    >
      <>
        {!isMobile && <span className="content__action-count">
          {(index + 1).toFixed(1).split(".").reverse()}
        </span>}
      </>
      {isMobile ? action.split(' ')[0] : action}
    </button>
  );
}

function DataItem({ orig }) {
  const [term, data] = orig;

  return (
    <div className="content__data-item">
      <dt className="content__term">{term}</dt>
      <dd className="content__data">{data}</dd>
    </div>
  );
}
