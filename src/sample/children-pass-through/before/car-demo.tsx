import {useState} from "react";

const CarDemo = () => {
    const [brand] = useState("Huyndesk");
    const [footer] = useState("Huyndesk is a new brand");

    return <div style={{border: '1px solid black'}}>
        <div>{brand}</div>
        <p>
            Random Paragraph
            Random Paragraph
            Random Paragraph
            Random Paragraph
            Random Paragraph
        </p>
        <h3>{footer}</h3>
    </div>
}
export default CarDemo
