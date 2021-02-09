import React, { useEffect, useState } from "react"
import "../NavFolder/Nav.css"

function Nav() {
    const [show,handleshow] = useState(false)

    const transitionalNav = ()=>{
        if(window.scrollY>100){
            handleshow(true)
        }else{
            handleshow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionalNav)
        return()=> window.removeEventListener("scroll",transitionalNav)
    }, [])


    return(
        <div className={`nav ${show && "nav_white"}`}>
            <div className="nav_content">
            <img className="nav_logo" src="https://play-lh.googleusercontent.com/0WySjQZpwOJidL-be_gxVithK0nEoO-EYzcaGemn1gWmSrPlkzxx0hBKeCxj44G1VA"/>
            <button className="nav_button">LOGIN/SIGNUP</button>
            </div>
            <div className="buttons">
                <button className="button5"><i class="fa fa-home"></i> Home</button>
                <button className="button5"><i class="fa fa-film"></i> MOVIES</button>
                <button className="button5"><i class="fa fa-tv"></i> LIVE TV</button>
                <button className="button5"><i class="fa fa-play-circle"></i> ORIGINALS</button>
                <button className="button5"><i class="fa fa-theater-masks"></i>DRAMA</button>
            </div>
        </div>
    )
    
}
export default Nav