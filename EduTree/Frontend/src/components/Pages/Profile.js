import React, { useState } from 'react';
import { Container, Typography, Avatar, Card, CardContent, Grid, Tabs, Tab, Box, TextField, Button, Snackbar } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Profile.css';

export const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [profilePicture, setProfilePicture] = useState('path/to/profile/picture.jpg'); //  placeholder image
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const userProfile = {
    name: 'Kiran R',
    age: 19,
    id: '01',
    email: 'kr@gmail.com' ,
    department:'CSE',
    goal: 'Master IoT',
  };

  const progressData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [70, 72, 73, 74, 75, 76, 75.5],
        borderColor: 'var(--primary-color)',
        backgroundColor: 'rgba(111, 85, 242, 0.2)',
        fill: true,
      },
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleUpdateClick = () => {
    setSnackbarMessage('Profile updated successfully!');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleProfilePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return (
          <Box p={3}>
            <Typography variant="h6" fontWeight="bold">Profile Settings</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="First Name" defaultValue={userProfile.name.split(' ')[0]} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Last Name" defaultValue={userProfile.name.split(' ')[1]} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Age" defaultValue={userProfile.age} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email" defaultValue={`${userProfile.email}`} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Department" defaultValue={`${userProfile.department}`} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Blood Group" defaultValue="O+" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Contests" defaultValue="None" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Date of Joining" defaultValue="01-01-2023" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Phone Number" defaultValue="9478645211" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email Address" defaultValue="kr@gmail.com" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="City" defaultValue="New York" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Country" defaultValue="USA" />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                variant="contained"
                onClick={handleUpdateClick}
                sx={{
                  backgroundColor: 'var(--primary-color)', // Primary color
                  color: 'white', // Text color
                  fontFamily: 'var(--font-name)', // Font family
                  borderRadius: '5px', // Rounded corners
                  textTransform: 'uppercase', // Uppercase text
                  '&:hover': {
                    backgroundColor: '#5a4abf', // Darker shade on hover
                  },
                }}
              >
                Update
              </Button>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="profile-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="profile-card">
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={profilePicture}
                  alt={userProfile.name}
                  className="profile-avatar"
                  sx={{ width: 150, height: 150 }}
                />
                <Typography variant="h5" fontWeight="bold" mt={2}>{userProfile.name}</Typography>
                <Typography variant="body1">ID: {userProfile.id}</Typography>
                <br/>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    backgroundColor: 'var(--primary-color)', 
                    color: 'white', 
                    fontFamily: 'var(--font-name)', 
                    borderRadius: '5px', 
                    textTransform: 'uppercase', 
                    '&:hover': {
                      backgroundColor: '#5a4abf', 
                    },
                  }}
                >
                  Change Profile Picture
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                  />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card className="right-block-card">
            <CardContent>
              <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                <Tab label="Profile Settings" />
              </Tabs>
              {renderTabContent()}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default Profile;
