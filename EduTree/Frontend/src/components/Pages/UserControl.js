// UserControl.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, Box, TextField, IconButton, Snackbar, Card, CardContent } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const initialUsers = [
  { id: 1, firstName: 'Eugene', lastName: 'Stepnov', email: 'eugene.stepnov@example.com', role: 'admin', disabled: false },
  // Add more users as needed
];

function UserControl() {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', role: '', disabled: false });
  const [editingIndex, setEditingIndex] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '' });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdateUser = () => {
    if (editingIndex !== null) {
      // Update existing user
      const updatedUsers = users.map((user, index) =>
        index === editingIndex ? { ...user, ...newUser } : user
      );
      setUsers(updatedUsers);
      setNotification({ open: true, message: 'User updated successfully' });
      setEditingIndex(null);
    } else {
      // Create new user
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNotification({ open: true, message: 'User created successfully' });
    }
    setNewUser({ firstName: '', lastName: '', email: '', role: '', disabled: false });
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
    setNotification({ open: true, message: 'User deleted successfully' });
  };

  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setEditingIndex(index);
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: '' });
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <div className="user-form">
            <TextField
              label="First Name"
              name="firstName"
              value={newUser.firstName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={newUser.lastName}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button variant="contained" color="success" onClick={handleCreateOrUpdateUser}>
                {editingIndex !== null ? 'Update User' : 'Create New User'}
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
        <br/>
      <Typography variant="h4">USER LIST</Typography>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton
                    color="default"
                    onClick={() => handleEditUser(index)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteUser(index)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        message={notification.message}
      />
    </Box>
  );
}

export default UserControl;
