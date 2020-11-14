import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { MdSlowMotionVideo } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';



function Footer() {
    return (
        <React.Fragment>
            <div className="footer flex">
                <div className="block flex flex-col">
                    <h2 className="title s16 font b color">Popular categories</h2>
                    <Link to="/" className="fnoul fnoulh font s14 color">Cars</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Flat for rent</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Jobs</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Mobiles Phones</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 font b color">TRENDING SEARCHES</h2>
                    <Link to="/" className="fnoul fnoulh font s14 color">Bikes</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Watches</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Books</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Dogs</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 font b color">ABOUT US</h2>
                    <Link to="/" className="fnoul fnoulh font s14 color">About OlX Group</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">OLX Blog</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Contact US</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">OLX for Business</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 font b color" style={{ marginTop: -20 + "px" }}>OLX</h2>
                    <Link to="/" className="fnoul fnoulh font s14 color">Help</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Sitemp</Link>
                    <Link to="/" className="fnoul fnoulh font s14 color">Legal & Privacy Information</Link>
                </div>
                <div className="Flinks flex flex-col">
                    <h2 className="title font b s18 color">FOLLOW US</h2>
                    <ul className="Fcions s16 font b ">
                        <li ><RiFacebookCircleLine /></li>
                        <li><TiSocialTwitterCircular /></li>
                        <li><MdSlowMotionVideo /></li>
                        <li><AiOutlineInstagram /></li>
                    </ul>
                    <div className="flex as">
                        <a className="noul bl" href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
                            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" />
                        </a>
                        <a className="noul bl footerFollow" href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footerb flex">
                <h2 className="cfff font s14">Other Countries India - South Africa - Indonesia</h2>
                <h2 className="r cfff font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
            </div>
        </React.Fragment>
    )

}
export default Footer;