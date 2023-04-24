import {Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {FC, useEffect, useState} from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useNavigate} from 'react-router-dom';

const MenuItemCustom: FC<any> = (props) => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [hightLight, setHightLight] = useState(false);
    // console.log(window.location.pathname);
    // useEffect(() => {
    //     if (!props.item.subMenu) {
    //         if(props.item.url === window.location.pathname.substring(1)){
    //             setHightLight(true);
    //         } else{
    //             setHightLight(false);
    //         }
    //
    //     }
    // }, [props.item])

    const handleClick = () => {
        setOpen(!open);
    };

    const redirectUrl = (url: string) => {
        if (url) {
            navigate(url);
        }
    }
    return (
        <>
            <ListItem onClick={() => handleClick()} sx={{p: 0, pr: 1}}>
                <ListItemButton sx={{
                    backgroundColor:
                        props.item.url === window.location.pathname.substring(1) ? '#5F8D4E' : '#34ac92'
                }}
                                onClick={() => redirectUrl(props.item.url)}>
                    <ListItemIcon sx={{minWidth: '2.5rem', color: "white"}}>
                        {props.item.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.item.label}/>
                </ListItemButton>
                {props.item.subMenu && (
                    <>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </>
                )}

            </ListItem>
            {props.item.subMenu && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.item.subMenu.map((subMenu: any, index: number) => {
                            return (
                                <ListItem key={index} sx={{p: 0}}>
                                    <ListItemButton sx={{
                                        pl: 6, backgroundColor:
                                            subMenu.url === window.location.pathname.substring(1) ? '#5F8D4E' : '#34ac92'
                                    }} onClick={() => redirectUrl(subMenu.url)}>
                                        <ListItemText primary={subMenu.label}/>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export default MenuItemCustom;