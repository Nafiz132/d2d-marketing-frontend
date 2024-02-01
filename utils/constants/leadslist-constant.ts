import { LeadsDataType, StatusState } from '@/models/global-types';
import { LEAD_STATUS } from './common-constants';

export const LEADS_DATA: LeadsDataType[] = [
  {
    id: 1,
    title: 'Social Media Marketing',
    date: 'Tue 21 Nov, 2023 11:34 AM',
    assignedByName: 'Saidul M Khan',
    assignedByNumber: '+88-01623364856',
    assignedByEmail: 'saidulmursalinkhan@gmail.com',
    assignedToName: 'Rezaul Mursalin Khan',
    status: LEAD_STATUS.Hot,
    location: '383/1 Free School St.',
    meetingNote: 'Only facebook and instagram service is available.',
    image:
      'https://img.freepik.com/free-photo/stylish-asian-man-wear-jeans-jacket-sitting-chair-against-bar-club_627829-1896.jpg',
    reminder: {
      reminderTitle: 'Must do this work as per deadline.',
      reminderDate: 'Tue 24 Nov, 2023 12:34 AM',
      reminderStatus: LEAD_STATUS.Completed,
    },
    timestamp: '2023-11-21T11:34:00.000Z',
  },
  {
    id: 2,
    title: 'Content Creation',
    date: 'Wed 22 Nov, 2023 02:45 PM',
    assignedByName: 'Nadia Rahman',
    assignedByNumber: '+88-01755432123',
    assignedByEmail: 'nadia@gmail.com',
    assignedToName: 'Aminul Islam',
    status: LEAD_STATUS.Warm,
    location: '123/B Creative Street',
    meetingNote: 'Create engaging content for the website.',
    image:
      'https://img.freepik.com/free-photo/indian-man-student-shirt-posed-outdoor_627829-2276.jpg',
    reminder: {
      reminderTitle: 'Finalize content strategy.',
      reminderDate: 'Sat 25 Nov, 2023 01:00 AM',
      reminderStatus: LEAD_STATUS.Completed,
    },
    timestamp: '2023-11-22T14:45:00.000Z',
  },
  {
    id: 3,
    title: 'Website Redesign',
    date: 'Thu 23 Nov, 2023 09:15 AM',
    assignedByName: 'Farhan Ahmed',
    assignedByNumber: '+88-01987654321',
    assignedByEmail: 'farah@gmail.com',
    assignedToName: 'Sadia Rahman',
    status: LEAD_STATUS.Cool,
    location: '789/C Web Avenue',
    meetingNote: 'Redesign the website for a modern look.',
    image:
      'https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg',
    reminder: {
      reminderTitle: 'Discuss design mockups with the team.',
      reminderDate: 'Mon 27 Nov, 2023 03:45 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-23T09:15:00.000Z',
  },
  {
    id: 4,
    title: 'Email Campaign',
    date: 'Fri 24 Nov, 2023 03:30 PM',
    assignedByName: 'Imran Khan',
    assignedByNumber: '+88-01555667788',
    assignedByEmail: 'imran@gmail.com',
    assignedToName: 'Tahmina Akhter',
    status: LEAD_STATUS.Hot,
    location: '456/D Marketing Street',
    meetingNote: 'Create and send out email campaigns.',
    image:
      'https://img.freepik.com/free-photo/young-indian-student-man-red-checkered-shirt-jeans-posed-city-with-mobile-phone-hands_627829-2674.jpg',
    reminder: {
      reminderTitle: 'Review email copy and design.',
      reminderDate: 'Tue 28 Nov, 2023 12:00 AM',
      reminderStatus: LEAD_STATUS.Completed,
    },
    timestamp: '2023-11-24T15:30:00.000Z',
  },
  {
    id: 5,
    title: 'SEO Optimization',
    date: 'Sat 25 Nov, 2023 10:20 AM',
    assignedByName: 'Mehnaz Islam',
    assignedByNumber: '+88-01898989898',
    assignedByEmail: 'mehnaz@gmail.com',
    assignedToName: 'Rahim Ali',
    status: LEAD_STATUS.Warm,
    location: '789/E SEO Avenue',
    meetingNote: 'Optimize website for search engines.',
    image:
      'https://img.freepik.com/free-photo/vertical-shot-young-caucasian-man-with-blonde-hair-wearing-orange-shirt_181624-42669.jpg',
    reminder: {
      reminderTitle: 'Check search engine rankings.',
      reminderDate: 'Wed 29 Nov, 2023 02:30 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-25T10:20:00.000Z',
  },
  {
    id: 6,
    title: 'Product Launch',
    date: 'Sun 26 Nov, 2023 01:55 PM',
    assignedByName: 'Tasnim Rahman',
    assignedByNumber: '+88-01671234567',
    assignedByEmail: 'tasnim@gmail.com',
    assignedToName: 'Arif Hossain',
    status: LEAD_STATUS.Hot,
    location: '567/G Launch Avenue',
    meetingNote: 'Plan and execute the launch event for the new product.',
    image:
      'https://img.freepik.com/free-photo/smiley-man-city-looking-camera_23-2148296615.jpg',
    reminder: {
      reminderTitle: 'Coordinate logistics for the launch event.',
      reminderDate: 'Tue 28 Nov, 2023 01:30 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-26T13:55:00.000Z',
  },
  {
    id: 7,
    title: 'Graphic Design',
    date: 'Mon 27 Nov, 2023 11:10 AM',
    assignedByName: 'Nabil Khan',
    assignedByNumber: '+88-01711223344',
    assignedByEmail: 'nabil@gmail.com',
    assignedToName: 'Shahrukh Ahmed',
    status: LEAD_STATUS.Cool,
    location: '789/H Design Street',
    meetingNote: 'Create visually appealing graphics for marketing materials.',
    image:
      'https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg',
    reminder: {
      reminderTitle: 'Review graphic design concepts.',
      reminderDate: 'Wed 29 Nov, 2023 02:30 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-27T11:10:00.000Z',
  },
  {
    id: 8,
    title: 'Event Promotion',
    date: 'Tue 28 Nov, 2023 04:40 PM',
    assignedByName: 'Faria Rahman',
    assignedByNumber: '+88-01998887766',
    assignedByEmail: 'faria@gmail.com',
    assignedToName: 'Nashit Hasan',
    status: LEAD_STATUS.Hot,
    location: '123/I Promotion Avenue',
    meetingNote: 'Promote the upcoming event through various channels.',
    image:
      'https://img.freepik.com/free-photo/woman-doing-close-up-photoshoot-studio_53876-14476.jpg',
    reminder: {
      reminderTitle: 'Check event promotion campaign performance.',
      reminderDate: 'Thu 30 Nov, 2023 01:00 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-28T16:40:00.000Z',
  },
  {
    id: 9,
    title: 'Market Research',
    date: 'Wed 29 Nov, 2023 10:05 AM',
    assignedByName: 'Anika Islam',
    assignedByNumber: '+88-01551122334',
    assignedByEmail: 'anika@gmail.com',
    assignedToName: 'Mahir Ahmed',
    status: LEAD_STATUS.Warm,
    location: '456/J Market Street',
    meetingNote: 'Conduct market research to identify trends and opportunities.',
    image:
      'https://img.freepik.com/free-photo/stylish-young-handsome-traveler-man-standing-looking-camera_23-2148187261.jpg',
    reminder: {
      reminderTitle: 'Analyze market research findings.',
      reminderDate: 'Fri 1 Dec, 2023 03:30 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-29T10:05:00.000Z',
  },
  {
    id: 10,
    title: 'Video Production',
    date: 'Thu 30 Nov, 2023 02:15 PM',
    assignedByName: 'Khaled Khan',
    assignedByNumber: '+88-01777889900',
    assignedByEmail: 'khaled@gmail.com',
    assignedToName: 'Samina Akhtar',
    status: LEAD_STATUS.Cool,
    location: '789/K Video Street',
    meetingNote: 'Create engaging videos for marketing purposes.',
    image:
      'https://img.freepik.com/free-photo/front-view-smiley-man-posing_23-2149512425.jpg',
    reminder: {
      reminderTitle: 'Edit and finalize promotional videos.',
      reminderDate: 'Sat 2 Dec, 2023 01:15 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-11-30T14:15:00.000Z',
  },
  {
    id: 11,
    title: 'Customer Engagement',
    date: 'Fri 1 Dec, 2023 09:30 AM',
    assignedByName: 'Rifat Rahman',
    assignedByNumber: '+88-01991122334',
    assignedByEmail: 'rifat@gmail.com',
    assignedToName: 'Sakib Hasan',
    status: LEAD_STATUS.Hot,
    location: '123/L Customer Avenue',
    meetingNote: 'Develop strategies to enhance customer engagement.',
    image:
      'https://img.freepik.com/free-photo/young-handsome-indian-man-wearing-sunglasses-while-thinking-against-street-outdoors_231208-2791.jpg',
    reminder: {
      reminderTitle: 'Review customer feedback and respond.',
      reminderDate: 'Mon 4 Dec, 2023 02:30 AM',
      reminderStatus: LEAD_STATUS.Pending,
    },
    timestamp: '2023-12-01T09:30:00.000Z',
  },
];

export const CREATED_BY_USERS_LIST = LEADS_DATA.map((item) => ({
  value: item.assignedByName,
  label: item.assignedByName,
}));

export const ASSIGNEE_USERS_LIST = LEADS_DATA.map((item) => ({
  value: item.assignedToName,
  label: item.assignedToName,
  image: item.image,
}));

