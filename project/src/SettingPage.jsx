import React from "react";
import "./SettingPage.css";
import settingImage from "./Images/settingImg.png";
export default function SettingPage() {
    return(
        <>
         <div className="textAndImgContainer">
            <div className="textSection">
                <p>На сайте ведутся технические работы</p>
            </div>
            <div className="imgSection">
                <img src={settingImage} alt="" />
            </div>
         </div>
        </>
    )
}