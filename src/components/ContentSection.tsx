import React from 'react';
import { Box } from '@mui/material';
import SectionAccordion from './SectionAccordion';
import WorkIcon from '@mui/icons-material/Work';
import AwardIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import SchoolIcon from '@mui/icons-material/School';
import WorkingExperience from './sections/WorkingExperience';
import AwardsActivities from './sections/AwardsActivities';
import TechnicalSkills from './sections/TechnicalSkills';
import Projects from './sections/Projects';
import Education from './sections/Education';

const ContentSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1.5,
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
        justifyContent: 'center',
        maxWidth: 600,
        mx: 'auto',
        mt: 2,
      }}
    >
      <SectionAccordion title="Experience" icon={WorkIcon}>
        <WorkingExperience />
      </SectionAccordion>
      <SectionAccordion title="Awards" icon={AwardIcon}>
        <AwardsActivities />
      </SectionAccordion>
      <SectionAccordion title="Skills" icon={CodeIcon}>
        <TechnicalSkills />
      </SectionAccordion>
      <SectionAccordion title="Projects" icon={FolderIcon}>
        <Projects />
      </SectionAccordion>
      <SectionAccordion title="Education" icon={SchoolIcon}>
        <Education />
      </SectionAccordion>
    </Box>
  );
};

export default ContentSection;

