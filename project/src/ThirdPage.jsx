import React from "react";
import "./ThirdPage.css";
import firstCardImg from "./Images/firstCardImg.png";
import secondCardImg from "./Images/secondCardImg.png";
import thirdCardImg from "./Images/thirdCardImg.png";
import fourthCardImg from "./Images/fourthCardImg.png";
import fifethCardImg from "./Images/fifthCardImg.png";
import sixthCardImg from "./Images/sixthCardimg.png";
import seventhCardImg from "./Images/seventhCardimg.png";
import eightCardImg from "./Images/eightCardimg.png";
import ninethCardImg from "./Images/ninenthCardImg.png"
export default function ThirdPage() {
    return(
        <>
        <div className="titleBlock">
        <h1 className="title">Наша работа - ценный вклад в качество твоей жизни</h1>
        </div>

        <main>
            <div className="cardsContainer">
                <div className="card">
                     <img src={firstCardImg} alt="" />
                     <p className="imgTitles">Споры с работодателем</p>
                </div>
                <div className="card">
                     <img src={secondCardImg} alt="" />
                     <p className="imgTitles">Штрафы полиции и других учреждений</p>
                </div>
                <div className="card">
                     <img src={thirdCardImg} alt="" />
                     <p className="imgTitles">Решение споров в государственных учреждениях</p>
                </div>
                <div className="card">
                     <img src={fourthCardImg} alt="" />
                     <p className="imgTitles">Возмещение убытков и морального ущерба</p>
                </div>
                <div className="card">
                     <img src={fifethCardImg} alt="" />
                     <p className="imgTitles">Возврат долгов</p>
                </div>
                <div className="card">
                     <img src={sixthCardImg} alt="" />
                     <p className="imgTitles">Представление интерсов в суде и конституционные жалобы</p>
                </div>
                <div className="card">
                     <img src={seventhCardImg} alt="" />
                     <p className="imgTitles">Право потребителя</p>
                </div>
                <div className="card">
                     <img src={eightCardImg} alt="" />
                     <p className="imgTitles">Защита прав учащихся</p>
                </div>
                <div className="card">
                     <img src={ninethCardImg} alt="" />
                     <p className="imgTitles">Нестандартные ситуации</p>
                </div>
            </div>
        </main>
        </>
    )
}