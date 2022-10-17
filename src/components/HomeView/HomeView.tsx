import { Fragment } from "react";
import "../../style/Theme.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { Avatar, Grid, ListItem, ListItemButton, ListItemIcon,ListItemText} from "@mui/material";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import './avatar.png';
import MenuComponent from "../Menu/Menu";
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
            <Grid className="info center" item xs={4}>
              <List>
                <ListItem className="center">
                  <Avatar
                    sx={{ width: "80px", height: "80px" }}
                    src="./avatar.png"
                  ></Avatar>
                </ListItem>
                <ListItem className="center">
                  <ListItemText className="text" primary="Ali Booresh" />
                </ListItem>
                <ListItem className="social-links center">
                  <List>
                    <ListItem>
                      <IconButton href="www.twitter.com/alibooresh">
                        <TwitterIcon className="text social-icon" />
                      </IconButton>
                      <IconButton>
                        <InstagramIcon className="text social-icon" />
                      </IconButton>
                      <IconButton>
                        <FacebookIcon className="text social-icon" />
                      </IconButton>
                      <IconButton>
                        <LinkedInIcon className="text socialicon" />
                      </IconButton>
                      <IconButton>
                        <GitHubIcon className="text social-icon" />
                      </IconButton>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
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
        <Grid className="box content" item xs={9}></Grid>
      </Grid>
    </Fragment>
  );
};
export default HomeView;
