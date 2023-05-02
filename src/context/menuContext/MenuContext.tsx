import React, {createContext, ReactNode, useEffect, useState,} from "react";
import {contextDefaultValues, IMenuItem, MenuContextState,} from "./types";
import MenuRepository from "../../repositories/MenuRepository";

export const MenuContext = createContext<MenuContextState>(
    contextDefaultValues
);

type Props = {
    children: ReactNode[] | ReactNode;
};

const MenuProvider = ({children}: Props) => {
    const [menuItem, setMenuItem] = useState<IMenuItem[] | null>(contextDefaultValues.menuItem);

    const getMenuItems = () => {
        MenuRepository.getMenuItems()
            .then(response => {
                    console.log("Meny data: ", response.data);
                    setMenuItem(response.data)
                }
            )
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        getMenuItems()
    }, []);

    return (
        <MenuContext.Provider
            value={{
                menuItem,
                getMenuItems,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
export default MenuProvider;