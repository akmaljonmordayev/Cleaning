import React from "react";
import team from "./styles.module.scss";
import group from "../images/group.png";
import ballon3 from '../images/ballon.png'
import { useTranslation } from "react-i18next";
function Komanda() {
  const { i18n, t } = useTranslation()
  return (
    <>
      <section className={team.section}>
        <button className={team.btn}>{t("O нас")}</button>
        <div className={team.wrapper}>
          <div className={team.texts}>
            <h1>{t("Качественно и быстро")}</h1>
            <p>
             {t("B клининговой службе мы ставим удовлетворение наших клиентов превыше всего. Именно поэтому мы стремимся предоставлять свои услуги c улыбкой и доброжелательным отношением. Мы понимаем, что каждый клиент уникален, и уделяем время тому, чтобы выслушать ваши потребности и предпочтения. Наша цель — предоставлять услуги личной уборки, которые каждый раз превосходят ваши ожидания.")}
            </p>
            <button>{t("Свяжитесь c нами")}</button>
          </div>
          <img className={team.ball} src={ballon3} alt="" />
          <div className={team.imga}>
            <img src={group} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Komanda;
