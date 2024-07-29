import React, { useState } from 'react';
import { Grid, Card, CardContent, TextField, Button, Typography, IconButton, Snackbar } from '@mui/material';
import { Delete, Edit, Done } from '@mui/icons-material';
import './Progress.css';

export const Progress = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '' });

  const handleInputChange = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value });
  };

  const handleAddExercise = () => {
    if (editingIndex !== null) {
      // Update existing exercise
      const updatedExercises = exercises.map((exercise, index) =>
        index === editingIndex ? newExercise : exercise
      );
      setExercises(updatedExercises);
      setNotification({ open: true, message: 'Exercise edited successfully' });
      setEditingIndex(null);
    } else {
      // Add new exercise
      setExercises([...exercises, { ...newExercise, completed: false }]);
      setNotification({ open: true, message: 'Exercise created successfully' });
    }
    setNewExercise({ name: '', sets: '', reps: '' });
  };

  const handleDeleteExercise = (index) => {
    setExercises(exercises.filter((_, i) => i !== index));
    setNotification({ open: true, message: 'Exercise deleted successfully' });
  };

  const handleEditExercise = (index) => {
    setNewExercise(exercises[index]);
    setEditingIndex(index);
  };

  const handleMarkAsComplete = (index) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === index ? { ...exercise, completed: !exercise.completed } : exercise
    );
    setExercises(updatedExercises);
    setNotification({
      open: true,
      message: updatedExercises[index].completed ? 'Exercise marked as complete' : 'Exercise marked as incomplete',
    });
  };

  const handleDeleteAll = () => {
    setExercises([]);
    setNotification({ open: true, message: 'All exercises deleted successfully' });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: '' });
  };

  return (
    <div className="progress-container">
      <Typography variant="h3" component="h1" align="center" fontWeight="bold" fontFamily={'monospace'} gutterBottom>
        STUDY SESSION TRACKER
      </Typography>
      <Card className="progress-card">
        <CardContent>
          <div className="progress-form">
            <TextField
              label="Course Name"
              name="name"
              value={newExercise.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
              className="progress-input"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Time Spent"
                  name="sets"
                  value={newExercise.sets}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className="progress-input"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Assignments Done"
                  name="reps"
                  value={newExercise.reps}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className="progress-input"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              onClick={handleAddExercise}
              fullWidth
              sx={{
                backgroundColor: 'var(--primary-color)', // Primary color
                color: 'white', // Text color
                borderRadius: '5px', // Rounded corners
                fontFamily: 'var(--font-name)', // Font family
                fontSize: '1rem', // Font size
                fontWeight: '500', // Font weight
                padding: '10px 20px', // Padding
                textTransform: 'uppercase', // Uppercase text
                '&:hover': {
                  backgroundColor: '#5a4abf', // Darker shade on hover
                },
              }}
            >
              {editingIndex !== null ? 'Update Session' : 'Add Session'}
            </Button>

          </div>
        </CardContent>
      </Card>

      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <Card key={index} className={`exercise-card ${exercise.completed ? 'completed' : ''}`}>
            <CardContent>
              <Typography variant="h5" component="div" fontWeight="bold" className={exercise.completed ? 'strikethrough' : ''}>
                {exercise.name}
              </Typography>
              <Typography variant="body1">Time: {exercise.sets}</Typography>
              <Typography variant="body1">Assignments: {exercise.reps}</Typography>
              <div className="exercise-actions">
                <IconButton
                  color="success"
                  onClick={() => handleMarkAsComplete(index)}
                >
                  <Done />
                </IconButton>
                <IconButton
                  color="default"
                  onClick={() => handleEditExercise(index)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteExercise(index)}
                >
                  <Delete />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {exercises.length > 0 && (
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteAll}
          className="delete-all-btn"
          sx={{
            width: '100%',
            backgroundColor: '#f44336',
            color: 'white',
            marginTop: '16px',
            '&:hover': {
              backgroundColor: '#d32f2f',
            },
          }}
        >
          Delete All
        </Button>
      )}

      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        message={notification.message}
      />
    </div>
  );
};

export default Progress;
