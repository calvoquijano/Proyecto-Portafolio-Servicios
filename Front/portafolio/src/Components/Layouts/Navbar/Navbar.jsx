import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  List,
  ListItem,
  Menu,
  MenuItem,
  ListItemButton,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className={styles.container}>
        <List className={styles.list}>
          <ListItem className={styles.listItems}>
            <Link className="link--cancelar" to="/">
              <ListItemButton className={styles.listItems}>
                <img
                  className={styles.image}
                  src="./src/assets/images/identidad/logotipo_calvo.svg"
                  alt=""
                />
              </ListItemButton>
            </Link>
          </ListItem>
          
          <ListItem className={styles.listItems}>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link className="link--cancelar" to="/">
                  <ListItemButton>Home</ListItemButton>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="link--cancelar" to="/experiencia">
                  <ListItemButton>Experiencia</ListItemButton>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="link--cancelar" to="/habilidades">
                  <ListItemButton>Habilidades</ListItemButton>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="link--cancelar" to="/servicios">
                  <ListItemButton>Servicios</ListItemButton>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="link--cancelar" to="/trabajo">
                  <ListItemButton>Mi Trabajo</ListItemButton>
                </Link>
              </MenuItem>
            </Menu>
          </ListItem>
        </List>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
