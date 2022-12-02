import "./style.css"

function Thumbnail(props) {
    return (   
        <div className="ThumbnailCard">
            <img src={props.room.cover} alt="illustration thumbnail"/>
            <p>{props.room.title}</p>
        </div>
    )
}
 
export default Thumbnail