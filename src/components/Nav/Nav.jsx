import { useState } from "react";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenNav() {
    setIsOpen(true);
  }

  function handleCloseNav() {
    setIsOpen(false);
  }

  return (
    <>
      <nav>
        <h3 className={styles.logo}>Aykın.dev</h3>

        <ul>
          <li>
            <a href="#home" onClick={handleCloseNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleCloseNav}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleCloseNav}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleCloseNav}>
              Contact
            </a>
          </li>

          <li onClick={handleOpenNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles["mobile-menu"]}
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>
      </nav>

      <div
        className={`${styles["mobile-nav"]} ${
          isOpen ? styles["open-menu"] : styles["closed-menu"]
        }`}
      >
        <span onClick={handleCloseNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </span>
        <ul>
          <li>
            <a href="#home" onClick={handleCloseNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleCloseNav}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleCloseNav}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleCloseNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
