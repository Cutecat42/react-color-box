import React from "react"
import "./Box.css"

const Box = ({color, width, height, id, remove}) => {
    const handleDelete = (e) => {
        e.preventDefault()
        remove(id);
    }
    return (
        <div className="Box" style={{backgroundColor: color, width: width, height: height}}>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Box;