const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Web developer and tech enthusiast.",
    profession: "Full Stack Developer",
    email: "john.doe@example.com",
    location: "New York"
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "UI/UX designer passionate about user-friendly design.",
    profession: "UI/UX Designer",
    email: "jane.smith@example.com",
    location: "San Francisco"
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "DevOps engineer focused on automation and scalability.",
    profession: "DevOps Engineer",
    email: "michael.johnson@example.com",
    location: "Austin"
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Frontend developer with a love for React.",
    profession: "Frontend Developer",
    email: "emily.davis@example.com",
    location: "New York"
  },
  {
    id: 5,
    name: "Robert Wilson",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Back-end specialist with experience in Node.js and Python.",
    profession: "Backend Developer",
    email: "robert.wilson@example.com",
    location: "Seattle"
  },
  {
    id: 6,
    name: "Sarah Taylor",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Mobile app developer focusing on Android and iOS.",
    profession: "Mobile Developer",
    email: "sarah.taylor@example.com",
    location: "San Francisco"
  },
  {
    id: 7,
    name: "David Brown",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "Cybersecurity expert and ethical hacker.",
    profession: "Security Analyst",
    email: "david.brown@example.com",
    location: "Austin"
  },
  {
    id: 8,
    name: "Olivia Garcia",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    description: "Data scientist who loves turning data into stories.",
    profession: "Data Scientist",
    email: "olivia.garcia@example.com",
    location: "New York"
  },
  {
    id: 9,
    name: "Daniel Martinez",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    description: "Machine learning engineer exploring AI solutions.",
    profession: "ML Engineer",
    email: "daniel.martinez@example.com",
    location: "Boston"
  },
  {
    id: 10,
    name: "Sophia Anderson",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    description: "Cloud architect helping businesses scale efficiently.",
    profession: "Cloud Architect",
    email: "sophia.anderson@example.com",
    location: "Seattle"
  },
  {
    id: 11,
    name: "James Thomas",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    description: "Passionate game developer and creative storyteller.",
    profession: "Game Developer",
    email: "james.thomas@example.com",
    location: "Austin"
  },
  {
    id: 12,
    name: "Isabella White",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    description: "QA engineer ensuring quality and performance.",
    profession: "QA Engineer",
    email: "isabella.white@example.com",
    location: "Chicago"
  },
  {
    id: 13,
    name: "William Harris",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    description: "AI researcher and deep learning enthusiast.",
    profession: "AI Researcher",
    email: "william.harris@example.com",
    location: "Boston"
  },
  {
    id: 14,
    name: "Mia Martin",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    description: "Blockchain developer exploring decentralized tech.",
    profession: "Blockchain Developer",
    email: "mia.martin@example.com",
    location: "San Francisco"
  },
  {
    id: 15,
    name: "Alexander Thompson",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    description: "Tech lead passionate about mentoring junior devs.",
    profession: "Tech Lead",
    email: "alexander.thompson@example.com",
    location: "Chicago"
  },
  {
    id: 16,
    name: "Charlotte Moore",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    description: "Product manager bringing ideas to life.",
    profession: "Product Manager",
    email: "charlotte.moore@example.com",
    location: "New York"
  },
  {
    id: 17,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    description: "Automation tester and Selenium specialist.",
    profession: "Automation Tester",
    email: "ethan.taylor@example.com",
    location: "Boston"
  },
  {
    id: 18,
    name: "Amelia Jackson",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    description: "Scrum master and agile advocate.",
    profession: "Scrum Master",
    email: "amelia.jackson@example.com",
    location: "San Francisco"
  },
  {
    id: 19,
    name: "Logan Lee",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    description: "AR/VR developer building immersive experiences.",
    profession: "AR/VR Developer",
    email: "logan.lee@example.com",
    location: "Austin"
  },
  {
    id: 20,
    name: "Grace Perez",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    description: "Digital marketing expert and SEO strategist.",
    profession: "Digital Marketer",
    email: "grace.perez@example.com",
    location: "Chicago"
  },
  {
    id: 21,
    name: "Lucas Walker",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    description: "Database administrator optimizing data access.",
    profession: "Database Administrator",
    email: "lucas.walker@example.com",
    location: "Seattle"
  },
  {
    id: 22,
    name: "Chloe Hall",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    description: "Tech blogger and open-source contributor.",
    profession: "Content Creator",
    email: "chloe.hall@example.com",
    location: "Boston"
  },
  {
    id: 23,
    name: "Henry Young",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    description: "System analyst bridging business and tech.",
    profession: "System Analyst",
    email: "henry.young@example.com",
    location: "New York"
  },
  {
    id: 24,
    name: "Ella Allen",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    description: "Software engineer focused on performance tuning.",
    profession: "Software Engineer",
    email: "ella.allen@example.com",
    location: "San Francisco"
  },
  {
    id: 25,
    name: "Jack Scott",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    description: "Cloud DevOps engineer passionate about CI/CD.",
    profession: "DevOps Engineer",
    email: "jack.scott@example.com",
    location: "Seattle"
  }
];

export default users;