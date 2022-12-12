import {
    Box,
    Drawer,
    Theme,
    Toolbar,
} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import MenuItems from './MenuItems';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {width: drawerWidth}
        },
    }));

function Menu() {
    const classes = useStyles();
    return (
        <Box>
            <Drawer variant="permanent" className={classes.drawer}>
                <Toolbar/>
                <MenuItems/>
            </Drawer>
        </Box>
    );
}

export default Menu;