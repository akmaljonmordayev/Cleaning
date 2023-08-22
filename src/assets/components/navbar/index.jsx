import React, { useContext, useTransition } from "react";
import style from "./styles.module.scss";
import imga from "../images/logo.png";
import rus from "../images/rus.png";
import uzb from "../images/uzb.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function Navbar(){
        const { i18n, t } = useTranslation()
  return (
    <header>
      <nav>
        <div className={style.logo}>
          <a href="#">
            {" "}
            <img src={imga} alt="" />
          </a>
        </div>
        <input className={style.check}  type="checkbox" id="check" />
        <label className={style.label} for="check">
          <i class="fa-solid fa-bars bar"></i>
        </label>
        <ul>
          <li>
            <a href="#">{t("Наши услуги")}</a>
          </li>
          <li>
            <a href="#">{t("O нас")}</a>
          </li>
          <li>
            <a href="#">{t("Наша команда")}</a>
          </li>
          <li>
            <a href="#">{t("Свяжитесь с нами")}</a>
          </li>
          <li><a href="#">
            <button>333000057</button>
            </a></li>
          <li style={{zIndex:'6'}}>
            <img
              onClick={() => 
                i18n.changeLanguage("ru")
                
            }
              style={{ zIndex: "5" }}
              src={rus}
              alt=""
            />
          </li>
          <li style={{zIndex:'6'}}>
            <img onClick={() => 
                i18n.changeLanguage("uz")
            }
              style={{ zIndex: "5" }} src={uzb} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
