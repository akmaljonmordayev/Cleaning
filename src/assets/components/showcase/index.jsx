import React from 'react'
import styles from './styles.module.scss'
import ball1 from '../images/ball12.png'
import ball2 from '../images/ball22.png'
import girl from '../images/girl.png'
import { useState } from 'react'
import { useTranslation } from "react-i18next";
function Showcase() {
    const { i18n, t } = useTranslation()
  return (
        <div className={styles.showcase}>
            <div className={styles.showcase_wrap}>
                <div className={styles.ball1}>
                    <img src={ball1} alt="" />
                </div>
                <div className={styles.text}>
                    <h1>{t("Сделайте свое помещение чистым и блестящим" )}</h1>
                        <p>{t("Профессиональный клининг для вашего дома и компании")}</p>
                        <button>{t("Свяжитесь с нами")}</button>
                </div>
                <div className={styles.girl}>
                    <img src={girl} alt="" />
                </div>
                <div className={styles.ball2}>
                    <img src={ball2} alt="" />
                </div>
            </div>
        </div>
  )
}

export default Showcase