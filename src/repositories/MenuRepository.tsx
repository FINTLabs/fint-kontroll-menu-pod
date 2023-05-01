import axios from 'axios';
import {IMenuItem} from "../context/menuContext/types";

const getMenuItems = () => {
    return axios.get<IMenuItem[]>('/api/layout/menu');
}

const MenuRepository = {
    getMenuItems,
};

export default MenuRepository;