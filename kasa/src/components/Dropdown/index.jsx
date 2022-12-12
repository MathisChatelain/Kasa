import "./style.css"
import ArrowUp from "static/up-arrow.png"
import ArrowDown from "static/down-arrow.png"
import { Component } from "react"

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "toggle": false
        }
    };
    

    currentArrow(){
        if (this.state.toggle) {
            return <img src={ArrowUp} alt="arrow-up"  />
        } else { 
            return <img src={ArrowDown} alt="arrow-down"/> 
        }
    };

    dropdownContent() {
        if (this.state.toggle) {
            return <div className="DropdownContent">{this.props.content}</div>
        }
    };

    setToggle(value) {
        this.setState({"toggle" : !value})
    }

    render() {
        return (   
            <div className="DropdownCard">
                <div className="DropdownBar" onClick={() => this.setToggle(this.state.toggle)}>
                    <p>{this.props.label}</p>
                    {this.currentArrow()}
                </div>
                { this.dropdownContent() }
            </div>
            )
        } 
    }
 
export default Dropdown