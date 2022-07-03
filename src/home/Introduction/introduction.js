import React, { useEffect, useState } from "react";
import './introduction.css';

function Introduction() {
    const [todayDate, setTodayDate] =  useState(new Date);
    const [avForWork, setAvForWork] = useState("*Available For Work")

    useEffect(() => {
        var today = new Date();
        setTodayDate(today);
    },[]);

    function HandleAvailability() {
        setAvForWork("😭This is a fake availability! Please Contact Me to get the actual status.")
    } 

    function HandleOutAvail() {
        setAvForWork("*Available For Work");
    }

    return (
        <>
            < div className="parallax">
                <div className="flex">
                    <img className="logoclass" src={require("./front-end-developer.jpg")} width={100} height={100}></img>
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
                        <label className="availableforwork" onMouseEnter={HandleAvailability} onMouseOut={HandleOutAvail}>{avForWork}</label>
                        <div className="adjustlabel">
                            I am a Developer based out of India. I have good experience in Web Development and Consulting. For over a decade I have studied and worked on Reactjs, Javascript, HTML and CSS.
                        </div> 
                        <button className="buttonclass">CONTACT ME</button>                    
                    </div>
                </div>
            </div>
            <div style={{height:"100%", backgroundColor:"black", fontSize:"36px", color:"white", paddingBottom:"2.5%"}}>
                <div className="flex">
                    <div className="helloClass">
                        HELLO, I AM BHUMIKA SHAH
                        <div className="passionPara">
                            I use my passion and skills to create digital products and experiences.

                            What can a “Web Developer” do, you ask?

                            I can develop a website from nothing into existence, fully formed. I do not use tricks, nor is this magic. I specialize in manipulating the very fabric of the web, its raw materials of HTML, CSS, JavaScript, and SVG. Linux servers serve me, domains are my domain, and certificates are certain.

                            Open-source technologies empower this process. I am a custom WordPress theme and plugin development expert. I fully embraced the Gutenberg editor and can create custom blocks from scratch for any conceivable need. I have contributed in small ways to these and other open-source efforts and intend to give back every chance I get.

                            My art & design background informs ideation to design through to implementation. In 2010 I graduated from the Cleveland Institute of Art with a focus on digital arts and a mantra to always consider my audience. I will always advocate for the user of my interfaces; accessibility is not optional.

                            I can plan, design, build, launch, and maintain a website myself—did I mention that I build mobile apps too? I have worked on 10+ published cross-platform iOS and Android apps with React Native and Titanium SDK, roughly half of which I built and maintain solo.
                        </div>
                    </div>
                    <div><br/>
                        <img className="gifcss" src={require("./rightGif.gif")} alt="this slowpoke moves" width="750" height="500"></img>
                    </div>
                </div>
            </div>
            
            <div class="parallax">
                <div className="flex">
                    <div className="developertopmargin">LET'S CONNECT</div>
                    <div className="Interests">
                        <center className="topMargin">
                        I'M ALWAYS INTERESTED ABOUT:
                            <div className="interestedlables">UI/UX</div>
                            <div className="interestedlables">Frontend Development</div>
                            <div className="interestedlables">Webflow Development</div>
                            <div className="interestedlables">Digital Consultant</div>
                            <div className="interestedlables">PIZZA</div>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;
