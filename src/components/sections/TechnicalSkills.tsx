import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface SkillCategory {
  title: string;
  skills: string[];
}

const TechnicalSkills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Web Application Development',
      skills: [
        'Proficient in React.js and Ant Design',
        'Proficient in Spring Framework and MyBatis 3',
        'Proficient in PHP and Laravel Framework',
        'Proficient in JavaScript, TypeScript and jQuery Library',
        'Proficient in HTML, CSS, and Bootstrap Framework',
      ],
    },
    {
      title: 'Mobile Application Development',
      skills: [
        'Proficient in React Native (TypeScript), Redux, i18n',
        'Experienced in Publishing to both Apple App Store and Google Play Store',
        'Proficient in Swift (SwiftUI, UIKit, CoreData) for Native iOS Development',
        'Proficient in Kotlin (Jetpack Compose) for Native Android Development',
      ],
    },
    {
      title: 'Data Mining',
      skills: [
        'Proficient in Python and NumPy Library',
        'Proficient in Pandas and Matplotlib Libraries',
        'Proficient in Association Rule Mining',
      ],
    },
    {
      title: 'Digital Image Processing',
      skills: [
        'Proficient in Python and OpenCV Library',
      ],
    },
    {
      title: 'SQL & NoSQL Database Management',
      skills: [
        'Oracle SQL',
        'MySQL',
        'MongoDB',
        'Cassandra',
        'Firebase Realtime Database',
      ],
    },
    {
      title: 'Version Control System',
      skills: [
        'Git',
        'GitHub',
      ],
    },
    {
      title: 'Software',
      skills: [
        'Notion',
        'Trello',
        'Postman',
        'MS Word, MS Powerpoint',
      ],
    },
  ];

  return (
    <Box>
      {categories.map((category, idx) => (
        <Box key={idx} sx={{ my: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {category.title}
          </Typography>
          <List>
            {category.skills.map((skill, sIdx) => (
              <ListItem key={sIdx} sx={{ py: 0.5, pl: 2 }}>
                <ListItemText
                  primary={`${sIdx + 1}. ${skill}`}
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

export default TechnicalSkills;

