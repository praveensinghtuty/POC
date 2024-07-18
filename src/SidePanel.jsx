import React from "react";
import './scss/sidePanel.css';
import 'font-awesome/css/font-awesome.min.css'; 
import { SideMenu } from "./constant/sideMenu";
const SidePanel = () => {
    return <div className="side-menu">
        <img src='images/logo.png' className='logo'></img>
        <div className="menu-list">
        {
            SideMenu.map(menu => {
                return (
                    <div key={menu.title}>
                <div className="header">{menu.title}</div>
                <div className="sub-menu">
                    {
                        menu.subMenu.map(submenu => {
                            return (
                                <div className="menu-item" key={submenu.title}>
                                    <i className={submenu.icon}></i>
                                    <div className="title">{submenu.title}</div>
                                </div>
                            )
                        })
                    }

                </div>
                </div>
                )

            })
        }
    </div>
    </div>
}

export default SidePanel;