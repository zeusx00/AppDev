import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  Typography,
  Box,
  Toolbar,
  Avatar,
  IconButton,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import UserControl from './UserControl';
import './AdminDashboard.css'; // Import the CSS file

const drawerWidth = 280;

function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
    setMobileOpen(false); // Close the drawer on mobile
  };

  const handleLogout = () => {
    // Add any logout logic here if necessary (e.g., clearing auth tokens)
    navigate('/login'); // Navigate to the login page
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => handleTabChange(0)} className={selectedTab === 0 ? 'selected' : ''}>
          <ListItemIcon>
            <PeopleIcon color={selectedTab === 0 ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="User Control" />
        </ListItem>
        <ListItem button onClick={() => handleTabChange(1)} className={selectedTab === 1 ? 'selected' : ''}>
          <ListItemIcon>
            <AccountBoxIcon color={selectedTab === 1 ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }} className="admin-dashboard">
      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="app-bar-title"
            sx={{ marginLeft: '200px' }} // Adjusted margin
          >
            ADMIN MANAGEMENT DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="dashboard-content"
      >
        <Toolbar />
        {selectedTab === 0 && (
          <>
            <Typography variant="h4" gutterBottom className="dashboard-title">Add User</Typography>
            <UserControl />
          </>
        )}
        {selectedTab === 1 && (
          <>
            <Typography variant="h4" gutterBottom className="dashboard-title">My Profile</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Avatar sx={{ width: 80, height: 80, mr: 3 }}>T</Avatar>
              <Box>
                <Typography variant="h6">Name: Kiran</Typography>
                <Typography variant="body1">Email: admin01@gmail.com</Typography>
                <Typography variant="body1">Role: Admin</Typography>
                <Typography variant="body1">Last Login: July 29, 2024</Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default AdminDashboard;
