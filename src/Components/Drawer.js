
import React, { useState } from "react";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    IconButton
} from "@material-ui/core";


import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <ListItemText>
                            <Link to="/about" className={classes.link}>Faq</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}


export default DrawerComponent;