import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "cycle",
      company: "none",
      theme: "dark",
      title: "Frontend Engineer",
      email: "cycle5328@gmail.com",
      message: "fall forward",
      fileNmae: "CyCle",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "cycle2",
      company: "none",
      theme: "light",
      title: "Frontend Engineer",
      email: "cycle5328@gmail.com",
      message: "fall forward",
      fileNmae: "CyCle",
      fileURL: "cycle.png",
    },
    3: {
      id: "3",
      name: "cycle3",
      company: "none",
      theme: "colorful",
      title: "Frontend Engineer",
      email: "cycle5328@gmail.com",
      message: "fall forward",
      fileNmae: "CyCle",
      fileURL: null,
    },
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
