import React from "react";
import instagramm from "./Images/ant-design_instagram-filled.png";
import email from "./Images/clarity_email-solid.png";
import telegramm from "./Images/akar-icons_telegram-fill.png";
import handShake from "./Images/handshake.png";
import "./Contact.css";
export default function Contact() {
    return(
        <>
          <div className="titleContainer">
             <h1 className="title">Пиши и получи быстрый ответ</h1>
             {/* <h3 className="secondTitle">Команда IRproblema.lv</h3> */}
          </div>

          <div className="socialContainer">
              <div className="childs">
                <img src={instagramm} alt="" />
                <p className="socialTitle">Электронная почта:</p>
                <span>irproblemalv@yandex.ru</span>
              </div>
              <div className="childs">
                <img src={email} alt="" />
                <p className="socialTitle">Свяжитесь с нами в Instagram:</p>
                <span>irproblemalv</span>
              </div>
              <div className="childs">
                <img src={telegramm} alt="" />
                <p className="socialTitle">Свяжитесь с нами в messenger:</p>
                <span>+5555555555555</span>
              </div>
          </div>
     
          <div className="imgSection">
             <img className="imgSectionChild" src={handShake} alt="" />
          </div> 
        </>
    )
}