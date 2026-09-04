import { useEffect, useState } from "react";
import useWidth from "../helpers/hooks";

export default function Header({ children, activePlanet, setActivePlanet }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const width = useWidth();

  function handleBurgerButton() {
    setIsBurgerActive(!isBurgerActive);
  }

  useEffect(() => {
    setIsBurgerActive(false)
  }, [activePlanet])

  return (
    <>
      <header className="header">
        <nav className="header__navigation container">
          <a href="/" className="header__link">
            <span className="header__title">THE PLANETS</span>
          </a>

          <ul className="header__planets-list hidden-mobile">{children}</ul>
          <div id="planets-menu" className={isBurgerActive ? "header__burger-menu container active" : "header__burger-menu container"}>
            <nav className="header__navigation container header">
              <div className="header__burger-menu-inner">
                <a href="/" className="header__link">
                  <span className="header__title">THE PLANETS</span>
                </a>
              </div>
            </nav>
            <ul
              className={
                isBurgerActive
                  ? "header__planets-list-mobile active"
                  : "header__planets-list-mobile"
              }
            >
              {children}
            </ul>
          </div>

          <button
            className={
              isBurgerActive
                ? "burger-button visible-mobile active"
                : "burger-button visible-mobile"
            }
            aria-controls="planets-menu"
            onClick={handleBurgerButton}
            aria-expanded={isBurgerActive ? true : false}
            aria-label="menu"
          >
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
          </button>
        </nav>
      </header>
    </>
  );
}
