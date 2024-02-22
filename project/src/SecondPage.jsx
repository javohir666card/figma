import React from "react";
import "./SecondPage.css";
import personImg from "./Images/persons.png";
export default function SecondPage() {
    return(
        <>
          <div className="textAndImgContainer">
              <div className="textItem">
                <p>
                Молодые специалисты - наша формула победы
                </p>
                <button>Оставить заявку</button>
              </div>
              <div className="imgItem">
                <img src={personImg} alt="" />
              </div>
          </div>

          <main>
            <div className="firstMainChild">
                <div className="secondMainChild">
                    <div className="modal">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor quam dolor, sed tempus placerat. Cursus aliquet ullamcorper enim dolor faucibus faucibus. Praesent ut duis suspendisse at velit, tellus. Donec egestas interdum venenatis quis. Quam commodo ac tellus augue in quam eleifend elit. Id auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel. Sed cras tellus id fames pellentesque. Sed eu magna eget gravida sit. Urna lectus vulputate egestas aliquam ornare etiam nec orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim morbi. Nulla tempor massa et suscipit ac tempus lobortis. Tellus interdum eleifend a risus amet vulputate vitae arcu erat. Orci quam neque neque laoreet sed. Massa, in diam neque, mi volutpat enim scelerisque sed. Amet diam fermentum mattis faucibus ultricies in urna nec. Feugiat viverra vel pretium lorem. Libero, nibh velit pulvinar purus velit neque, nunc quis.
                            <br /><br />
                         
                        </p>
                    </div>
                </div>
            </div>
          </main>
        </>
    )
}