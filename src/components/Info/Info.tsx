import { Fragment } from "react";
import { Avatar, ListItem, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../style/Theme.css";
import "./avatar.png";

export interface InfoProps {
  firstName: string;
  lastName: string;
  socialMediaLinks?: SocialMediaLinks;
  avatarFileName?: string;
}

export interface SocialMediaLinks {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  linkedIn?: string;
  gitHub?: string;
}

const Info: React.FC<InfoProps> = (props: InfoProps) => {
  return (
    <Fragment>
      <List>
        <ListItem className="center">
          <Avatar
            sx={{
              color: "#0b132b",
              bgcolor: "#6fffe9",
              width: "80px",
              height: "80px",
            }}
            src="./avatar.png"
          >
            {props.avatarFileName
              ? ""
              : props.firstName.substring(0, 1) +
                props.lastName.substring(0, 1)}
          </Avatar>
        </ListItem>
        <ListItem className="center">
          <ListItemText
            className="text"
            primary={props.firstName + " " + props.lastName}
          />
        </ListItem>
        {props.socialMediaLinks ? (
          <ListItem>
            <List>
              <ListItem>
                {props.socialMediaLinks?.twitter ? (
                  <IconButton
                    onClick={() => {
                      window.open(props.socialMediaLinks?.twitter, "_blank");
                    }}
                  >
                    <TwitterIcon className="text social-icon" />
                  </IconButton>
                ) : (
                  ""
                )}
                {props.socialMediaLinks?.instagram ? (
                  <IconButton
                    onClick={() => {
                      window.open(props.socialMediaLinks?.instagram, "_blank");
                    }}
                  >
                    <InstagramIcon className="text social-icon" />
                  </IconButton>
                ) : (
                  ""
                )}
                {props.socialMediaLinks?.facebook ? (
                  <IconButton
                    onClick={() => {
                      window.open(props.socialMediaLinks?.facebook, "_blank");
                    }}
                  >
                    <FacebookIcon className="text social-icon" />
                  </IconButton>
                ) : (
                  ''
                )}
                {props.socialMediaLinks?.linkedIn ? (
                  <IconButton
                    onClick={() => {
                      window.open(props.socialMediaLinks?.linkedIn);
                    }} >
                    <LinkedInIcon className="text socialicon" />
                  </IconButton>
                ) : (
                  ""
                )}
                {props.socialMediaLinks?.gitHub ? (
                  <IconButton
                    onClick={() => {
                      window.open(props.socialMediaLinks?.gitHub, "_blank");
                    }}
                  >
                    <GitHubIcon className="text socialicon" />
                  </IconButton>
                ) : (
                  ""
                )}
              </ListItem>
            </List>
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </Fragment>
  );
};
export default Info;
