import {useState} from "react";
import DemoTemplate from "./demo-template.tsx";

const MotorbikeDemo = () => {
    const [brand] = useState("Toyomaha");
    const [logo] = useState("./bike.png");

    return <DemoTemplate brand={brand}
                         logo={<img src={logo} alt={logo} width={100}/>}
                         description={<p style={{color: 'red'}}>This is a 150cc motorbike</p>}/>
}
export default MotorbikeDemo
