import {useState} from "react";
import DemoTemplate from "./demo-template.tsx";

const MotorbikeDemo = () => {
    const [brand] = useState("Toyomaha");
    const [logo] = useState("./bike.png");
    const [footer] = useState("Toyomaha is the fastest bike ever");

    return <DemoTemplate brand={brand}
                         footer={<h2>{footer}</h2>}>
        <img src={logo} alt={logo} width={100}/>
        <p style={{color: 'red'}}>
            This is a 150cc motorbike
        </p>
    </DemoTemplate>
}
export default MotorbikeDemo
