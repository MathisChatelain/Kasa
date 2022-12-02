import "./style.css"

function Tag(props) {
    return (   
        <div className="TagCard">
            <p className="TagText">{props.text}</p>
        </div>
    )
}
 
export default Tag