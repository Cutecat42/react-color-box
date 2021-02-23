import React from "react"
import Box from "./Box"

const BoxList = () => {
    const boxes = [
        {
            id: 1,
            color: "purple",
            width: 300,
            height: 300
        },
        {
            id: 2,
            color: "green",
            width: 500,
            height: 50
        },
        {
            id: 3,
            color: "red",
            width: 100,
            height: 300
        }
    ]
    return (
        <div>
            "Hello"
            {
            boxes.map(b=><p><Box key={b.id} color={b.color} width={b.width} height={b.height}/></p>)
            }
        </div>
    )
}

export default BoxList;