// import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import IconButton from "@material-ui/core/IconButton";

// import { Grid } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     height: "100%"
//   },
//   details: {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%"
//   },
//   content: {
//     flex: "1 0 auto"
//   },
//   cover: {
//     width: 151
//   },
//   controls: {
//     display: "flex",
//     alignItems: "center",
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1)
//   },
//   playIcon: {
//     height: 38,
//     width: 38
//   }
// }));

// export default function CurrentSongs(props) {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <Card className={classes.root}>
//       <div className={classes.details}>
//         <Grid container alignItems="center">
//           <Grid className={classes.controls}>
//             <IconButton aria-label="previous">
//               {theme.direction === "rtl" ? (
//                 <SkipNextIcon />
//               ) : (
//                 <SkipPreviousIcon />
//               )}
//             </IconButton>
//             <IconButton aria-label="play/pause">
//               <PlayArrowIcon className={classes.playIcon} />
//             </IconButton>
//             <IconButton aria-label="next">
//               {theme.direction === "rtl" ? (
//                 <SkipPreviousIcon />
//               ) : (
//                 <SkipNextIcon />
//               )}
//             </IconButton>
//           </Grid>
//           <Grid>
//             {!props.cardContent ? (
//               <CardContent className={classes.content}>
//                 <Typography component="subtitle2" variant="subtitle2">
//                   Live From Space
//                 </Typography>
//                 <Typography component="subtitle2" variant="subtitle2">
//                   Mac Miller
//                 </Typography>
//               </CardContent>
//             ) : (
//               ""
//             )}
//           </Grid>
//         </Grid>
//       </div>
//     </Card>
//   );
// }

import React, { PureComponent } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/PlayArrow";
import Song from "./Songs";
class CurrentSong extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { currentSongs, _getSongs } = this.props;
  }
  render() {
    const { currentSongs, _getSongs, changeSong } = this.props;
    let playingSongs;

    playingSongs =
      currentSongs && !currentSongs.artistId
        ? _getSongs && _getSongs.results[0]
        : currentSongs;

    console.log(playingSongs && playingSongs);
    return (
      <React.Fragment>
        <Grid className="BoxModal">
          <Grid container alignItems="center" style={{ height: "100%" }}>
            <Grid className="btnIcon">
              <SkipPreviousIcon />
            </Grid>
            <Grid className="btnIcon">
              {changeSong ? (
                <Button onClick={this.props.pauseAudio}>
                  <img
                    style={{ width: "29px" }}
                    src="https://f0.pngfuel.com/png/362/566/pause-button-logo-png-clip-art.png"
                    alt=""
                  />
                </Button>
              ) : (
                <PlayArrowIcon onClick={this.props.playAudio} />
              )}
            </Grid>
            <Grid className="btnIcon">
              <SkipNextIcon />
            </Grid>
            <Grid className="details">
              <Typography>
                {playingSongs && playingSongs.trackName} |{" "}
                {playingSongs && playingSongs.artistName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {changeSong ? (
          <Song song={playingSongs && playingSongs.previewUrl} />
        ) : (
          ""
        )}
        <style jsx="true">
          {`
            .BoxModal {
              border-radius: 10px;
              height: 80px;
              width: 100%;
              background-color: #fff;
            }
            .btnIcon {
              margin: 0px 10px 0px 10px;
            }
            .details {
              margin-left: 2rem;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default CurrentSong;
