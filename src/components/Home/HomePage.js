import React from "react";
import "./homepage.css";
import {NavBar} from "../CreateEvent/CreateEvent";
import { IconName } from "react-icons/im";
import landing_side_img from "./landing_side.svg"
// import $ from "jquery";
// import { useState } from "react";


const HomePage = (props) => {

    return(
        <div className="backColor">
            <div className="containertop">
            </div>
            <div className="container d-lg-block d-none">
                <div className="row">
                    <div className="moviebox col-md-5 col-md-5 col-sm-5"></div>
                        <div className="rightcontent col-lg-7 col-md-7 col-sm-9">
                            <div className="text1">Imagine If</div>
                            <div className="text2">Snapchat</div>
                            <div className="text3">had events.</div>
                            <div className="text4 pt-3">Easily host and share events with your friends </div>
                            <div className="text4">across any social media.</div>
                            <div className="pt-5">
                            <a href="/create" className="buttonright ms-auto">
                                <div className="buttoncontent">🎉 Create my event</div>
                            </a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container d-md-block d-lg-none">
                <div className="row">
                        <div className="rightcontent">
                            <div className="text1">Imagine If</div>
                            <div className="text2">Snapchat</div>
                            <div className="text3">had events.</div>
                            <div className="text4 pt-3">Easily host and share events with your friends </div>
                            <div className="text4">across any social media.</div>
                        </div>
                </div>
                        <div className="moviebox"></div>
                        <div className="pt-5 pb-5">
                        <a href="/create" className="buttonright">
                                <div className="buttoncontent">🎉 Create my event</div>
                            </a>
                            </div>
            </div>
        </div>
    );
};

export {HomePage};