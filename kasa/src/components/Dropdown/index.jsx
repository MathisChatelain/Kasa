import "./style.css"
import ArrowUp from "static/up-arrow.png"
import ArrowDown from "static/down-arrow.png"
import { useState } from "react"

function Dropdown(props) {
    const [toggle, setToggle] = useState(false)
    if (toggle) {
        return (   
            <div className="DropdownCard">
                <div className="DropdownBar" onClick={() => setToggle(!toggle)}>
                    <p>{props.label}</p>
                    <img src={ArrowUp} alt="arrow-up"  />
                </div>
                <div className="DropdownContent">{props.content}</div>
            </div>
        )
        } else {
            return (   
                <div className="DropdownCard">
                    <div className="DropdownBar" onClick={() => setToggle(!toggle)} >
                        <p>{props.label}</p>
                        <img src={ArrowDown} alt="arrow-up"/>
                    </div>
                </div>
            )
        }
    }
 
export default Dropdown