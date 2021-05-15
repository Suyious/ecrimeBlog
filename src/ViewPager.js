import React, { useState } from 'react';
import "./ViewPager.css"
import blog1 from "./media/blogback1.jpg"
import blog2 from "./media/blogback2.jpg"
import blog3 from "./media/blogback3.jpg"

function ViewPager() {

    const backs = [
        blog1,
        blog2,
        blog3
    ];
    const [background, setBackground] = useState(0);

    const handleBack = (value) => {
        if((background===backs.length-1 && value===+1) || (background===0 && value===-1)){
            return;
        }
        setBackground(background+value);
    }

    return (
        <div className="ViewPager">
            <img className="PagerImg" src={backs[background]} alt="blog"/>
            <div className="overlay"></div>
            <div className={`swipebutt leftbutt ${background===0?"disablbutt":""}`}  onClick={()=>handleBack(-1)}>
                <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.149 17.6255C22.1649 18.6096 22.1649 20.1994 23.149 21.1835L32.9398 30.9743L23.149 40.7651C22.1649 41.7493 22.1649 43.339 23.149 44.3232C24.1331 45.3073 25.7229 45.3073 26.707 44.3232L38.2894 32.7407C39.2736 31.7566 39.2736 30.1668 38.2894 29.1827L26.707 17.6003C25.7481 16.6414 24.1331 16.6414 23.149 17.6255Z" fill="white"/>
                </svg>
            </div>
            <div className={`swipebutt rightbutt ${background===backs.length-1?"disablbutt":""}`} onClick={()=>handleBack(1)}>
                <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.149 17.6255C22.1649 18.6096 22.1649 20.1994 23.149 21.1835L32.9398 30.9743L23.149 40.7651C22.1649 41.7493 22.1649 43.339 23.149 44.3232C24.1331 45.3073 25.7229 45.3073 26.707 44.3232L38.2894 32.7407C39.2736 31.7566 39.2736 30.1668 38.2894 29.1827L26.707 17.6003C25.7481 16.6414 24.1331 16.6414 23.149 17.6255Z" fill="white"/>
                </svg>
            </div>
            <div className="title">
                <h2>What is the modus operandi of online loan?</h2>
            </div>
            <div className="circles">
                <div className={`circle ${background===0?"bright":""}`} onClick={()=>setBackground(0)}></div>
                <div className={`circle ${background===1?"bright":""}`} onClick={()=>setBackground(1)}></div>
                <div className={`circle ${background===2?"bright":""}`} onClick={()=>setBackground(2)}></div>
            </div>
            <div className="gradient"></div>
        </div>
    )
}

export default ViewPager
