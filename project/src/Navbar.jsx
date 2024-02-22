import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo  from "./Images/logo.png";
import { useState } from "react";
export default function Navbar () {
const [modal, setModal] = useState(false);
function toogleModal() {
    setModal(!modal);
}

    return(
       <div className="landngpage">
           <div className="navbarContainer">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/secondPage">Кто мы</Link></li>
            <li><Link to="/thirdPage">Что мы делаем</Link></li>
            <li><Link to="/project">Проекты</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/accordion">аккордион </Link></li>
            <li><Link to="/otherpage">другая страница</Link></li>
            <li><Link to="/error">ошибка</Link></li>
            <li><Link to="/setting">параметр</Link></li>
            <select name="" id="">
                <option value="РУ">РУ</option>
                <option value="ЛВ">ЛВ</option>
            </select>
            </ul>

            <div className="openMobileButtons">
            <button className="openNav" onClick={toogleModal}><i class="fa-solid fa-bars"></i></button>
            <button className="closeNav" onClick={toogleModal}><i class="fa-solid fa-x"></i></button>
             </div>
        </div>
        <div className="mobileMeyu">
               {modal && (
                  <div className="mobileMenyu">
                  <li><Link to="/">Главная</Link></li>
                   <li><Link to="/secondPage">Кто мы</Link></li>
                   <li><Link to="/thirdPage">Что мы делаем</Link></li>
                   <li><Link to="/project">Проекты</Link></li>
                   <li><Link to="/contact">Контакты</Link></li>
                   <li><Link to="/accordion">аккордион </Link></li>
                   <li><Link to="/otherpage">другая страница</Link></li>
                   <li><Link to="/error">ошибка</Link></li>
                   <li><Link to="/setting">параметр</Link></li>
                   </div>
               )}
            </div>
        <div className="Home Section">
             
        </div>
       </div>
    )
}