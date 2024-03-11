import React from "react";
import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles["about-content"]}>
          <div className={styles["img-side"]}>
            <img
              src="/img/working-emoji.png"
              alt="emoji"
              className={styles["work-emoji"]}
            />
            <img
              src="/img/about-img.webp"
              alt="mee"
              className={styles["img-side__main-img"]}
            />
            <span>
              <img src="/img/text-2.svg" alt="text" />
            </span>
          </div>
          <div className={styles["text-side"]}>
            <h3>About me</h3>
            <h4>
              Front-end Developer <br /> based in Istanbul, Turkey 📍
            </h4>
            <p>
              Hey, my name is Aykın, and I'm a Frontend Developer. My passion is
              to create and develop a clean UI/UX for my users.
              <br />
              <br />
              My main stack currently is React in combination with Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
