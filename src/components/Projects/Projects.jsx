import React from "react";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.project}>
      <div className="container">
        <h2 className={styles["new-projects"]}>
          New projects coming soon.. 🤠
        </h2>
      </div>
    </section>
  );
}
