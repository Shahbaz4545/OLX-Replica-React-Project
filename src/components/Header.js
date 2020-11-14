import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import olxLogo from '../images/logo.png';
import { BsSearch } from 'react-icons/bs';
import { VscChevronDown } from 'react-icons/vsc';
import { FaPlus } from 'react-icons/fa';




function Header() {
    const nav =[
        {ID: 1, label: "Mobile Phones"},
        {ID: 2, label: "Cars"},
        {ID: 3, label: "Motorcycles"},
        {ID: 4, label: "Houses"},
        {ID: 5, label: "TV-Video-Audio"},
        {ID: 6, label: "Tablets"},
        {ID: 7, label: "Land & Plots"},
    ]
    return (
        <React.Fragment>
            <div className="header fixed flex aic">
                <div className="logo">
                    <img style={{ width: 100 + "%", marginTop: 5 }} src={olxLogo} />
                </div>
                <div className="location rel flex aic">
                    <BsSearch className="ico s24" />
                    <input className="label s15 font" placeholder="Your Location" value="Pakistan" />
                    <VscChevronDown className="s15 arrow s24" />
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query font s15" />
                    <BsSearch className="go s20" />
                </div>
                <div className="action flex aic">
                    <Link to="/account/login" className="font b s18 noul noulh">Login</Link>
                    <button className="sell flex aic">
                        <FaPlus className="s13" /> &nbsp;
                    <h2 className="s13 font b" style={{ marginTop: 8 }}> SELL</h2>
                    </button>
                </div>
            </div>
            <div className="hnav fixed flex aic">
                <button className="view-cates flex aic color">
                    <h2 className="s18 font">All Categories</h2>&nbsp;
                    <VscChevronDown className="arrow s30" />
                </button>
                {
                    nav.map(item =>{
                        return(
                        <Link to= {"/browser/" +item.ID} className="items bl color font s15">{item.label}</Link>
                        )
                    })
                }
            </div>
            <div className="hclr" />
        </React.Fragment>
        // <div class="_2gCSl _3TqoF" style="background-image:url(https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg)" data-aut-id="image"></div>
    );
}
export default Header;