import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Welcome</h1>
            <div>
               <h1>Teacher</h1>
               <h1>Class</h1>
               <h1>Subject</h1>
    
            </div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage