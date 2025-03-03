import React, { useState } from "react";

function MyCar() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    function handleYearChange(event) {
        setCar(c => ({ ...c, year:Number(event.target.value)  }));

    }
    function handleMakeChange(event) {
        setCar(c=>({...c,make : event.target.value}))

    }

    function handleModelChange(event) {
        setCar(c=>({...c,model : event.target.value}))

    }

    return (
        <>
            <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} placeholder="Year"></input><br/>
            <input type="text" value={car.make} onChange={handleMakeChange} placeholder="make"></input><br/>
            <input type="text" value={car.model} onChange={handleModelChange} placeholder="model" /><br/>
        </>
    )
}

export default MyCar