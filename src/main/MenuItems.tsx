import React, {useContext} from 'react';
import {MenuContext} from "../context/menuContext";
import {Icon, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const MenuItems = () => {
    const {menuItem} = useContext(MenuContext);

    return (
        <List>
            {/*<Typography variant="overline" ml={2}>Tilgang</Typography>*/}
            {menuItem?.map((menuItem) => (
                <li>
                    <ListItemButton key={menuItem.title}>
                        <ListItemIcon>
                            <Icon>{menuItem.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText>
                            {menuItem.title}
                        </ListItemText>
                    </ListItemButton>
                </li>
            ))}
        </List>
    );
};
export default MenuItems;