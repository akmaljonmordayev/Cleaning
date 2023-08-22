import React from 'react'
import footer from './styles.module.scss'
import logo from '../images/logo.png'
import tube from '../images/tube.png'
import insta from '../images/insta.png'
import tel from '../images/tel.png'
import { useTranslation } from "react-i18next";
function Footer() {
    const { i18n, t } = useTranslation()
  return (
       <section className={footer.footer}>
         <div className={footer.warp}>
                <div className={footer.logo}>
                    <img src={logo} alt="" />
                </div>
                <ul className={footer.ul}>
                    <li><a href="#">{t("Наши услуги")}</a></li>
                    <li><a href="#">{t("O нас")}</a></li>
                    <li><a href="#">{t("Наша команда")}</a></li>
                    <li><a href="#">{t("Свяжитесь c нами")}</a></li>
                </ul>
                <ul>
                    <li><a href="#"><b>{t("Телефон для связи:")}</b></a></li>
                    <li><a href="#">333000057</a></li>
                    <li><a href="#"><b>Адрес:</b></a></li>
                    <li><a href="#">Сергили 5 , 33</a></li>
                </ul>
                <div className={footer.icons}>
                    <h1>
                       <a href="https://www.youtube.com/?hl=ru"><img src={tube} alt="" /></a>
                       <a href="https://www.instagram.com"><img src={insta} alt="" /></a>
                        <a href="https://web.telegram.org/k/"> <img src={tel} alt="" /></a>
                    </h1>
                    <button type='submit'>{t("Свяжитесь c нами")}</button>
                </div>
            </div>
       </section>
  )
}

export default Footer