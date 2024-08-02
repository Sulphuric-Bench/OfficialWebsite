import React from 'react'
import './Body.css'
import logo from '../../assets/Logo.png'
const Body = () => {
  return (
    <div className="mt-5 w-80">
        <div className="wrapper">
            <div className="d-flex flex-column justify-content-center align-items-start" style={{
                height: "70vh"
            }}>
                <h1 style={{
                    fontFamily: "HindSiliguriBold"
                }}>বিশ্বটাকে দেখাবো আমি <br /> আপন হাতের মুঠোয় পুরে</h1>
                <br /><br />
                <p style={{
                    fontFamily: "HindSiliguti"
                }}>বিশ্বমানের কোর্স নিয়ে আসার দৃঢ় প্রত্যয় নিয়ে আমরা আসছি ...</p>
                <p style={{
                    fontFamily: "HindSiliguti"
                }}>চোখ রাখুন আমাদের ফেসবুক পেইজে।</p>
                <button className='marBtn'><a className='marBtnContent' href='https://facebook.com/sulphuric.bench/' target='blank'>Facebook</a></button>
            </div>
            <div className="d-flex justfiy-content-center align-items-center imgwrap"> 
                <img src={logo} alt="Sulphuric Bench Logo" srcset="" style={{
                    width: '300px',
                }} />
            </div>
        </div>
        <div className="row w-100 d-flex justify-content-center align-items-center">
            <button style={{
                position: 'fixed',
                bottom: 0,
                width: 'auto',
                border: 'none',
                backgroundColor: '#182a30',
                color: '#54defe',
                padding: "15px 25px",
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                fontFamily: "CenturyGothic",
                textAlign: 'center',
                fontWeight: 'bold'
            }}>Under Maintenance &#9881;</button>
        </div>
    </div>
  )
}

export default Body