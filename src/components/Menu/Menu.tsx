import { Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment } from "react";
export interface MenuProps {
  menuItems:MenuItem[];
}

export interface MenuItem{
  title?:string;
  icon?:any

}

const MenuComponent: React.FC<MenuProps> = (props) => {
  return <Fragment>
    <List>
      {props.menuItems.map((menuItem:MenuItem)=>{
        return (
          <ListItem>
            <ListItemButton>
              {menuItem.icon ? (
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
              ) : (
                ''
              )}
              {menuItem.title ? (
                <ListItemText className="text" primary={menuItem.title} />
              ) : (
                ''
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  </Fragment>;
};
export default MenuComponent;
