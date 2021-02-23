import React from "react"
import "./Box.css"

const Box = ({color, width, height}) => {
    return (
        <div className="Box" style={{backgroundColor: color, width: width, height: height}}>
        </div>
    )
}

export default Box;