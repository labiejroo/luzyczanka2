import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import './galleryStyle.css';

import cakeImage from './assets/images/cake.jpg';
import decorationImage from './assets/images/decoration.jpg';
import exterior1Image from './assets/images/exterior.jpg';
import exterior2Image from './assets/images/exterior2.jpg';
import floorImage from './assets/images/floor.jpg';
import foodTableImage from './assets/images/foodTable.jpg';
import foodTable2Image from './assets/images/foodTable2.jpg';
import interiorEmptyImage from './assets/images/interiorEmpty.jpg';
import interiorMainTableImage from './assets/images/interiorMainTable.jpg';
import interiorMainTable2Image from './assets/images/interiorMainTable2.jpg';
import mainTable2Image from './assets/images/mainTable2.jpg';
import sushiImage from './assets/images/sushi.jpg';

import cakeImageSmall from './assets/images/cake.jpg';
import decorationImageSmall from './assets/images/decoration.jpg';
import exterior1ImageSmall from './assets/images/exterior.jpg';
import exterior2ImageSmall from './assets/images/exterior2.jpg';
import floorImageSmall from './assets/images/floor.jpg';
import foodTableImageSmall from './assets/images/foodTable.jpg';
import foodTable2ImageSmall from './assets/images/foodTable2.jpg';
import interiorEmptyImageSmall from './assets/images/interiorEmpty.jpg';
import interiorMainTableImageSmall from './assets/images/interiorMainTable.jpg';
import interiorMainTable2ImageSmall from './assets/images/interiorMainTable2.jpg';
import mainTable2ImageSmall from './assets/images/mainTable2.jpg';
import sushiImageSmall from './assets/images/sushi.jpg';

const photos = [
  {
  photo: cakeImage,
  caption: "",
  subcaption: "",
  thumbnail: cakeImageSmall,
}, {
  photo: sushiImage,
  caption: "",
  subcaption: "",
  thumbnail: sushiImageSmall,
}, {
  photo: exterior1Image,
  caption: "",
  subcaption: "",
  thumbnail: exterior1ImageSmall,
}
, {
  photo: exterior2Image,
  caption: "",
  subcaption: "",
  thumbnail: exterior2ImageSmall,
}
, {
  photo: floorImage,
  caption: "",
  subcaption: "",
  thumbnail: floorImageSmall,
}
, {
  photo: foodTableImage,
  caption: "",
  subcaption: "",
  thumbnail: foodTableImageSmall,
}
, {
  photo: foodTable2Image,
  caption: "",
  subcaption: "",
  thumbnail: foodTable2ImageSmall,
}
, {
  photo: interiorEmptyImage,
  caption: "",
  subcaption: "",
  thumbnail: interiorEmptyImageSmall,
}
, {
  photo: interiorMainTable2Image,
  caption: "",
  subcaption: "",
  thumbnail: interiorMainTable2ImageSmall,
}
, {
  photo: mainTable2Image,
  caption: "",
  subcaption: "",
  thumbnail: mainTable2ImageSmall,
}
, {
  photo: decorationImage,
  caption: "",
  subcaption: "",
  thumbnail: decorationImageSmall,
}
];

class Example extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
        <>
            
            <button  className="galleryButton" onClick={this.toggleGallery}><i class="icon fas fa-camera fa-4x"></i></button>
            <ReactBnbGallery
                show={this.state.galleryOpened}
                photos={photos}
                onClose={this.toggleGallery} />
             
        </>
    )
  }
}

export default Example;