import React from "react";
import "./style.scss";
import GalleryLink from "../GalleryLink";

class PhotographyGallery extends React.Component {
  render() {
    const Posts = this.props.posts.map(edge => (
      <GalleryLink key={edge.node.id} post={edge.node} />
    ));
    return <div className="PhotographyGallery">{Posts}</div>;
  }
}

export default PhotographyGallery;
