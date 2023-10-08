import React, {useContext, useState} from 'react';
import {MenuContext} from "../context/menuContext";
import {Icon, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { MessageBus } from '@podium/browser';

const MenuItems = () => {
    const {menuItem} = useContext(MenuContext);

    const messageBus = new MessageBus();
    const [username, setUsername] = useState<string>('');

    messageBus.subscribe(
        'testChannel',
        'testTopic',
        (event) => {
            const user = event.payload;
            setUsername(user as string);
        }
    )

    return (
        <List>
            {/*<Typography variant="overline" ml={2}>Tilgang</Typography>*/}
            {menuItem?.map((menuItem) => (
                <li key={menuItem.title}>
                    <ListItemButton href={menuItem.path}>
                        <ListItemIcon>
                            <Icon>{menuItem.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText>
                            {menuItem.title}
                        </ListItemText>
                    </ListItemButton>
                </li>
            ))}
            <li>{username}</li>
        </List>
    );
};
export default MenuItems;