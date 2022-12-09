import 'css/Global.css'
import Star from "static/star.png"
import { useParams } from "react-router-dom"
import MockDB from "data.json"
import Dropdown from "components/Dropdown"
import Tag from "components/Tag"
import Caroussel from 'components/Caroussel';
import 'css/Room.css';

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
      stars.push(<img key={index} src={Star} alt='' style={{height: "30px", width: "30px",paddingLeft: "10px"}}/>)
    } else {
      stars.push(<img key={index} src={Star} alt='' style={{height: "30px", width: "30px" ,filter: "grayscale(1) brightness(2.5)", paddingLeft: "10px"}}/>)
    }
  }

  return (
    <div className="Room">
     <Caroussel className="RoomCaroussel" room={currentRoom} />
     <div style={{ display: "flex", justifyContent: "space-between"}}>
     <p className='RoomTitle'>{ currentRoom.title}</p>
     <div className='HostDiv'>
        <p className="HostName">{currentRoom.host.name}</p>
        <img className="HostPicture" src={currentRoom.host.picture} alt="host profile" />
      </div>
     </div>
      <div className='RoomInfos'>
        <div className='RoomTagsList'>{ tags }</div>
        <div style={{ display: "flex"}}>{ stars }</div>
      </div>
      <div className="RoomDropdownsDiv">
        <Dropdown className="Test" label="Description" content={currentRoom.description} />
        <Dropdown className="RoomEquipments" label="Equipements" content={equipmentsAsContent}/>
      </div>
    </div>
  );
}

export default Room;