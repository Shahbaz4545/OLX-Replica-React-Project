import React, { Component } from 'react';
import { ImCross } from 'react-icons/im';
import { Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { BsDisplay } from 'react-icons/bs';
import Profile_img from '../images/profile-pic.JPG';
// import TextField from '@material-ui/core/TextField';
// import ReactDOM from 'react-dom';
// import index from './index.js';
// import {BrowserRouter, Route } from 'react-router-dom';


// ReactDOM.render(
//   <BrowserRouter>
//     <div>
//       <Route component={index} />
//       <Route path='carComp' render ={
//         <div id="root" className="carComp_Main">
//           <h1></h1>
//           console.log("This is Car Components....");
//         </div>
//       }/>
//     </div>

//   </BrowserRouter>,
//   document.getElementById('root')
// );

// Cross Function
const close = () => {
  document.getElementById('cross').style.display = 'none';
}


function CarComp() {

  return (
    <div className="container carComp_Main">
      <img id="cross" src="https://tpc.googlesyndication.com/simgad/9546981570918567458" border="0" width="970" height="250" alt="" class="img_ad"></img>
      <ImCross class="cross" onClick={close} />

      {/* Slider Start */}

      <Carousel className="slider-main">
        <Carousel.Item>
          <img
            className="slider-img"
            src="https://apollo-singapore.akamaized.net/v1/files/m7piagel56wm3-PK/image;s=1080x1080"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            src="https://apollo-singapore.akamaized.net/v1/files/m3ixca0cqi6w1-PK/image;s=1080x1080"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            src="https://apollo-singapore.akamaized.net/v1/files/jkp9hgemhfgn3-PK/image;s=1080x1080"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            src="https://apollo-singapore.akamaized.net/v1/files/47i708sm9xdk2-PK/image;s=1080x1080"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            src="https://apollo-singapore.akamaized.net/v1/files/padbys1ceosm1-PK/image;s=1080x1080"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Slider End */}

      <ul className="car-money">
        <li>
          <h1>&nbsp;Rs 3,290,000</h1>
        </li>
        <li>
          <p>&nbsp;&nbsp; 2017 - 37,000 km</p>
        </li><br />
        <li>
          <p>&nbsp; &nbsp;Honda Civic Vti Oriel Prosmatec UG Navigation &nbsp;&nbsp;&nbsp;2016/2017 looks Like New</p>
        </li><br />
        <li>
          <p>&nbsp;&nbsp;DHA Phase 6, Karachi, Sindh &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 days ago</p>
        </li>
      </ul>

      <ul className="car-money">
        <li>
          <h5>&nbsp;Seller description</h5>
        </li>
        <li>
          <p>&nbsp;&nbsp;
          <img id="Profile_img" src={Profile_img} />
            <h3 style={{ marginTop: -1.8 + '%' }}> &nbsp;Shahbaz Khan</h3>
           &nbsp;&nbsp;Member since Oct 2018</p>
        </li>
        <li style={{ lineHeight: 3, cursor: 'pointer', backgroundColor: 'rgb(5, 100, 5)', textAlign: 'center', color: '#fff' }}> <b>Chat with seller</b></li><br />
        <li>
          <p>&nbsp;&nbsp;DHA Phase 6, Karachi, Sindh &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 days ago</p>
        </li>
      </ul>
      <div style={{border:2+'px solid lightgray', borderRadius:5+'px'}}>
        <table className="detal-car-table">
          <tr>
            <th> &nbsp;Details</th>
          </tr>
          <tr>
            <td>Make</td>
            <td className="text-center">Honda</td>
            <td className="text-center">Model</td>
            <td className="text-center">Civic VTi Oriel Prosmatec</td>
          </tr>
          <tr>
            <td>Year</td>
            <td className="text-center">2017</td>
            <td className="text-center">KMs driven</td>
            <td className="text-center">387,000km</td>
          </tr>
          <tr>
            <td>Fuel</td>
            <td className="text-center">Petrol</td>
            <td className="text-center">Condtiton</td>
            <td className="text-center">Used</td>
          </tr>
          <tr>
            <td>Register</td>
            <td className="text-center">Karachi</td>
          </tr>
        </table>
        <hr />

        <h1> &nbsp;&nbsp;Description</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Honda Civic Vti Oriel Prosmatec UG Tv Navigation Sunroof Full Option
          Manufacture 2016 But Model 2017 Guranteed 100% Original Tafetta <br/> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; White Colour 37000km Done One Owner Spare Tyre Unused Still Smell Of New Car
          Genuine Buyers Contact Only See In Dha Ph 6
    </div>
    </div>
  );
}

export default CarComp;

