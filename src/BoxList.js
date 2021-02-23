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
        let n = boxes[boxes.length-1].id
        setBoxes(b=>[...b, {
            id: Number(n)+1,
            color,
            width: Number(width),
            height: Number(height)
        }])
    }

    const remove = (id) => {
        setBoxes(b=>{
            const newArr = [...b]
            for (let i=0;i<newArr.length;i++) {
                if (newArr[i].id === id) {
                    newArr.splice(i,1)
                }
            }
            return newArr
        })
        return boxes
    }

    return (
        <div style={{marginLeft: 40}}>
            <NewBoxForm addBox={addBox}/>
            {
            boxes.map(b=><Box key={b.id} color={b.color} width={b.width} height={b.height} id={b.id} remove={remove}/>)
            }
        </div>
    )
}

export default BoxList;