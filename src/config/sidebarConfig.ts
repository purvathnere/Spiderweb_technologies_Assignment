export interface SubSection {
  name: string;
  path: string;
}

export interface Section {
  name: string;
  path: string;
  subsections: SubSection[];
}

export const sections: Section[] = [
  {
    name: 'Events',
    path: '/events',
    subsections: [
      { name: 'New Requests', path: '/events/new-request' },
      { name: 'Estimate', path: '/events/estimate' },
      { name: 'Events', path: '/events' },
      { name: 'Partial Requests', path: '/events/partial-requests' },
    ],
  },
  {
    name: 'Positions',
    path: '/positions',
    subsections: [],
  },
  {
    name: 'Contractors',
    path: '/contractors',
    subsections: [],
  },
  {
    name: 'Users',
    path: '/users/admins',
    subsections: [
      { name: 'Admins', path: '/users/admins' },
      { name: 'Clients', path: '/users/clients' },
      { name: 'Contractors', path: '/users/contractors' },
    ],
  },
  {
    name: 'Profile',
    path: '/profile',
    subsections: [],
  },
];
