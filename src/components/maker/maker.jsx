import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "cycle",
      company: "none",
      theme: "dark",
      title: "Frontend Engineer",
      email: "cycle5328@Gmail.com",
      message: "fall forward",
      fileNmae: "CyCle",
      fileURL: null,
    },
    {
      id: "2",
      name: "cycle2",
      company: "none",
      theme: "light",
      title: "Frontend Engineer",
      email: "cycle5328@Gmail.com",
      message: "fall forward",
      fileNmae: "CyCle",
      fileURL: "cycle.png",
    },
    {
      id: "3",
      name: "cycle3",
      company: "none",
      theme: "colorful",
      title: "Frontend Engineer",
      email: "cycle5328@Gmail.com",
      message: "fall forward",
      fileNmae: "CyCle",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
