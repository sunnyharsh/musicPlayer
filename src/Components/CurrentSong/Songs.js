import React, { Component } from "react";

class Song extends Component {
  state = {
    isPlay: false
  };
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div>
        <audio id="myAudio" className="audio-element">
          <source src={this.props.song}></source>
        </audio>
      </div>
    );
  }
}
export default Song;
