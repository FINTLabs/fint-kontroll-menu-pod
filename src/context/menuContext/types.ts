export interface IMenuItem {
    "title": string;
    "path": string;
    "icon": string;
}

export type MenuContextState = {
    menuItem: IMenuItem[] | null;
    getMenuItems: () => void;
};

export const contextDefaultValues: MenuContextState = {
    menuItem: null,
    getMenuItems: () => {},
};
