import React, { useEffect } from 'react';
import { Box, Typography, Modal, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './WorkoutModal.css';

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const contentStyle = {
  width: '90%',
  maxWidth: 600,
  backgroundColor: 'white',
  boxShadow: 24,
  p: 4,
  position: 'relative',
  outline: 'none',
};

const imageStyle = {
  width: '100%',
  height: 'auto', // Ensures image scales properly without distortion
};

const WorkoutModal = ({ workout, onClose }) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <Modal
  open={!!workout}
  onClose={onClose}
  aria-labelledby="workout-modal-title"
  aria-describedby="workout-modal-description"
  className="modal-overlay" // Add this to apply the overlay styling
>
  <Box className="modal-content"> {/* Change from sx to className */}
    <IconButton onClick={onClose} style={{ position: 'absolute', top: 20, right: 20 }}>
      <CloseIcon />
    </IconButton>
    <Card>
      <CardMedia
        component="img"
        height="auto"
        image={workout.img}
        alt={workout.title}
        style={{ objectFit: 'contain' }} // Ensure the image fits within the container
      />
      <CardContent>
        <Typography id="workout-modal-title" variant="h5" component="h2">
          {workout.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Target Muscle: {workout.targetMuscle}
        </Typography>
        <Typography id="workout-modal-description" variant="body1">
          {workout.steps}
        </Typography>
      </CardContent>
    </Card>
  </Box>
</Modal>

  );
};

export default WorkoutModal;
