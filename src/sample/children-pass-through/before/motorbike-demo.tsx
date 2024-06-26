import {useState} from "react";

const MotorbikeDemo = () => {
    const [brand] = useState("Toyomaha");
    const [logo] = useState("./bike.png");
    const [footer] = useState("Toyomaha is the fastest bike ever");

    return <div style={{border: '1px solid black'}}>
        <div>{brand}</div>
        <img src={logo} alt={logo} width={100}/>
        <p style={{color: 'red'}}>
            This is a 150cc motorbike
        </p>
        <h2>{footer}</h2>
    </div>
}
export default MotorbikeDemo
