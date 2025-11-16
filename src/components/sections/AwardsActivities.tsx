import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

interface AwardActivityItem {
  title: string;
  link?: string;
  achievements: string[];
}

const AwardsActivities: React.FC = () => {
  const items: AwardActivityItem[] = [
    {
      title: 'Top 10 Teams of eMobiq Challenge 2023',
      link: 'https://drive.google.com/drive/folders/1g-wWGJgrnjOcRXHq1FL6gbKtt5C4d74R?usp=sharing',
      achievements: [
        'Led a Team of 7 from different background which include Software Engineers, Deep Learning Engineer, an Architect and a Chemical Engineer',
        'Built a Condominium Management System Mobile App via eMobiq Platform integrated with Firebase Realtime Database as Backend',
        'Achieved Top 10 Teams among 103 Participating Teams',
      ],
    },
    {
      title: 'First Class Honours Degree with Distinction',
      achievements: [
        'Graduate with a CGPA of 3.6700 or above',
        'Graduated with a CGPA of 3.8053',
      ],
    },
    {
      title: 'Served as the Treasurer of UTAR Chinese Language Society',
      achievements: [
        'From July 2021 to July 2022',
        'Organized Virtual Chinese New Year Competitions',
        'Discussed and planned the Budget of the Society',
        'Reviewed Budget of the Society\'s Various Teams',
      ],
    },
    {
      title: 'Served as the Treasurer of the Debate Team of UTAR Chinese Language Society',
      achievements: [
        'From July 2020 to July 2021',
        'Organized Intraschool Debate Competition',
        'Discussed and planned the Budget of the Team',
      ],
    },
    {
      title: 'Served as the Member of Logistic Department for Art and Culture Charity Stage Drama',
      achievements: [
        'Provided Transport for other Members',
        'Provided Transport for the required Materials and Tools',
        'Prepared the Stage by measuring the Dimensions of the Hall and preparing the Floor Plan',
      ],
    },
    {
      title: 'President\'s List',
      achievements: [
        'Achieve a GPA of 3.8500 or above in a trimester',
        'Achieved for 7 Trimesters',
      ],
    },
    {
      title: 'Dean\'s List',
      achievements: [
        'Achieve a GPA of 3.6000 or above in a trimester',
        'Achieved for 2 Trimesters',
      ],
    },
  ];

  return (
    <Box>
      {items.map((item, idx) => (
        <Box key={idx} sx={{ my: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {item.link ? (
              <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover">
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </Typography>
          <List>
            {item.achievements.map((achievement, aIdx) => (
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

export default AwardsActivities;

