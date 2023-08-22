import React from "react";
import man from "./styles.module.scss";
import mans from "../images/man.png";
import vector from '../images/vector.png'
import ballon  from '../images/ballon.png'
import { useTranslation } from "react-i18next";
function Man() {
  const { i18n, t } = useTranslation()
  return (
   <>
   <img className={man.vector} src={vector} alt="" />
    <section className={man.section}>
      <div className={man.wrapper}>
        <img className={man.ballon1} src={ballon} alt="" />
        <img className={man.ballon2} src={ballon} alt="" />
        <div className={man.imga}>
          <img src={mans} alt="" />
        </div>
        <div className={man.texts}>
          <button>{t("Забронируйте наши услуги клининга сегодня")}</button>
          <p>
           {t("Мы понимаем, что поддержание чистоты и порядка дома или на рабочем месте важно для физического и психического благополучия. Именно поэтому мы стремимся предоставлять качественные клининговые услуги, отвечающие индивидуальным потребностям каждого нашего клиента. Наша команда профессиональных уборщиков опытна, надежна и любит свою работу. Они используют только лучшие методы, методы и продукты для уборки, чтобы ваше пространство всегда было безупречным и сверкающим.")}
          </p>
          <button>{t("Свяжитесь c нами")}</button>
        </div>
      </div>
    </section>
   </>
  );
}

export default Man;
