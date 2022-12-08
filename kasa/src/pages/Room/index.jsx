import 'css/Global.css'
import 'css/Room.css';
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

  return (
    <div className="Room">
     <Caroussel className="RoomCaroussel" room={currentRoom} />
     <p className='RoomTitle'>{ currentRoom.title}</p>
      <div className='RoomTagsList'>{ tags }</div>
      <div className="RoomDropdownsDiv">
        <Dropdown className="RoomDescription" label="Description" content={currentRoom.description} />
        <Dropdown className="RoomEquipments" label="Equipements" content={equipmentsAsContent}/>
      </div>
    </div>
  );
}

export default Room;