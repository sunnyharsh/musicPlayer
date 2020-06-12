import React, { PureComponent } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";

class Index extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={2} alignItems="center">
          <Grid>
            <input
              type="text"
              placeholder="Search Here"
              onChange={this.props.searchSongs}
            />
          </Grid>
          <Grid>
            <Button className="btns" onClick={this.props.Search}>
              Search
            </Button>
          </Grid>
        </Grid>
        <style jsx="true">
          {`
            .btns {
              background: #0c70d8;
              color: #fff;
              margin-left: 1rem;
            }
            input {
              width: 413px;
              height: 40px;
              padding: 0px 0px 0px 18px;
              border-radius: 8px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Index;
