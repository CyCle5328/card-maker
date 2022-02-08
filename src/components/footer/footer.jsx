import styles from "./footer.module.css";
import React, { memo } from "react";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>Make your card for free</p>
  </footer>
));

export default Footer;
