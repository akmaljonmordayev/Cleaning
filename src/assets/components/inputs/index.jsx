import React from "react";
import input from "./styles.module.scss";
import qiz from '../images/qiz.png'
import ballon from "../images/ballon.png"
import uzb from '../images/uzb.png'
import { useTranslation } from "react-i18next";
function Inputs() {
  const { i18n, t } = useTranslation()
  function Submited(e){
    e.preventDefault()
    let input = document.querySelector('input')
      const formEle = document.querySelector("form")
      if(input.value === ""){
        alert('Please enter  fully')
      }
      console.log('submitted')
      const formData = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbzRPK4DK5ePj49qFZWR2bj0rg6p13f8vs-UGkeHQO_xJN5mwJ4fThDMTMROiYhSQ1hmxw/exec", {
        method:"POST",
        body:formData,
        mode:'no-cors'
      }).then((res)=>res.json()).then((data)=>{
        console.log(data);
      }).catch((err)=>console.log(err))
  }

  return (
   <section className={input.last}>
    <img className={input.img} src={ballon} alt="" />
    <img className={input.img1} src={ballon} alt="" />
    <img className={input.img2} src={ballon} alt="" />
        <button className={input.lastButton}>{t("Свяжитесь c нами")}</button>
          <div className={input.wrap}>
                <div className={input.inputs}>
                    <form className='form' onSubmit={(e) => Submited(e)}>
                      <div className={input.text}>
                        <label htmlFor="ism">{t("Имя*")}</label>
                        <input id="ism" name="Name" type="text" placeholder={t("Имя")} />
                      </div>
                      <div className={input.text}>
                        <label htmlFor="familiya">{t("Фамилия*")}</label>
                        <input name="Surname" id="familiya" type="text" placeholder={t("Фамилия")} />
                      </div>
                      <div className={input.text}>
                        <label htmlFor="tel">{t("Телефонный номер*")}</label>
                        <input name="Phone" id="tel" type="text" placeholder="(90) 177 - 77 - 77" />
                        <img src={uzb} alt="" className={input.uzb} />
                      </div>
                      <button   type="submit">{t("Отправить заявку")}</button>
                    </form>
                </div>
                <div className={input.image}>
                  <img src={qiz} alt="" />
                </div>
          </div>
   </section>
  );
}

export default Inputs;
