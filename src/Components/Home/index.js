import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import { Grid } from "@material-ui/core";
import MediaControlCard from "../MusicCard/MusicCard";
import { getSongs } from "../../store/actions/getSongs.action";
import CurrentSongs from "../CurrentSong/CurrentSong";
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchSong: "",
      currentSongs: {},
      changeSong: false
    };
  }
  componentDidMount() {
    this.props.$getSongs({ value: "latest" });
  }
  searchSongs = e => {
    this.setState({
      searchSong: e.target.value
    });
  };
  Search = () => {
    if (this.state.searchSong) {
      this.props.$getSongs({ value: this.state.searchSong });
    } else {
      this.props.$getSongs({ value: "latest" });
    }
  };
  NewSongPlay = obj => {
    this.setState({
      changeSong: false
    });
    setTimeout(() => {
      this.setState({
        changeSong: true,
        currentSongs: obj
      });
    }, 2000);
    // this.setState({
    //   currentSongs: obj
    // });
  };
  playAudio = () => {
    this.setState({
      changeSong: true
    });
  };
  pauseAudio = () => {
    this.setState({
      changeSong: false
    });
  };
  render() {
    const { _getSongs } = this.props;
    const { currentSongs, changeSong } = this.state;
    // console.log(_getSongs, "_getSongs");
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Search searchSongs={this.searchSongs} Search={this.Search} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid
            item
            xs={10}
            style={{
              marginTop: "12px",
              height: `${window.innerHeight - 150}px`,
              overflow: "auto"
            }}
          >
            <Grid container justify="center" spacing={2}>
              {_getSongs &&
                _getSongs.results &&
                _getSongs.results.map((obj, index) => (
                  <Grid key={index} item xs={3} sm={2} className="cardSize">
                    <MediaControlCard
                      cardContent={true}
                      obj={obj}
                      _getSongs={_getSongs}
                      NewSongPlay={this.NewSongPlay}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        {_getSongs && _getSongs.results && _getSongs.results.length > 0 ? (
          <Grid style={{ width: "100%", position: "fixed", bottom: "1px" }}>
            <Grid container justify="center">
              <Grid item xs={10}>
                <CurrentSongs
                  cardContent={false}
                  _getSongs={_getSongs}
                  currentSongs={currentSongs}
                  changeSong={changeSong}
                  playAudio={this.playAudio}
                  pauseAudio={this.pauseAudio}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        <style jsx="true">
          {`
            .cardSize {
              height: 200px;
              overflow: hidden;
            }
            .songsName {
              color: #fff;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

const mapState = ({ getSongs }) => {
  return {
    _getSongs: getSongs
  };
};
const mapDispatch = dispatchEvent => ({
  $getSongs: values => dispatchEvent(getSongs(values))
});
export default connect(mapState, mapDispatch)(Index);
