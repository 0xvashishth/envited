import React from "react";
import "./eventpage.css";
// import $ from "jquery";
// import { useState } from "react";
import { ImCalendar, ImArrowRight2, ImLocation2 } from "react-icons/im";


const EventPage = (props) => {
    // const [user,setuser] = useState();
    return (
        <div>
        <div className="container topwidth d-lg-block d-none">
            <div className="topcontainer"></div>
            <div className="row">
                <div className="col-5">
                    <div className="text11">Birthday Bash</div>
                    <div className="text22">Hosted by Elysia</div>
                    <div className="marginecontainer"></div>
                    <div className="row">
                        <div className="col-6 lefticonbar">
                                <ImCalendar />
                        </div>
                        <div className="col-8">
                            <div className="col-12 datetext">
                                18 August 6:00PM
                            </div>
                            <div className="col-12 datebelowtext">
                            to 19 August 1:00PM UTC +10
                            </div>
                        </div>
                        <div className="col-1 rightticonbar">
                        <ImArrowRight2 />
                        </div>
                    </div>
                    <div className="marginecontainer1"></div>
                    <div className="row">
                        <div className="col-6 lefticonbar1">
                                <ImLocation2 />
                        </div>
                        <div className="col-8">
                            <div className="col-12 datetext1">
                            Street name
                            </div>
                            <div className="col-12 datebelowtext1">
                            Suburb, State, Postcode
                            </div>
                        </div>
                        <div className="col-1 rightticonbar1">
                        <ImArrowRight2 />
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <img className="imgleft" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T090018Z&X-Amz-Expires=86400&X-Amz-Signature=bfb4d5a8322e1a46ecfd6564ef395bf953cab0ebeb5218c9bd937a78accb0f21&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" />
                </div>
            </div>
        </div>


        <div className="container topwidth d-md-block d-lg-none">
            <div className="topcontainer"></div>
            <div className="row">
            <div className="col-3">
                    <img className="imgleft" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T090018Z&X-Amz-Expires=86400&X-Amz-Signature=bfb4d5a8322e1a46ecfd6564ef395bf953cab0ebeb5218c9bd937a78accb0f21&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" />
                </div>
                <div className="col-12">
                    <div className="text11">Birthday Bash</div>
                    <div className="text22">Hosted by Elysia</div>
                    <div className="marginecontainer"></div>
                    <div className="row leftcalender">
                        <div className="col-6 lefticonbar">
                                <ImCalendar />
                        </div>
                        <div className="col-8">
                            <div className="col-12 datetext">
                                18 August 6:00PM
                            </div>
                            <div className="col-12 datebelowtext">
                            to 19 August 1:00PM UTC +10
                            </div>
                        </div>
                        <div className="col-1 rightticonbar">
                        <ImArrowRight2 />
                        </div>
                    </div>
                    <div className="marginecontainer1"></div>
                    <div className="row">
                        <div className="col-6 lefticonbar1">
                                <ImLocation2 />
                        </div>
                        <div className="col-8">
                            <div className="col-12 datetext1">
                            Street name
                            </div>
                            <div className="col-12 datebelowtext1">
                            Suburb, State, Postcode
                            </div>
                        </div>
                        <div className="col-1 rightticonbar1">
                        <ImArrowRight2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className="marginecontainer1"></div>
        </div>
        </div>
    )
};

export {EventPage};    