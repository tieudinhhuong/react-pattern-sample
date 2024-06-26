import {useState} from "react";

const MotorbikeDemo = () => {
    const [brand] = useState("Toyomaha");
    const [logo] = useState("./bike.png");

    return <div style={{border: '1px solid black'}}>
        <div>{brand}</div>
        <img src={logo} alt={logo} width={100}/>
        <p style={{color: 'red'}}>
            This is a 150cc motorbike
        </p>
    </div>
}
export default MotorbikeDemo
