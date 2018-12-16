import React, { Component } from "react";
import image from './assets/images/image.jpg';

class Images extends Component {
  state = {
    images: []
  }

  renderImages() {
    const { images } = this.state;

    return images.map((image) => (
      <img style={{height: '300px',
        width:'300px',
        marginRight: '5px'}} src={image} alt="bridge" />
    ))
  }

  _addPhoto = () => {
    this.setState({images: [...this.state.images, image]})
  }

  _deletePhoto = () => {
    let {images} = this.state;
    images.pop()
    this.setState({ images })
  }

  render() {
    return (
      <div style={{
        display: 'inline-block',
        width: '1570px',
        boxSizing: 'border-box'}}
        >
          <button onClick={() => this._addPhoto()}>Add photo</button>
          <button onClick={() => this._deletePhoto()}>Delete photo</button>
          {this.renderImages()}
        </div>
    );
  }
}

export default Images;
