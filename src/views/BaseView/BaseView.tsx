import { Fragment } from "react";
import "../../style/Theme.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import {
  Grid, Paper,
} from "@mui/material";
import MenuComponent from "../../components/Menu/Menu";
import Info from "../../components/Info/Info";
import { TypeAnimation } from 'react-type-animation';

const BaseView = () => {
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
            <Grid className="info center" item xs={4}>
              <Info
                firstName="Ali"
                lastName="Booresh"
                socialMediaLinks={{
                  facebook: "https://www.facebook.com",
                  gitHub: "https://www.github.com/alibooresh",
                  instagram: "https://www.instagram.com/alibooresh",
                  twitter: "https://twitter.com/alibooresh",
                  linkedIn:
                    "https://www.linkedin.com/in/ali-booresh-56963b16a/",
                }}
              />
            </Grid>
            <Grid className="menu-links" item xs={8}>
              <MenuComponent
                menuItems={[
                  {
                    icon: <HomeOutlinedIcon className="text menu-icon" />,
                    title: "Home",
                  },
                  {
                    icon: (
                      <PersonOutlineOutlinedIcon className="text menu-icon" />
                    ),
                    title: "About",
                  },
                  {
                    icon: (
                      <AssignmentIndOutlinedIcon className="text menu-icon" />
                    ),
                    title: "Resume",
                  },
                  {
                    icon: (
                      <WorkHistoryOutlinedIcon className="text menu-icon" />
                    ),
                    title: "Portfilio",
                  },
                  {
                    icon: <EmailOutlinedIcon className="text menu-icon" />,
                    title: "Contact",
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid className="box content" item xs={9}>
          <Paper className="animated-text">
            <p>Hy, My name is Ali Booresh</p>
            <p>
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "Freelancer", // Deletes 'One' and types 'Two'
                  2000,
                  () => {},
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em" }}
              />
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default BaseView;
