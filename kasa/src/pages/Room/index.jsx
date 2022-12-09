import 'css/Global.css'
import 'css/Room.css';
import Star from "static/star.png"
import { useParams } from "react-router-dom"
import MockDB from "data.json"
import Dropdown from "components/Dropdown"
import Tag from "components/Tag"
import Caroussel from 'components/Caroussel';

function Room() {
  const { roomId } = useParams()
  const currentRoom = MockDB.filter(room => room["id"] === roomId)[0] || {}
  const equipmentsAsContent = currentRoom.equipments.map(
    (equipment) => <p className='RoomEquipmentsText'>{equipment}</p>
  ) 
  const tags = currentRoom.tags.map((e) => <Tag key={e} className="RoomTag" text={e}/>)
  const stars = []
  for (var index = 1; index<=5; index++) {
    if (index <= currentRoom.rating) {
      stars.push(<img key={index} src={Star} alt='' style={{paddingLeft: "10px"}}/>)
    } else {
      stars.push(<img key={index} src={Star} alt='' style={{filter: "grayscale(1) brightness(2.5)", paddingLeft: "10px"}}/>)
    }
  }

  return (
    <div className="Room">
     <Caroussel className="RoomCaroussel" room={currentRoom} />
     <p className='RoomTitle'>{ currentRoom.title}</p>
      <div style={{display: "flex", justifyItems: "space-between", width: "100%"}}>
        <div className='RoomTagsList'>{ tags }</div>
        <div>{ stars }</div>
      </div>
      <div className="RoomDropdownsDiv">
        <Dropdown className="Test" label="Description" content={currentRoom.description} />
        <Dropdown className="RoomEquipments" label="Equipements" content={equipmentsAsContent}/>
      </div>
    </div>
  );
}

export default Room;