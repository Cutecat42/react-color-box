import React, {useState} from "react"
import NewBoxForm from "./NewBoxForm"
import Box from "./Box"

const BoxList = () => {
    const initialState = [
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

    const [boxes, setBoxes] = useState(initialState)
    const addBox = (color, width, height) => {
        let n = boxes.length
        setBoxes(b=>[...b, {
            id: [n+1],
            color,
            width: Number(width),
            height: Number(height)
        }])
        console.log(boxes)
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            {
            boxes.map(b=><p><Box key={b.id} color={b.color} width={b.width} height={b.height}/></p>)
            }
        </div>
    )
}

export default BoxList;