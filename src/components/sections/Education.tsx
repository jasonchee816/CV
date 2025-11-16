import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface EducationItem {
  title: string;
  period: string;
  institution: string;
  details: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      title: 'Bachelor of Science (Honours) Software Engineering',
      period: 'May 2020 - June 2023',
      institution: 'Universiti Tunku Abdul Rahman, Sungai Long',
      details: 'CGPA: 3.8053',
    },
    {
      title: 'Foundation in Science',
      period: 'May 2019 - May 2020',
      institution: 'Universiti Tunku Abdul Rahman, Sungai Long',
      details: 'CGPA: 3.9468',
    },
    {
      title: 'Sijil Pelajaran Malaysia (SPM)',
      period: 'January 2014 - October 2018',
      institution: 'SMJK Yu Hua',
      details: 'Results: 4A+ 3A 2B+ 1B',
    },
  ];

  return (
    <Box>
      {education.map((edu, idx) => (
        <Box key={idx} sx={{ my: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {edu.title}
          </Typography>
          <List>
            <ListItem sx={{ py: 0.5, pl: 2 }}>
              <ListItemText
                primary={`1. ${edu.period}`}
                primaryTypographyProps={{
                  variant: 'body2',
                }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5, pl: 2 }}>
              <ListItemText
                primary={`2. ${edu.institution}`}
                primaryTypographyProps={{
                  variant: 'body2',
                }}
              />
            </ListItem>
            <ListItem sx={{ py: 0.5, pl: 2 }}>
              <ListItemText
                primary={`3. ${edu.details}`}
                primaryTypographyProps={{
                  variant: 'body2',
                }}
              />
            </ListItem>
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Education;

