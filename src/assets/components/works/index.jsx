import React from "react";
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import card from "./styles.module.scss";
import ballon4 from '../images/ballon.png'
import { useTranslation } from "react-i18next";
function Works() {
  const { i18n, t } = useTranslation()
  return (
    <section className={card.section2}>
        <button>{t("Наша команда")}</button>
        <img className={card.ballon4} src={ballon4} alt="" />
      <div className={card.cardss}>
        <div className={card.item}>
          <img src={img1} alt="" />
          <div className={card.office}>
            <h1>{t("Дом")}</h1>
            <hr />
            <p>{t("Уборка дома")}</p>
          </div>
        </div>
        <div className={card.item}>
          <img src={img2} alt="" />
          <div className={card.office}>
            <h1>{t("Офис")}</h1>
            <hr />
            <p>{t("Уборка офиса")}</p>
          </div>
        </div>
        <div className={card.item}>
          <img src={img3} alt="" />
          <div className={card.office}>
            <h1>{t("Зеркало")}</h1>
            <hr />
            <p>{t("Мойка окон")}</p>
          </div>
        </div>
        <div className={card.item}>
          <img src={img4} alt="" />
          <div className={card.office}>
            <h1>{t("техник")}</h1>
            <hr />
            <p>{t("Предоставление технической помощи")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
