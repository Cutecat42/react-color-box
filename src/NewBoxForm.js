import React, {useState} from "react"

const NewBoxForm = ({addBox}) => {
    const initialState = {
        color: "",
        width: "",
        height: ""
    }

    const [formData,setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(fData=>({
            ...fData,
            [name]: value         
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {color, width, height} = formData
        addBox(color,width,height)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color of Box</label>
            <input 
            type="text"
            onChange={handleChange}
            id="color"
            name="color"
            value={formData.color}
            />
            <label htmlFor="width">Width of Box</label>
            <input 
            type="text"
            onChange={handleChange}
            id="width"
            name="width"
            value={formData.width}
            />
            <label htmlFor="height">Height of Box</label>
            <input 
            type="text"
            onChange={handleChange}
            id="height"
            name="height"
            value={formData.height}
            />
            <button>Add box</button>
        </form>
    )
}

export default NewBoxForm;
