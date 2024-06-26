import {useState} from "react";
import DemoTemplate from "./demo-template.tsx";

const CarDemo = () => {
    const [brand] = useState("Huyndesk");
    const [footer] = useState("Huyndesk is a new brand");

    return <DemoTemplate brand={brand}
                         footer={<h3>{footer}</h3>}>
        <p>
            Random Paragraph
            Random Paragraph
            Random Paragraph
            Random Paragraph
            Random Paragraph
        </p>
    </DemoTemplate>
}
export default CarDemo
