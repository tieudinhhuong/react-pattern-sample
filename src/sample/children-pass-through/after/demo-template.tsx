import {FC, PropsWithChildren, ReactNode} from "react";

interface IDemoTemplateProps {
    brand: string;
    footer: ReactNode;
}

const DemoTemplate: FC<PropsWithChildren<IDemoTemplateProps>> = (props) => {
    const {brand, children, footer} = props;

    return <div style={{border: '1px solid black'}}>
        <div>{brand}</div>
        {children}
        {footer}
    </div>
}
export default DemoTemplate;
