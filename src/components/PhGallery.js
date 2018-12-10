import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Images from "../assets/images";

const photos = [
  {
    src: Images.ban12,
    width: 4,
    height: 3
  },
  {
    src: Images.ban13,
    width: 2,
    height: 2
  },
  {
    src: Images.ban14,
    width: 4,
    height: 3
  },
  {
    src: Images.ban15,
    width: 4,
    height: 3
  },
  {
    src: Images.ban16,
    width: 4,
    height: 3
  },
  {
    src: Images.ban17,
    width: 4,
    height: 3
  },
  {
    src: Images.ban18,
    width: 4,
    height: 3
  },
  {
    src: Images.ban19,
    width: 4,
    height: 3
  },
  {
    src: Images.ban20,
    width: 4,
    height: 3
  },
  {
    src: Images.ban21,
    width: 4,
    height: 3
  },
  {
    src: Images.ban22,
    width: 4,
    height: 3
  },
  {
    src: Images.ban23,
    width: 3,
    height: 4
  },
  {
    src: Images.ban24,
    width: 4,
    height: 3
  },
  {
    src: Images.ban25,
    width: 4,
    height: 3
  },
  {
    src: Images.ban26,
    width: 3,
    height: 4
  },
  {
    src: Images.ban27,
    width: 4,
    height: 3
  },
  {
    src: Images.ban28,
    width: 4,
    height: 3
  },
  {
    src: Images.ban29,
    width: 4,
    height: 3
  },
  {
    src: Images.ban30,
    width: 4,
    height: 3
  },
  {
    src: Images.ban31,
    width: 4,
    height: 3
  },
  {
    src: Images.ban32,
    width: 4,
    height: 3
  },
  {
    src: Images.ban33,
    width: 4,
    height: 3
  },
  {
    src: Images.ban34,
    width: 4,
    height: 3
  },
  {
    src: Images.ban35,
    width: 4,
    height: 3
  },
  {
    src: Images.ban36,
    width: 4,
    height: 3
  },
  {
    src: Images.ban37,
    width: 4,
    height: 3
  },
  {
    src: Images.ban8,
    width: 4,
    height: 3
  },
  {
    src: Images.ban9,
    width: 4,
    height: 3
  },
  {
    src: Images.ban10,
    width: 4,
    height: 3
  },
  {
    src: Images.ban11,
    width: 4,
    height: 3
  },
  {
    src: Images.ban12,
    width: 4,
    height: 3
  },
];

export default class PhGallery extends Component {
  render() {
    return (
      <div style={{ marginTop: "15px", padding: "10px"}}>
        <Gallery
          photos={photos}
          direction="column"
        />
      </div>
    );
  }
}
