import {useState} from "react";

const CarDemo = () => {
    const [brand] = useState("Huyndesk");
    const [logo] = useState("./car.png");

    return <div style={{border: '1px solid black'}}>
        <div>{brand}</div>
        <img src={logo} alt={logo} width={100}/>
        <p>
            This is sedan car
        </p>
    </div>
}
export default CarDemo
