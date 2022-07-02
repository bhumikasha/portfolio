import React, { useEffect, useState } from "react";
import './introduction.css';

function Introduction() {
    const [todayDate, setTodayDate] =  useState(new Date);

    useEffect(() => {
        var today = new Date();
        setTodayDate(today);
    },[]);

    return (
        <>
            <div className="flex">
                <img src={require("./front-end-developer.jpg")} width={100} height={100}></img>
                <div className="flexColumn">
                    <div className="myname"><strong>Bhumika Shah</strong></div>
                    <div className="flexColumn designation">Software Engineer</div>
                </div>
            </div>
            <hr/>
            <div className="flex">
                <div className="developertopmargin">WEB DEVELOPER</div>
                <div className="movetoright">
                    <div className="datedisplay">
                        {todayDate.toDateString()}
                    </div>
                    <label className="availableforwork">Available For Work</label>
                    <div className="adjustlabel">
                        I am a Developer based out of India. I have good experience in Web Development and Consulting. For over a decade I have studied and worked on Reactjs, Javascript, HTML and CSS.
                    </div> 
                    <button className="buttonclass">CONTACT ME</button>                    
                </div>
            </div>

        </>
    )
}

export default Introduction;
