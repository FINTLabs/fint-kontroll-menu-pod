import {Box, Drawer, Toolbar,} from "@mui/material";
import MenuItems from './MenuItems';
import style from "../template/style";

function Menu() {

    return (
        <Box>
            <Drawer variant="permanent" sx={style.drawer}>
                <Toolbar/>
                <MenuItems/>
            </Drawer>
        </Box>
    );
}

export default Menu;