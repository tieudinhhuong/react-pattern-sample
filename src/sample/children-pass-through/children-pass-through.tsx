import Before from './before';
import After from './after';

const ChildrenPassThrough = () => {
    return <div style={{
        width: '100vw'
    }}>
        <div style={{
            display: 'flex',
        }}>
            <div style={{flex: 1, margin: "50px"}}>
                <Before/>
            </div>
            <div style={{flex: 1, margin: "50px"}}>
                <After/>
            </div>
        </div>
    </div>
}
export default ChildrenPassThrough;
