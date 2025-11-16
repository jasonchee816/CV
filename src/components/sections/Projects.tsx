import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

interface Project {
  title: string;
  link?: string;
  type: string;
  achievements: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'e-Wallet Application with Offline Transaction and Visualization Functionalities',
      link: 'https://drive.google.com/file/d/1Pt8JGMZ6CJZdBEO82XUIMo6p2ObdHc96/view?usp=drive_link',
      type: 'Personal Project',
      achievements: [
        'Built with React Native and Flask for RESTful APIs',
        'Implemented Redux for State Management',
        'To solve issues of having no Internet Connectivity especially in rural areas',
        'To provide insights of their spending habits to the users',
      ],
    },
    {
      title: 'Wood Defect Detection System',
      link: 'https://drive.google.com/file/d/1wyDC3BnnLpJxj9ZCP8SdV6LZ5s9dGOWe/view?usp=drive_link',
      type: 'Group Project',
      achievements: [
        'Led the Group and Built the System with OpenCV',
        'Detect Defects in the Wood to assist in Decision Making',
        'To reduce cost caused by Wood Defects',
        'Defects such as Holes, Knots and Cracks are detected at accurate Locations',
      ],
    },
    {
      title: 'Personal Finance Tracker System',
      link: 'https://drive.google.com/file/d/1V-YC5nScO3jqI2PaRK1JAPS51Mfj6NTE/view?usp=drive_link',
      type: 'Group Project',
      achievements: [
        'Led the Group and Built the System with Laravel Framework',
        'Balance in different Wallets are traced',
        'Spendings and Income are Categorized to provide insights',
      ],
    },
    {
      title: 'Mobile Price Classification Prediction Model',
      link: 'https://drive.google.com/file/d/1wpJfTlaROmGpoUEyqzHRNPOEVWpqblAI/view?usp=drive_link',
      type: 'Group Project',
      achievements: [
        'Led the Group and Built the Model with numpy, pandas and matplotlib',
        'Visualized the Relationship between the Specifications of Mobile and the Price Range',
        'Built a Model with a Test Accuracy of 95.75%',
        'Concept of Association Rule Mining is also explored',
      ],
    },
  ];

  return (
    <Box>
      {projects.map((project, idx) => (
        <Box key={idx} sx={{ my: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {project.link ? (
              <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="hover">
                {project.title}
              </Link>
            ) : (
              project.title
            )}{' '}
            <Typography component="span" variant="body2" color="text.secondary">
              ({project.type})
            </Typography>
          </Typography>
          <List>
            {project.achievements.map((achievement, aIdx) => (
              <ListItem key={aIdx} sx={{ py: 0.5, pl: 2 }}>
                <ListItemText
                  primary={`${aIdx + 1}. ${achievement}`}
                  primaryTypographyProps={{
                    variant: 'body2',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;

