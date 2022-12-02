import 'css/Global.css'
import 'css/Home.css';
import MockDB from "data.json"
import React from 'react';
import Thumbnail from "components/Thumbnail"
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.data = MockDB;
  };

  galleryItems() {
    return this.data.map((room) =>
    <Link key={room.id} to={`/room/${room.id}`}>
      <Thumbnail key={`thumbnail${room.id}`} room={room} />
    </Link>
    )
  };

  render() {
    return (
    <div className="Home">
      <div className="HomeIllustration">
        <p className="HomeIllustrationText">Chez vous, partout et ailleurs</p>
      </div>
      <div className="HomeGallery">
        {this.galleryItems()}
      </div>
    </div>
    )
  };
}

export default Home;
