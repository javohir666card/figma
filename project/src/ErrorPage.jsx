import React from "react";
import errorImg from "./Images/404 (1).png";
import secondErrImg from "./Images/secondErrorimg.png";
import "./ErrorPage.css";
export default function ErrorPage() {
    return(
        <>
          <div className="errorContainer">
             <div className="textAndButtonSection">
                <p>Ошибка</p>
                <img src={errorImg} alt="" />
                <span>Страница не найдена</span>
                <button>На главную</button>
             </div>
             <div className="imgSection">
                <img src={secondErrImg} alt="" />
             </div>
          </div>
        </>
    )
}