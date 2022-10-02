import React from "react";
import "./createevent.css";
// import $ from "jquery";
// import { useState } from "react";


const CreateEvent = (props) => {
    // const [user,setuser] = useState();
    return (
        <div className="container">

            <div className="row">

                <div className="col-4">
                    <div className="EventPagetext"> Create Your Event </div>
                </div>
            </div>
            <div className="row">    
                <div className="col-7">
                <form>
                <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                <label for="nme"><span>🎉 My event is called</span></label><br/>
                <input type="text" name="name" class="question" id="startdate" required autocomplete="off" />
                <label for="startdate"><span>🗓 It starts at</span></label><br/>
                <input type="text" name="name" class="question" id="enddate" required autocomplete="off" />
                <label for="enddate"><span>🏁 It ends at (optional)</span></label><br/>
                <input type="text" name="location" class="question" id="enddate" required autocomplete="off" />
                <label for="location"><span>📍 It’s happening at (optional)</span></label><br/>
                <input type="text" name="name" class="question" id="url" required autocomplete="off" />
                <label for="url"><span>🔗 Add a URL link (optional)</span></label><br/>
                <input type="text" name="name" class="question" id="description" required autocomplete="off" />
                <label for="description"><span>✏️ Description (optional)</span></label>
                </form><br/><br/>
                <a href="/create" className="buttonright">
                                <div className="buttoncontent">🎉 Create my event</div>
                            </a>
                </div>
                <div className="col-5">
                </div>

            </div>
            
        </div>
    )
};

export {CreateEvent};    