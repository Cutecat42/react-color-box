import React from "react"
import "./Box.css"

const Box = ({color, width, height}) => {
    return (
        <div className="Box" style={{backgroundColor: color, width: width, height: height}}>
         {/* "I am a box"
         <p>My color is {color}</p>
         <p>My width is {width}</p>
         <p>My height is {height}</p> */}
        </div>
    )
}

export default Box;