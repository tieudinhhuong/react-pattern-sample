import {useState} from "react";
import DemoTemplate from "./demo-template.tsx";

const CarDemo = () => {
    const [brand] = useState("Huyndesk");
    const [logo] = useState("./car.png");

    return <DemoTemplate brand={brand}
                         logo={<img width={100} src={logo} alt={logo}/>}
                         description={<p>This is a sedan car</p>}/>
}
export default CarDemo
