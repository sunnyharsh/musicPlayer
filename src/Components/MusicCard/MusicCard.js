import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        {props.cardContent ? (
          <CardContent
            className={classes.content}
            style={{
              backgroundImage: `url(${props.obj.artworkUrl100})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "82px"
            }}
          >
            <Typography
              component="subtitle2"
              variant="subtitle2"
              className="songsName"
            >
              {props.obj.trackName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="subtitle2"
              className="songsName"
            >
              {props.obj.artistName}
            </Typography>
          </CardContent>
        ) : (
          ""
        )}

        <Grid container alignItems="center">
          <Grid className={classes.controls}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon
                className={classes.playIcon}
                onClick={() => props.NewSongPlay(props.obj)}
              />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
