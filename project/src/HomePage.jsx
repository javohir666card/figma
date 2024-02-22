import React from "react";
import firstResursImg from "./Images/firstresurssimg.png";
import Vector from "./Images/Vector.png"
import secondResursImg from "./Images/secondresursimg.png";
import "./Homepage.css";
export default function HomePage() {
  return(
    <>
       <div className="bigContainer">
           <div className="bigContainerChild">
                <div className="headerSection">
                    <div className="textItem">
                        <h1>У тебя есть проблема - у нас есть решение!</h1>
                        <button>Оставить заявку</button>
                    </div>
                    <div className="imgItems">
                        <img src={firstResursImg} alt="" />
                        <img src={secondResursImg} alt="" />
                    </div>
                </div>

                <div className="messageContainer">
                   <div className="messageContaines">
                      <div className="child"><img src={Vector} alt="" />
                      <p>Магазин отказывается вернуть деньги за некачественный товар?</p></div>
                      <div className="child"><img src={Vector} alt="" />
                      <p>Работодатель не выплачивает заработную плату или производит удержания?</p></div>
                      <div className="child"><img src={Vector} alt="" />
                      <p>Тебя без основания уволили?</p></div>
                   </div>
                   <div className="messageContaines">
                   <div className="child"><img src={Vector} alt="" />
                   <p>Преподаватель неверно оценил Твою работу?</p></div>
                      <div className="child"><img src={Vector} alt="" />
                      <p>Кто-то не возвращает долг?</p></div>
                      <div className="child"><img src={Vector} alt="" />
                      <p>Полиция Тебя оштрафовала?</p></div>
                     </div>
                     <div className="messageContaines">
                     <div className="child"><img src={Vector} alt="" />
                     <p>Полиция Тебя оштрафовала?</p></div>
                      <div className="child"><img src={Vector} alt="" />
                      <p>Полиция Тебя оштрафовала?</p></div>
                     </div>
                     <div className="questionLogo">
                        
                     </div>
                </div>

           </div>
       </div>
    </>
  )
}