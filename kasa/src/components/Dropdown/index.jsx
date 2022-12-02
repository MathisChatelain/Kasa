import "./style.css"
import {ArrowUp} from "static/up-arrow.png"
import {ArrowDown} from "static/down-arrow.png"

function Dropdown(props) {
    if (props.isOpen) {
        return (   
            <div className="DropdownCard" style={width=props.width}>
                <div className="DropdownBar">
                    <p>{props.label}</p>
                    <img src={ArrowUp} alt="arrow-up" />
                </div>
                <div className="DropdownContent">{props.content}</div>
            </div>
        )
    } else {
        return (   
            <div className="DropdownCard" style={width=props.width}>
                 <div className="DropdownBar">
                    <p>{props.label}</p>
                    <img src={ArrowDown} alt="arrow-up"/>
                </div>
            </div>
        )
    }
}
 
export default Dropdown