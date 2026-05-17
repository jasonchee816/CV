import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface Achievement {
  text: string;
  subItems?: string[];
}

interface Experience {
  title: string;
  period: string;
  achievements: Achievement[];
}

const WorkingExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Mobile Engineer II @ MoneyLion | Rewards & Social',
      period: '(January 2025 - Present)',
      achievements: [
        {
          text: 'Integrated New Online Deals into MoneyLion App',
          subItems: [
            'Replaced current Third-party Merchant for Online Deals',
            'Greatly increased earnings with the new offers',
            'Delivered $1,100,000 in gross sales through online deals functionalities within the short period of 6 months',
          ],
        },
        {
          text: 'Implemented Native Widgets on both iOS and Android platforms',
          subItems: [
            'Gained out-of-app presence by implementing Widgets on both iOS and Android platforms',
            '12,000 monthly active users added Widgets into their Home Screen',
            'Paved the way for future Widgets implementation',
          ],
        },
        {
          text: 'Improved Existing Codebase',
          subItems: [
            'Enhanced test coverage from 49% to 78% by adding end-to-end Flow tests',
            'Improved maintainability by cleaning up unused codes and feature flags',
            'Resolved Flaky Test Cases that fail intermittently on CI/CD pipeline',
            'Resolved bugs where exported GIF is missing on iOS App',
            'Created monitoring for conversion rates, mobile app reliability, endpoints, and missing translations',
          ],
        },
        {
          text: 'Improved Developers\' Experience (DX)',
          subItems: [
            'Created scripts and AI skills for tasks that disrupt developers\' efficiency',
            'Optimized CI/CD duration by improving test case setup, cutting down around 20% of test duration',
            'Further improved DX by proposing and adopting a new architecture that allows engineers to gradually adopt modern hook approaches while co-existing with legacy Saga approaches',
            'Set up engineering standards via Agent rules',
          ],
        },
        {
          text: 'Implemented Quick Actions (Shortcuts) for the MoneyLion App',
          subItems: [
            'Pioneered the initiative, demostrated and gained buy-in from the Product Chapter',
            'Improved easibility to enter Rewards\' Related Screen and Contact Us Screen',
            'Fully handled from Planning, Designing, Implementing to Monitoring',
          ],
        },
        {
          text: 'Improved traffic coming into the Mobile App, increasing users retention rate',
          subItems: [
            'Revamped Rewards Screens UI, making navigation much clearer without clamping everything',
            'Implemented Sweepstake Winners List Screen',
          ],
        },
        {
          text: 'Improved UX for peer-to-peer transfer (Send and Request)',
          subItems: [
            'Implemented Alphabetically Sorted Contact List with both Scroll-To and Search Functionality',
            'Implemented Multi-Request Flow, which includes Split Equally, Split Evenly, and Custom Amount',
          ],
        },
      ],
    },
    {
      title: 'Mobile Engineer I @ MoneyLion | Fraud & Identity',
      period: '(January 2024 - December 2024)',
      achievements: [
        {
          text: 'Integrated third-party SDKs into App to support Document Scan and Facial Scan',
          subItems: [
            'Helped optimizing the cost by having various SDKs',
            'Communicated with Vendors and provided timely feedbacks during integration to ensure a smooth integration',
          ],
        },
        {
          text: 'Added various Anti-Fraud / Anti-ATO Module',
          subItems: [
            'Implemented Auth Related Functionalities such as Change Password, Forget Email Functionalities etc.',
            'Implemented Anti-Fraud Functionalities such as In-App Document Upload',
          ],
        },
        {
          text: 'Improved Existing Codebase',
          subItems: [
            'Enhanced the UI by using latest Design',
            'Enhanced test coverage from 22% to 78% by adding end-to-end Flow tests',
            'Enhanced UX by adding missing pieces',
          ],
        },
        {
          text: 'Oversaw the integration of Web View Authentication System',
          subItems: [
            'Centralize the Auth System for both Web and Mobile App',
            'Prevent Fraud Rules being missed out on different platform',
            'Prevent Missing Auth Features on different platform',
          ],
        },
      ],
    },
    {
      title: 'Software Engineer @ Axflix Technologies Sdn Bhd',
      period: '(June 2023 - December 2023)',
      achievements: [
        {
          text: 'Developed, Built, and Released a Membership App on Play Store / App Store from scratch within 3 months',
          subItems: [
            'Cross Platform using React Native',
            'Utilizes Vision Camera for scanning Membership Card Barcode',
            'Deep Linking for Dialing, Opening Google Map and Waze',
            'Supports Multi Language with i18n',
            'Other Functionalities include Basic Auth with OTP, Rewards Browsing and Redemption, and Display of Barcode and QR Code',
          ],
        },
        {
          text: 'Admin / Staff Related Functionalities',
          subItems: [
            'Implemented CRUD for All Membership Application related Models',
            'Implemented User Accessibility for said Functionalites',
            'Exports a variety of Reports in different format (pdf, csv, xlsx)',
          ],
        },
      ],
    },
    {
      title: 'Full-stack Web Application Developer Trainee @ Public Bank Berhad',
      period: '(October 2022 - January 2023)',
      achievements: [
        {
          text: 'Improved performance for data retrieval request handling',
          subItems: [
            'Reduced total time taken for data retrieval',
            'By merging two subsequent requests into one which also removes redundant checking process',
          ],
        },
        {
          text: 'Implemented profile change request handling functionality from scratch',
          subItems: [
            'Mapped the SQL Queries to the newly created Database Table using MyBatis 3',
            'Implemented the APIs (CRUD) and validation functions on server side',
            'Display request status and offered Cancellation Option if any',
          ],
        },
        {
          text: 'Retrieved and display custom input fields with Regex Checking dynamically using jQuery Validation',
        },
        {
          text: 'Made improvements to usability of the website by standardization buttons and alignments',
        },
        {
          text: 'Developed several functional prototypes using Bootstrap, DataTable and jQuery',
        },
      ],
    },
    {
      title: 'Customer Service Crew @ Buddy Bits',
      period: '(November 2018 - November 2019)',
      achievements: [
        {
          text: 'Promoted and recommended the restaurant best deals',
        },
        {
          text: 'Ensured the cleanliness of the Front of House',
        },
        {
          text: 'Provided great customer service',
        },
        {
          text: 'Ensured Back of House understood customer request and customization of food if any',
        },
      ],
    },
  ];

  return (
    <Box>
      {experiences.map((exp, idx) => (
        <Box key={idx} sx={{ my: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {exp.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {exp.period}
          </Typography>
          <List>
            {exp.achievements.map((achievement, aIdx) => (
              <React.Fragment key={aIdx}>
                <ListItem sx={{ py: 0.5, pl: 2 }}>
                  <ListItemText
                    primary={`${aIdx + 1}. ${achievement.text}`}
                    primaryTypographyProps={{
                      variant: 'body2',
                    }}
                  />
                </ListItem>
                {achievement.subItems && achievement.subItems.map((subItem, sIdx) => (
                  <ListItem key={`${aIdx}-${sIdx}`} sx={{ py: 0.5, pl: 4 }}>
                    <ListItemText
                      primary={`- ${subItem}`}
                      primaryTypographyProps={{
                        variant: 'body2',
                      }}
                    />
                  </ListItem>
                ))}
              </React.Fragment>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default WorkingExperience;
