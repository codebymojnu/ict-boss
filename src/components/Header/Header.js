import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const pages = ['My Class', 'About', 'Leader Board'];

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 40,
        top: 14,
        color: '#FFF',
        border: '2px solid #FFF',
        padding: '0 4px',
    },
}));

const Header = () => {
    const { user, logOut } = useFirebase();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const history = useHistory();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // log In Path
    const changeRoute = () => {
        history.push('/login');
    } 

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="left">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Tooltip title="Diamond Box" sx={{ marginRight: '17px' }}>
                            <IconButton
                                size="large"
                                aria-label="show diamond"
                                color="inherit"
                               
                            >
                                <StyledBadge badgeContent={4}>
                                    <DiamondIcon  sx={{
                                    color: 'goldenrod',
                                    fontSize: '30px'
                                }}/>
                                </StyledBadge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Notifications" sx={{ marginRight: '30px' }}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={1} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        {
                            user?.email ?  <Tooltip title="Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={user?.photoURL}/>
                            </IconButton>
                        </Tooltip>
                            : 
                            <Tooltip title="Notifications" sx={{ marginRight: '17px' }}>
                            <IconButton
                                size="small"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={() => changeRoute()}
                            >
                                Login
                            </IconButton>
                        </Tooltip>
                        }
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                        
                        {
                            user?.email && <MenuItem>
                            <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        }
                        {
                            user?.email && <MenuItem onClick={logOut}>
                            <Typography textAlign="center">Logout</Typography>
                        </MenuItem>
                        }

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
