import React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {
    ContactSupportRounded, DashboardRounded,
    DonutSmallRounded,
    GroupRounded, ListAltRounded,
    PersonRounded
} from "@mui/icons-material";

const MenuItems = () => {

    return (
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardRounded fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
            <Typography variant="overline" ml={2}>Tilgang</Typography>
            <ListItemButton>
                <ListItemIcon>
                    <PersonRounded fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Brukere</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <GroupRounded fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Grupper</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <DonutSmallRounded fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Ressurser</ListItemText>
            </ListItemButton>
            <Typography variant="overline" ml={2}>Annet</Typography>
            <ListItemButton>
                <ListItemIcon>
                    <ListAltRounded fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Logg</ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ContactSupportRounded fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Support</ListItemText>
            </ListItemButton>
        </List>
    );
};

export default MenuItems;