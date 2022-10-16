import { Fragment } from "react";
import "../../style/Theme.css";
import { Grid } from "@mui/material";

const HomeView = () => {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid className="menu" item xs={3}>
          <Grid container direction="column">
            <Grid className="info" item xs={3}>Profile</Grid>
            <Grid className="social-links" item xs={2}>Social Media</Grid>
            <Grid className="menu-links" item xs={7}>Menu</Grid>
          </Grid>
        </Grid>
        <Grid className="box content" item xs={9}>
          Content
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default HomeView;
