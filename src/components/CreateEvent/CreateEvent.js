import React from "react";
import "./createevent.css";
// import $ from "jquery";
// import { useState } from "react";


const CreateEvent = (props) => {
    // const [user,setuser] = useState();
    return (
        <div className="container">

            <div className="row">

                <div className="col-7">
                    <div className="EventPagetext"> Create Your Event </div>
                    <div className="input1">
                        <div className="input1text">
                        🎉 My event is called
                        </div>
                        <div className="input1input">
                            <input type="text"/>
                        </div>

                    </div>
                </div>

                <div className="col-5">

                </div>

            </div>
            
        </div>
    )
};

export {CreateEvent};    