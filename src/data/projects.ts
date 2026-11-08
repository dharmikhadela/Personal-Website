type Project = {
  id: number
  title: string
  stack: string
  summary: string
  role: string
  tech: string
  description: string
  contributions: string[]
  cover: string
  images: string[]
  demoUrl?: string | null
  githubUrl?: string | null
  awards?: string[] | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'HomeMate',
    stack: 'Agile Development • Team Leadership • Full-Stack Web Development • Project Management • Sprint Planning',
    summary: 'A full-stack sublieasing platform for managing and browsing subleased housing listings with landlord ratings and amenities overview',
    role: 'Project Manager',
    tech: 'React, PHP, MySQL',
    description:
      'A full-stack housing platform for managing and browsing housing listings.',
    contributions: [
      'Led an agile development team by organizing sprint planning, backlog prioritization, and weekly stand-ups to ensure timely project progress.',
      'Coordinated collaboration between front-end, back-end, and deployment teams to streamline development and resolve blockers.',
      'Managed project timelines and feature prioritization while ensuring core functionalities such as authentication, listing management, and database-backed housing posts were delivered.',
    ],
    cover: '/projects/homemate/cover.png',
    images: [
      '/projects/homemate/shot1.png',
      '/projects/homemate/shot2.png',
      '/projects/homemate/shot3.png',
    ],
    demoUrl: 'https://weatherbuddy.org/HomeMate/',
    githubUrl: 'https://github.com/ssworts/HomeMate',
    awards: ['CSE Demo Day 2025: 4th Place', 'https://ub-cse-demo-day.github.io/by_year/2025fa']
  },
  {
    id: 2,
    title: 'Customer Atlas',
    stack: 'React • PostgreSQL/PostGIS • Supabase • Docker • OpenAI API • Git',
    summary: 'Built an AI-powered geospatial CRM platform for customer segmentation, regional analytics, and automated market insights using LLMs.',
    role: 'Developer',
    tech: 'React, Supabase, OpenAI API, Docker, PostgreSQL/PostGIS, Git, Google Maps API, ',
    description:
      'A full-stack housing platform for managing and browsing housing listings.',
    contributions: [
      'Led an agile development team by organizing sprint planning, backlog prioritization, and weekly stand-ups to ensure timely project progress.',
      'Coordinated collaboration between front-end, back-end, and deployment teams to streamline development and resolve blockers.',
      'Managed project timelines and feature prioritization while ensuring core functionalities such as authentication, listing management, and database-backed housing posts were delivered.',
    ],
    cover: '/projects/crm/cover.png',
    images: [
      '/projects/crm/shot1.png',
      '/projects/crm/shot2.png',
      '/projects/crm/shot3.png',
    ],
    demoUrl: null,
    githubUrl: 'https://github.com/Longcao24/mapplot',
    awards: ['CSE Demo Day 2025: 2nd Place', 'https://ub-cse-demo-day.github.io/by_year/2025fa']
  },

  {
    id: 3,
    title: 'Social Platform Backend',
    stack: 'Python • MongoDB • Docker • Git • WebSockets • REST APIs • OAuth 2.0 Authentication • Media Processing',
    summary: 'Built an AI-powered geospatial CRM platform for customer segmentation, regional analytics, and automated market insights using LLMs.',
    role: 'Backend Developer',
    tech: 'React, Supabase, OpenAI API, Docker, PostgreSQL/PostGIS, Git, Google Maps API, ',
    description:
      'Built a scalable backend with real-time WebSockets, REST APIs, OAuth authentication, and media processing.',
    contributions: [
      'Deployed backend services on AWS EC2 using Docker and configured reverse proxy with Nginx',
      'Implemented low-level HTTP server architecture, defining Router, Request, and Response abstractions',
      'Designed and implemented 12+ RESTful APIs supporting chat, search, media upload, and authentication, handling concurrent WebSocket connections for real-time updates',
      'Implemented WebSocket-based real-time messaging system supporting concurrent user sessions',
      'Integrated OAuth 2.0 authentication for secure login and session management',
      'Integrated TOTP-based 2FA for enhanced account security',
      'Processed and transcoded media using FFmpeg for optimized upload and playback'
    ],
    cover: '/projects/chatapp/cover.png',
    images: [
      '/projects/chatapp/shot1.png',
      '/projects/chatapp/shot2.png',
      '/projects/chatapp/shot3.png',
    ],
    demoUrl: null,
    githubUrl: '',
    awards: ['Web Applications Teaching Assistant', 'https://cse312.com/']

  },

  {
    id: 4,
    title: 'IMU Data Publisher for SLAM System',
    stack: 'Robotics • ROS • Sensor Fusion',
    summary: 'A ROS-based module that streams and publishes IMU sensor data for real-time localization and SLAM applications.',
    role: 'Developed and implemented the IMU data publishing node and integrated it into a larger sensor fusion pipeline.',
    tech: 'Python, ROS (Robot Operating System), WebSockets, Sensor APIs, Linux',
    description: 'Built a ROS node to capture and publish IMU data for real-time SLAM, enabling seamless sensor fusion and integration with external devices using standardized ROS message formats.',
    contributions: [
      'Implemented a ROS publisher node to stream IMU data in real time',
      'Integrated external sensor data sources (e.g., mobile device IMU streams) via WebSockets',
      'Structured data into ROS-compatible message formats (sensor_msgs/Imu)',
      'Supported synchronization with other data sources for SLAM and sensor fusion',
      'Tested and validated data flow for real-time robotics applications'
    ],
    cover: '/projects/imu/cover.jpg',
    images: [
      '/projects/imu/shot1.jpg',
      '/projects/imu/shot2.jpg',
      '/projects/imu/shot3.png',
    ],
    demoUrl: null,
    githubUrl: 'https://github.com/WIRES-UB/imu_publisher',
    awards: ['Undergraduate Researcher: WiROS', 'https://wcsng.ucsd.edu/wiros/']
  },
]