import React from "react";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.project}>
      <div className={styles.container}>
        <h3 className={styles.headingdif}>Recent Projects</h3>
        <div className={styles["project-content"]}>
          <div className={styles["project-box"]}>
            <img src="./img/1.png" alt="project cover" />
            <div className={styles["project-description"]}>
              <p className={styles["project-heading"]}>BAIA Bags</p>
              <div className={styles["project-links"]}>
                <a href="https://github.com/aykinsancakli/baia" target="blank">
                  Github
                </a>
                <a href="https://baia.netlify.app/" target="blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className={styles["project-box"]}>
            <img src="./img/2.png" alt="project cover" />
            <div className={styles["project-description"]}>
              <p className={styles["project-heading"]}>Mapfit</p>
              <div className={styles["project-links"]}>
                <a
                  href="https://github.com/aykinsancakli/mapfit"
                  target="blank"
                >
                  Github
                </a>
                <a href="https://mapfitweb.netlify.app/" target="blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className={styles["project-box"]}>
            <img src="./img/3.png" alt="project cover" />
            <div className={styles["project-description"]}>
              <p className={styles["project-heading"]}>Usepopcorn</p>
              <div className={styles["project-links"]}>
                <a
                  href="https://github.com/aykinsancakli/usepopcorn"
                  target="blank"
                >
                  Github
                </a>
                <a
                  href="https://aykinsancakli.github.io/usepopcorn/"
                  target="blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className={styles["project-box"]}>
            <img src="./img/4.png" alt="project cover" />
            <div className={styles["project-description"]}>
              <p className={styles["project-heading"]}>Eat N Split</p>
              <div className={styles["project-links"]}>
                <a
                  href="https://github.com/aykinsancakli/eat-n-split"
                  target="blank"
                >
                  Github
                </a>
                <a
                  href="https://aykinsancakli.github.io/eat-n-split/"
                  target="blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
