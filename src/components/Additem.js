import React,{useState} from 'react';


function Additem(props){
    
    if("placeholder" in props){
        return(
            // <Link to={'./CarComp'} style={{textDecoration:"none", color:'black'}}>
            <div className="additem a">
                <div className="poster anim ">
                <img style={{marginLeft:23+"%" ,width:150+"px", height:160+"px"}} src={'https://apollo-singapore.akamaized.net/v1/files/m7piagel56wm3-PK/image;s=200x400;q=60'}/>
                </div>
                <div className="title anim ">
                <h5> Rs 3,290,000</h5>
                </div> 
                <div className="tagline anim ">
                <p>2017 - 37,000 km</p>
                </div> 
                <div className="ftr anim flex" >
                    <div className="anim location ">
                    <p>DHA Phase 6, Karachi..</p>
                    </div> 
                    <div className="anim stamp"/>     
                </div> 

            </div>
            // </Link>
        )
    }

    return(
        <div className="additem">
            
        </div>

    )}
    export default Additem;