import {ReactNode} from "react";

interface IDemoTemplateProps {
    brand: string;
    logo: ReactNode;
    description: ReactNode;
}

const DemoTemplate = (props: IDemoTemplateProps) => {
    const {brand, logo, description} = props;

    return <div style={{border: '1px solid black'}}>
        <div>{brand}</div>
        {logo}
        {description}
    </div>
}
export default DemoTemplate;
