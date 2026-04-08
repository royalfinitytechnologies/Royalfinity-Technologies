export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  department: "leadership" | "tech" | "design" | "marketing";
  shortDesc: string;
  fullBio: string;
  image: string;
  color: "cyan" | "purple" | "gold" | "pink";
  skills: string[];
  achievements: { num: string; label: string }[];
  socials: { platform: string; href: string }[];
};

export const teamData: TeamMember[] = [

  // ── Leadership ──
  {
    slug: "bhumika-gandhi",
    name: "Bhumika Gandhi",
    role: "Co-Founder & CEO",
    department: "leadership",
    shortDesc: "Driving vision, strategy, and client success with trust and transparency.",
    fullBio: "Bhumika Gandhi is the Co-Founder and CEO of RoyalFinity Technologies. With a sharp business mindset and a deep passion for building meaningful brands, she leads the company's overall vision, client relationships, and strategic growth. Bhumika believes that every business deserves a strong digital presence, and she works tirelessly to ensure that each client receives personalized attention and results-driven solutions. Her leadership style is rooted in trust, transparency, and long-term thinking — values that have become the foundation of RoyalFinity's culture and success.",
    image: "/founder-ceo.jpg",
    color: "cyan",
    skills: ["Business Strategy", "Client Relations", "Brand Building", "Digital Marketing", "Leadership", "Growth Hacking"],
    achievements: [
      { num: "45+", label: "Clients Served" },
      { num: "78+", label: "Projects Led" },
      { num: "2+",  label: "Years Leading" },
      { num: "99%", label: "Client Satisfaction" },
    ],
    socials: [
      { platform: "LinkedIn",  href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
      { platform: "Instagram", href: "https://www.instagram.com/royalfinitytechnologies" },
    ],
  },
  {
    slug: "lavish-sachdeva",
    name: "Lavish Sachdeva",
    role: "Co-Founder & CTO",
    department: "leadership",
    shortDesc: "Shaping technical direction with modern, scalable, and future-ready solutions.",
    fullBio: "Lavish Sachdeva is the Co-Founder and CTO of RoyalFinity Technologies. A passionate technologist and problem-solver, Lavish drives the company's entire technical vision — from architecture decisions to hands-on development. He ensures that every product RoyalFinity delivers is built with the latest technologies, clean code practices, and a strong focus on performance and scalability. With expertise spanning full-stack development, mobile apps, AI integration, and cloud infrastructure, Lavish leads the engineering team with a mindset of continuous innovation and excellence.",
    image: "/founder-cto.jpg",
    color: "purple",
    skills: ["Full Stack Development", "System Architecture", "AI & Automation", "Mobile Apps", "Cloud Infrastructure", "Team Leadership"],
    achievements: [
      { num: "50+",   label: "Apps Built" },
      { num: "78+",   label: "Projects Delivered" },
      { num: "2+",    label: "Years Building" },
      { num: "99.9%", label: "Uptime Achieved" },
    ],
    socials: [
      { platform: "LinkedIn", href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
      { platform: "Twitter",  href: "https://twitter.com/royalfinitytech" },
    ],
  },

  // ── Tech ──
  {
    slug: "chandan-fullstack-developer",
    name: "Chandan",
    role: "Full Stack Developer",
    department: "tech",
    shortDesc: "Building robust, scalable web applications from frontend to backend.",
    fullBio: "Chandan is a skilled Full Stack Developer at RoyalFinity Technologies with a strong command over both frontend and backend technologies. He specializes in building high-performance web applications using modern frameworks like React.js, Next.js, and Node.js. Chandan takes pride in writing clean, maintainable code and has a keen eye for detail when it comes to UI/UX implementation. His ability to handle the entire development lifecycle — from database design to pixel-perfect interfaces — makes him an invaluable part of the RoyalFinity engineering team.",
    image: "/chandan fullstack developer.jpeg",
    color: "cyan",
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
    achievements: [
      { num: "30+", label: "Apps Built" },
      { num: "99%", label: "Uptime" },
      { num: "50+", label: "Features Shipped" },
      { num: "2+",  label: "Years Exp." },
    ],
    socials: [
      { platform: "LinkedIn", href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
    ],
  },
  {
    slug: "dhruv-web-developer",
    name: "Dhruv",
    role: "Web Developer",
    department: "tech",
    shortDesc: "Crafting fast, responsive, and beautiful websites that convert visitors into customers.",
    fullBio: "Dhruv is a talented Web Developer at RoyalFinity Technologies who specializes in creating visually stunning and highly functional websites. With expertise in modern web technologies and a strong understanding of user experience, Dhruv builds websites that not only look great but also perform exceptionally well. He has a deep knowledge of WordPress, Shopify, and custom web development, and consistently delivers projects that exceed client expectations. Dhruv's attention to performance optimization and SEO best practices ensures that every website he builds ranks well and loads fast.",
    image: "/dhruv web developer.jpeg",
    color: "purple",
    skills: ["HTML/CSS", "JavaScript", "WordPress", "Shopify", "SEO Optimization", "Performance Tuning"],
    achievements: [
      { num: "40+", label: "Websites Built" },
      { num: "3s",  label: "Avg Load Time" },
      { num: "95+", label: "PageSpeed Score" },
      { num: "2+",  label: "Years Exp." },
    ],
    socials: [
      { platform: "LinkedIn", href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
    ],
  },

  // ── Design ──
  {
    slug: "monika-graphic-designer",
    name: "Monika",
    role: "Graphic Designer",
    department: "design",
    shortDesc: "Creating stunning visuals and brand identities that leave lasting impressions.",
    fullBio: "Monika is a creative Graphic Designer at RoyalFinity Technologies with a passion for visual storytelling. She specializes in crafting compelling brand identities, logos, marketing materials, and digital graphics that resonate with target audiences. Monika brings a unique blend of artistic creativity and strategic thinking to every project, ensuring that each design not only looks beautiful but also communicates the right message. Her work has helped numerous brands establish a strong and memorable visual presence across both digital and print media.",
    image: "/monika graphic designer.jpeg",
    color: "pink",
    skills: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Identity", "Logo Design", "Print Design"],
    achievements: [
      { num: "100+", label: "Brands Designed" },
      { num: "98%",  label: "Client Approval" },
      { num: "48hr", label: "First Draft" },
      { num: "2+",   label: "Years Exp." },
    ],
    socials: [
      { platform: "LinkedIn",  href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
      { platform: "Instagram", href: "https://www.instagram.com/royalfinitytechnologies" },
    ],
  },
  {
    slug: "jatin-graphic-video-editor",
    name: "Jatin",
    role: "Graphic Designer & Video Editor",
    department: "design",
    shortDesc: "Producing engaging motion graphics and video content that captivates audiences.",
    fullBio: "Jatin is a multi-talented Graphic Designer and Video Editor at RoyalFinity Technologies who combines design expertise with powerful storytelling through video. He creates everything from eye-catching social media graphics to professional brand videos, reels, and motion graphics. Jatin has a strong understanding of visual communication and knows how to craft content that drives engagement and builds brand awareness. His work spans across multiple industries, and his ability to adapt his creative style to different brand voices makes him a versatile and highly valued member of the team.",
    image: "/jatin graphic designer & video editor.jpeg",
    color: "gold",
    skills: ["Adobe Premiere", "After Effects", "Motion Graphics", "Color Grading", "Social Media Content", "Reels & Shorts"],
    achievements: [
      { num: "200+", label: "Videos Produced" },
      { num: "5M+",  label: "Views Generated" },
      { num: "50+",  label: "Brands Served" },
      { num: "2+",   label: "Years Exp." },
    ],
    socials: [
      { platform: "LinkedIn",  href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
      { platform: "Instagram", href: "https://www.instagram.com/royalfinitytechnologies" },
    ],
  },
  {
    slug: "trilok-graphic-video-editor",
    name: "Trilok",
    role: "Graphic Designer & Video Editor",
    department: "design",
    shortDesc: "Designing creative visuals and editing high-quality video content for brands.",
    fullBio: "Trilok is a skilled Graphic Designer and Video Editor at RoyalFinity Technologies who brings brands to life through compelling visuals and dynamic video content. With a strong creative instinct and technical proficiency in industry-leading tools, Trilok consistently delivers high-quality work that stands out. He specializes in creating social media content, promotional videos, brand graphics, and UI-focused designs. Trilok's dedication to quality and his ability to meet tight deadlines while maintaining creative excellence make him an essential part of the RoyalFinity design team.",
    image: "/trilok Graphic design & video editing.jpeg",
    color: "pink",
    skills: ["UI/UX Design", "Figma", "Adobe XD", "Video Editing", "Canva Pro", "Social Media Design"],
    achievements: [
      { num: "60+",  label: "Design Projects" },
      { num: "150+", label: "Videos Edited" },
      { num: "98%",  label: "Satisfaction" },
      { num: "2+",   label: "Years Exp." },
    ],
    socials: [
      { platform: "LinkedIn",  href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
      { platform: "Instagram", href: "https://www.instagram.com/royalfinitytechnologies" },
    ],
  },

  // ── Marketing ──
  {
    slug: "diksha-digital-marketing",
    name: "Diksha",
    role: "Digital Marketing Expert",
    department: "marketing",
    shortDesc: "Growing brands online with data-driven strategies that deliver real ROI.",
    fullBio: "Diksha is a results-driven Digital Marketing Expert at RoyalFinity Technologies with a passion for helping businesses grow their online presence. She brings expertise across SEO, Google Ads, Meta Ads, social media marketing, and content strategy. Diksha takes a data-first approach to every campaign — analyzing performance metrics, identifying opportunities, and continuously optimizing to maximize ROI. Her ability to understand target audiences and craft compelling marketing messages has helped multiple brands significantly increase their traffic, leads, and revenue.",
    image: "/diksha digital marketing.jpeg",
    color: "gold",
    skills: ["Google Ads", "Meta Ads", "SEO", "Social Media Marketing", "Email Marketing", "Analytics & Reporting"],
    achievements: [
      { num: "3x",   label: "Avg ROI" },
      { num: "200%", label: "Traffic Growth" },
      { num: "45+",  label: "Brands Grown" },
      { num: "2+",   label: "Years Exp." },
    ],
    socials: [
      { platform: "LinkedIn",  href: "https://www.linkedin.com/company/royalfinitytechnologies/" },
      { platform: "Instagram", href: "https://www.instagram.com/royalfinitytechnologies" },
    ],
  },
];

export const departments = [
  { key: "all",        label: "All Members" },
  { key: "leadership", label: "Leadership"  },
  { key: "tech",       label: "Development" },
  { key: "design",     label: "Design"      },
  { key: "marketing",  label: "Marketing"   },
] as const;
