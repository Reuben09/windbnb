import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Nav({ handleList }) {
  const [name, setName] = useState("Add Location");
  const [isNav, setIsNav] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isparagraph, setIsParagraph] = useState(false);

  const handleLocation = () => {
    setIsNav(true);
    setIsLocation(true);
    setIsGuest(false);
    setIsParagraph(true);
  };
  const handleGuest = () => {
    setIsNav(true);
    setIsLocation(false);
    setIsGuest(true);
    setIsParagraph(true);
  };
  const handleSearch = () => {
    setIsNav(false);
    setIsParagraph(false);
    handleList(`${name}`);
    console.log(name);
  };
  return (
    <div className="overrall-nav-container">
      <div className="nav-big">
        <section className="nav-big-section">
          <div className={isNav ? "logo-none" : "logo-container"}>
            <img src="https://i.ibb.co/Gtppx6f/logo.png" alt="logo" />
          </div>
          <div
            className={
              isNav ? "search-small-container" : "search-big-container"
            }
          >
            <button
              className={
                isparagraph ? "button-small-container" : "button-big-container"
              }
              onClick={handleLocation}
            >
              <p className={isparagraph ? "paragraph-display" : "display-none"}>
                Location
              </p>
              {name}
            </button>
            <button
              className={
                isparagraph ? "button-small-container" : "button-big-container"
              }
              onClick={handleGuest}
            >
              <p className={isparagraph ? "paragraph-display" : "display-none"}>
                Guests
              </p>
              Add Guest
            </button>
            <button
              className={isparagraph ? "search-btn" : "button-big-container"}
              onClick={() => handleSearch()}
            >
              search
            </button>
          </div>
        </section>

        {isNav && (
          <div className="list-container">
            <ul
              className={isLocation ? "location-container" : "displayopacity"}
            >
              <li>
                <LocationOnIcon />
                <input
                  onClick={() => setName("Helsinki")}
                  defaultValue="Helsinki, Finland"
                />
              </li>
              <li>
                <LocationOnIcon />
                <input
                  defaultValue="Turku, Finland"
                  onClick={() => setName("Turku")}
                />
              </li>
              <li>
                <LocationOnIcon />
                <input
                  defaultValue="Oulu, Finland"
                  onClick={() => setName("Oulu")}
                />
              </li>
              <li>
                <LocationOnIcon />
                <input
                  defaultValue="Vaasa, Finland"
                  onClick={() => setName("Vaasa")}
                />
              </li>
            </ul>

            <ul className={isGuest ? "age-container" : "displayopacity"}>
              <li>
                <h3>Adult</h3>
                <p>Ages 13 or above</p>
                <div className="age-number-container">
                  <p className="p-border">+</p>
                  <p className="p-number">0</p>
                  <p className="p-border">-</p>
                </div>
              </li>
              <li>
                <h3>Children</h3>
                <p>Ages 2-12</p>
                <div className="age-number-container">
                  <p className="p-border">+</p>
                  <p className="p-number">0</p>
                  <p className="p-border">-</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="nav-small">
        <section className="nav-big-section">
          <div className={isNav ? "logo-none" : "logo-container"}>
            <img src="https://i.ibb.co/Gtppx6f/logo.png" alt="logo" />
          </div>
          <div
            className={
              isNav ? "search-small-container" : "search-big-container"
            }
          >
            <button
              className={
                isparagraph ? "button-small-container" : "button-big-container"
              }
              onClick={handleLocation}
            >
              <p className={isparagraph ? "paragraph-display" : "display-none"}>
                Location
              </p>
              {name}
            </button>
            <button
              className={
                isparagraph ? "button-small-container" : "button-big-container"
              }
              onClick={handleGuest}
            >
              <p className={isparagraph ? "paragraph-display" : "display-none"}>
                Guest
              </p>
              Add Guest
            </button>
            <button
              className={isparagraph ? "display-none" : "button-big-container"}
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        </section>

        {isNav && (
          <div className="list-container">
            <ul className={isLocation ? "location-container" : "display-none"}>
              <li>
                <LocationOnIcon />
                <input
                  onClick={() => setName("Helsinki")}
                  defaultValue="Helsinki, Finland"
                />
              </li>
              <li>
                <LocationOnIcon />
                <input
                  defaultValue="Turku, Finland"
                  onClick={() => setName("Turku")}
                />
              </li>
              <li>
                <LocationOnIcon />
                <input
                  defaultValue="Oulu, Finland"
                  onClick={() => setName("Oulu")}
                />
              </li>
              <li>
                <LocationOnIcon />
                <input
                  defaultValue="Vaasa, Finland"
                  onClick={() => setName("Vaasa")}
                />
              </li>
            </ul>

            <ul className={isGuest ? "age-container" : "display-none"}>
              <li>
                <h3>Adult</h3>
                <p>Ages 13 or above</p>
                <div className="age-number-container">
                  <p className="p-border">+</p>
                  <p className="p-number">0</p>
                  <p className="p-border">-</p>
                </div>
              </li>
              <li>
                <h3>Children</h3>
                <p>Ages 2-12</p>
                <div className="age-number-container">
                  <p className="p-border">+</p>
                  <p className="p-number">0</p>
                  <p className="p-border">-</p>
                </div>
              </li>
            </ul>
            <button
              className={isparagraph ? "search-btn" : "button-big-container"}
              onClick={() => handleSearch()}
            >
              search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
