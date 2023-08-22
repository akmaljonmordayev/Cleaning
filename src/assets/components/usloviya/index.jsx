import React from "react";
import usloviya from "./styles.module.scss";
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import service from '../images/service.png'
import like from '../images/like.png'
import ballon from '../images/ballon.png'
import { useTranslation } from "react-i18next";
function Uslogy() {
  const { i18n, t } = useTranslation()
  return (
    <section className={usloviya.sec}>
      <div className={usloviya.cards}>
        <button>{t("Наши услуги")}</button>
        <p>
          {t("Мы предоставляем услуги профессионального клининга")}
        </p>
        <img className={usloviya.ballo1} src={ballon} alt="" />
        <img className = {usloviya.ballo2} src={ballon} alt="" />
        <div className={usloviya.card}>
          <p className={usloviya.bb}>
           {t("Наш приоритет - качество и удовлетворение наших клиентов. Мы используем профессиональные средства и современное оборудование,чтобы достичь безупречных результатов. Наша гибкая система ценообразования позволяет выбрать оптимальные услуги,соответствующие вашим потребностям и бюджету.")}
          </p>
            <div className={usloviya.images}>
                <div className={usloviya.service}>
                    <img src={service} alt="" />
                </div>
                <div className={usloviya.card1}>
                    <img src={card1} alt="" />
                       <div className={usloviya.content}>
                       <h1>{t("Мойка Панорамных Окон")}</h1>
                       <img src={like} alt="" />
                       </div>
                </div>
                <div className={usloviya.card2}>
                    <img src={card2} alt="" />
                       <h1>{t("Мойка фасадов")}</h1>
                       <p>{t("Мойка фасадов и окон может потребоваться для любых зданий, для частных домов, для торговых и офисных центров, для промышленных предприятий. ")}</p>
                       <img className={usloviya.img} src={like} alt="" />
                </div>
                <div className={usloviya.card1}>
                    <img src={card3} alt="" />
                       <div className={usloviya.content}>
                       <h1>{t("Химчистка мягкой мебели")}</h1>
                       <img src={like} alt="" />
                       </div>
                </div>
                <div className={usloviya.card1}>
                    <img src={card4} alt="" />
                       <div className={usloviya.content}>
                       <h1>{t("Company")}</h1>
                       <img src={like} alt="" />
                       </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Uslogy;
