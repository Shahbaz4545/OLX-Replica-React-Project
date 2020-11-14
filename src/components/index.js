import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Additem from './Additem.js';


function IndexPage() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            let _list = [];
            for (let i = 0; i < 20; i++) {
                _list.push(<Additem placeholder={true} />);
            }
            setList(_list);
        }
    }, list);

    return (
        <React.Fragment>
             <div className=" flex" >
                <img className="backImgSell" src={'https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg'}/>
            </div>
            <div className="index-page">
            <Link to="/Car" style={{textDecoration:"none", color:'black'}}>
                <div className="ad-list flex">    
                       {list}
                    <center>
                        <button className="load-more font c333 b anim s20">
                            Load More
                        </button>
                    </center>
                </div>
                </Link>
            </div>
            <div className="app-ribbon flex">
                <div className="img">
                    <img className="bl" src="https://statics.olx.com.pk/external/base/img/phone-app.png" />
                </div>
                <div className="meta">
                    <h2 className="title font b s30 color">TRY THE OLX APP</h2>
                    <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
                </div> 
                <span style={{height:150+"px", background:" #ddd", color:" #ddd"}}>|</span>
                <div className="links">
                    <h2 className="title font b s18 color">GET YOUR APP TODAY</h2>
                    <div className="flex as">
                        <a className="noul bl" href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
                            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" />
                        </a>
                        <a className="noul bl" href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default IndexPage;