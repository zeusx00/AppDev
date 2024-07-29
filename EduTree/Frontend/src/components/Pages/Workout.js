import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import WorkoutModal from './WorkoutModal';
import './Workout.css';

export const workout = [
  { id: 1, title: 'Introduction to IoT', img: require('../../assets/iot2-removebg-preview.png'), targetMuscle: 'Chest, Triceps', steps: 'Start in a plank position with your hands directly under your shoulders. Lower your body until your chest nearly touches the floor. Push yourself back up to the starting position.' },
  { id: 2, title: 'Intermediate Physics', img: require('../../assets/phy-removebg-preview.png'), targetMuscle: 'Quads, Glutes', steps: 'Stand with feet hip-width apart. Lower your hips into a squat position. Jump up explosively from the squat position, then land softly and return to the squat position.' },  
  { id: 3, title: 'Calculus', img: require('../../assets/calc-removebg-preview.png'), targetMuscle: 'Legs, Glutes', steps: 'Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Push back up to the starting position.' },
  { id: 4, title: 'Advanced Cybersecurity', img: require('../../assets/cyb-removebg-preview.png'), targetMuscle: 'Full Body', steps: 'Start with your feet together and hands at your sides. Jump up, spreading your legs and bringing your arms above your head. Return to the starting position.' },
  { id: 5, title: 'Leveraging AI', img: require('../../assets/ai-removebg-preview.png'), targetMuscle: 'Abdominals', steps: 'Lie on your back with knees bent and feet flat on the floor. Lift your upper body towards your knees while keeping your lower back on the floor.' },
  { id: 6, title: 'Electronics Basics', img: require('../../assets/elect-removebg-preview.png'), targetMuscle: 'Back, Legs', steps: 'Stand with feet hip-width apart. Bend at your hips and knees, grabbing the barbell. Lift the bar by straightening your hips and knees.' },
  { id: 7, title: 'Introduction to Arduino', img: require('../../assets/arduino-removebg-preview.png'), targetMuscle: 'Biceps', steps: 'Stand with feet shoulder-width apart, holding a barbell with an underhand grip. Curl the bar towards your chest, keeping your elbows close to your body.' },
  { id: 8, title: 'Advanced Chemistry', img: require('../../assets/chem-removebg-preview.png'), targetMuscle: 'Chest, Triceps', steps: 'Lie on a bench with feet flat on the floor. Lower the barbell to your chest and press it back up.' },
];

export const Workout = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleCloseModal = () => {
    setSelectedWorkout(null);
  };

  return (
    <div>
      <br/>
      <Typography variant="h3" component="h1" align="center" fontWeight="bold" fontFamily={'fantasy'} gutterBottom>
        COURSES
      </Typography>

      <Grid container spacing={3} className="workout-grid">
        {workout.map((workout) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={workout.id}>
            <Card className="workout-card" onClick={() => handleWorkoutClick(workout)}>
              <CardMedia
                component="img"
                alt={workout.title}
                image={workout.img}
                sx={{ height: 220, objectFit: 'cover' }} 
              />
              <CardContent>
                <Typography variant="h5" align="center" component="div">
                  {workout.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedWorkout && (
        <WorkoutModal workout={selectedWorkout} onClose={handleCloseModal} />
      )}
    </div>
  );
};
