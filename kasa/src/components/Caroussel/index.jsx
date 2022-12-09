import "./style.css"
import { Component } from "react"
import ArrowLeft from "static/left-arrow.png"
import ArrowRight from "static/right-arrow.png"

class Caroussel extends Component {
    constructor(props) {
        super(props);
        this.pictures = props.room.pictures || [props.room.cover]
        this.state = {
            "currentIndex" : props.currentIndex || 0
        }
    };

    picturesStep(value) {
        var newIndex = this.state.currentIndex + value;
        const size = this.pictures.length - 1;
        if (newIndex < 0){newIndex = size}
        if (newIndex > size) {newIndex = 0}
        this.setState({
            "currentIndex": newIndex
        })
    };

    currentPicture() {
        return (
            <img className="CarousselImg" src={this.pictures[this.state.currentIndex]} alt="caroussel" />
        )
    };

    render() {
        return (   
            <div className="CarousselCard">
                { this.currentPicture() }
                <img className="CarousselArrowLeft" src={ArrowLeft} alt="arrow left" onClick={() => this.picturesStep(-1)}/>
                <img className="CarousselArrowRight" src={ArrowRight} alt="arrow right" onClick={() => this.picturesStep(1)} />
                <p className="CarousselCounter">{this.state.currentIndex + 1} / { this.pictures.length }</p>
            </div>
        )
    }
}
 
export default Caroussel