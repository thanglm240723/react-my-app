import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("");

    function handlecolorChange(event) {
        setColor(event.target.value);

    }
    return (
        <>
            <div style={{ backgroundColor: color }}>
                <p>Select color :{color}</p>
            </div>
            <label htmlFor="">Select a color :</label>
            <input type="color" value={color} onChange={handlecolorChange}></input>
        </>

    )
}

export default ColorPicker