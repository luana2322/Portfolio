export interface Project {
  id: string;
  name: string;
  image: string;
  tech: string[];
  desc: string;
  category: "all" | "fullstack" | "mobile" | "backend" | "ai";
  link: string;
  demo?: string;
  highlights?: string[];
  featured?: boolean;
}

export interface Certification {
  title: string;
  period: string;
  issuer?: string;
  desc: string;
  badge?: string;
}

export interface Experience {
  title: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  desc: string;
  achievements?: string[];
  skills?: string[];
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: string;
    icon: string;
    color: string;
  }[];
}

export interface LangContent {
  greeting: string;
  title: string;
  roles: string[];
  bio: string;
  about: string;
  ageGender: string;
  location: string;
  availableStatus: string;
  ctaWork: string;
  ctaContact: string;
  stats: {
    experience: string;
    experienceLabel: string;
    projects: string;
    projectsLabel: string;
    awards: string;
    awardsLabel: string;
    dedication: string;
    dedicationLabel: string;
  };
  skillsTitle: string;
  skillsSubtitle: string;
  skillCategories: SkillCategory[];
  educationTitle: string;
  education: {
    degree: string;
    school: string;
    period: string;
    location: string;
    details: string;
  };
  experienceTitle: string;
  experienceSubtitle: string;
  experience: Experience[];
  certificationsTitle: string;
  certifications: Certification[];
  projectsTitle: string;
  projectsSubtitle: string;
  projectsFilterAll: string;
  projects: Project[];
  contactTitle: string;
  contactSubtitle: string;
  contactCardTitle: string;
  contactForm: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sentSuccess: string;
    copied: string;
  };
  footer: string;
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    zalo: string;
    telegram: string;
  };
  terminal: {
    welcome: string;
    helpText: string;
  };
}

export const content: Record<string, LangContent> = {
  vi: {
    greeting: "Xin chào, tôi là",
    title: "Thái Nguyễn Bảo Luân",
    roles: [
      "Software Engineer",
      "Java & Spring Boot Developer",
      "Fullstack & Mobile Developer",
      "Microservices & AI Enthusiast",
    ],
    bio: "Kỹ sư phần mềm đam mê xây dựng hệ sinh thái web hiện đại, kiến trúc Microservices hiệu năng cao và tích hợp công nghệ AI. Dày dặn kinh nghiệm với Java, Spring Boot, React Native, Docker và kiến trúc đám mây.",
    about: "Hiện là sinh viên chuyên ngành Công nghệ Thông tin tại Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU), đang sinh sống và làm việc tại Đà Nẵng. Tôi luôn hướng đến tư duy kiến trúc sạch (Clean Architecture), hiệu năng tối ưu và trải nghiệm người dùng mượt mà.",
    ageGender: "Nam · 22 tuổi (01/01/2004)",
    location: "Ngũ Hành Sơn, Đà Nẵng, Việt Nam",
    availableStatus: "Sẵn sàng đón nhận cơ hội mới",
    ctaWork: "Xem Dự Án",
    ctaContact: "Liên Hệ Ngay",
    stats: {
      experience: "2+",
      experienceLabel: "Năm kinh nghiệm thực tế",
      projects: "7+",
      projectsLabel: "Dự án đã hoàn thành",
      awards: "Top 4",
      awardsLabel: "Tetote Hackathon 2024",
      dedication: "100%",
      dedicationLabel: "Cam kết chất lượng code",
    },
    skillsTitle: "Kỹ Năng & Công Nghệ",
    skillsSubtitle: "Bộ công cụ công nghệ hiện đại tôi sử dụng để kiến tạo các sản phẩm phần mềm chất lượng cao",
    skillCategories: [
      {
        category: "Ngôn ngữ lập trình",
        items: [
          { name: "Java", level: "Chuyên sâu", icon: "FaJava", color: "#f89820" },
          { name: "Python", level: "Thành thạo", icon: "FaPython", color: "#3776ab" },
          { name: "TypeScript", level: "Thành thạo", icon: "SiTypescript", color: "#3178c6" },
          { name: "JavaScript", level: "Thành thạo", icon: "FaJs", color: "#f7df1e" },
          { name: "HTML5/CSS3", level: "Chuyên sâu", icon: "FaHtml5", color: "#e34f26" },
          { name: "SQL", level: "Thành thạo", icon: "FaDatabase", color: "#4479a1" },
        ],
      },
      {
        category: "Backend & Microservices",
        items: [
          { name: "Spring Boot", level: "Chuyên sâu", icon: "SiSpringboot", color: "#6db33f" },
          { name: "FastAPI", level: "Thành thạo", icon: "SiFastapi", color: "#009688" },
          { name: "RESTful API", level: "Chuyên sâu", icon: "FaNodeJs", color: "#68a063" },
          { name: "WebRTC", level: "Thực chiến", icon: "SiWebrtc", color: "#333333" },
          { name: "Microservices", level: "Thực chiến", icon: "FaServer", color: "#0284c7" },
        ],
      },
      {
        category: "Frontend & Mobile",
        items: [
          { name: "React Native", level: "Thành thạo", icon: "FaReact", color: "#61dafb" },
          { name: "React / Next.js", level: "Thành thạo", icon: "SiNextdotjs", color: "#000000" },
          { name: "Vue.js", level: "Thành thạo", icon: "FaVuejs", color: "#4fc08d" },
          { name: "Flutter", level: "Thực chiến", icon: "SiFlutter", color: "#02569b" },
          { name: "Tailwind CSS", level: "Chuyên sâu", icon: "SiTailwindcss", color: "#06b6d4" },
        ],
      },
      {
        category: "Cơ sở dữ liệu & Cloud",
        items: [
          { name: "MySQL", level: "Chuyên sâu", icon: "SiMysql", color: "#4479a1" },
          { name: "MongoDB", level: "Thành thạo", icon: "SiMongodb", color: "#47a248" },
          { name: "PostgreSQL", level: "Thành thạo", icon: "SiPostgresql", color: "#336791" },
          { name: "MinIO", level: "Thực chiến", icon: "SiMinio", color: "#c72c48" },
          { name: "Docker", level: "Thành thạo", icon: "FaDocker", color: "#2496ed" },
        ],
      },
      {
        category: "Công cụ & Phương pháp",
        items: [
          { name: "Git & GitHub", level: "Chuyên sâu", icon: "FaGitAlt", color: "#f05032" },
          { name: "Postman", level: "Thành thạo", icon: "SiPostman", color: "#ff6c37" },
          { name: "IntelliJ IDEA", level: "Chuyên sâu", icon: "SiIntellijidea", color: "#000000" },
          { name: "VS Code", level: "Chuyên sâu", icon: "VscVscode", color: "#007acc" },
          { name: "Agile / Scrum", level: "Thành thạo", icon: "FaProjectDiagram", color: "#8b5cf6" },
        ],
      },
    ],
    educationTitle: "Học Vấn",
    education: {
      degree: "Cử nhân Kỹ thuật Phần mềm / Công nghệ Thông tin",
      school: "Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU)",
      period: "10/2022 - 06/2027 (Dự kiến)",
      location: "Đà Nẵng, Việt Nam",
      details: "Chương trình đào tạo chuẩn kỹ sư công nghệ thông tin. Nghiên cứu sâu về Cấu trúc dữ liệu & Giải thuật, Kiến trúc phần mềm, Hệ thống phân tán, Lập trình hướng đối tượng (OOP) và Trí tuệ nhân tạo.",
    },
    experienceTitle: "Kinh Nghiệm Làm Việc",
    experienceSubtitle: "Hành trình tích lũy kinh nghiệm qua các dự án thực tế và doanh nghiệp công nghệ",
    experience: [
      {
        title: "Software Developer (AI Video Production Tool)",
        company: "GTM MEDIA",
        role: "Software Developer",
        period: "05/2026 - 09/2026",
        location: "Đà Nẵng",
        desc: "Phát triển phần mềm máy tính chuyên dụng hỗ trợ sản xuất video bằng công nghệ AI, xây dựng module quản lý tài khoản, quy trình tự động và dữ liệu.",
        achievements: [
          "Tích hợp các API AI hiện đại, tự động hóa toàn bộ quy trình sinh nội dung video và âm thanh.",
          "Tối ưu hóa hiệu năng ứng dụng, xử lý batch processing và caching tài nguyên đa phương tiện.",
          "Phối hợp nhịp nhàng trong nhóm phát triển qua Git, kiểm soát chất lượng qua CI/CD và unit tests.",
        ],
        skills: ["Python", "AI Integration", "Desktop App", "Workflow Automation", "Git"],
      },
      {
        title: "Developer Intern",
        company: "CodeGym Danang",
        role: "Developer Intern",
        period: "02/2026 - 05/2026",
        location: "Đà Nẵng",
        desc: "Phát triển và bảo trì các tính năng ứng dụng web, xây dựng hệ thống RESTful API, tối ưu hóa truy vấn cơ sở dữ liệu MySQL.",
        achievements: [
          "Tham gia rà soát mã nguồn (code review), viết unit test, kiểm thử và khắc phục lỗi phần mềm định kỳ.",
          "Tối ưu hóa các query MySQL phức tạp, giảm thiểu thời gian phản hồi API.",
          "Áp dụng quy trình Agile/Scrum chặt chẽ cùng đội ngũ kỹ sư.",
        ],
        skills: ["Java", "Spring Boot", "MySQL", "RESTful API", "Agile/Scrum"],
      },
      {
        title: "Backend Developer Intern",
        company: "Mynavi Tectus Vietnam Co., Ltd.",
        role: "Backend Developer Intern",
        period: "07/2025 - 09/2025",
        location: "Đà Nẵng",
        desc: "Đóng góp phát triển và vận hành hệ thống backend phân tán, xây dựng các dịch vụ microservice sử dụng FastAPI và Spring Boot.",
        achievements: [
          "Xây dựng và bảo trì các endpoint RESTful an toàn, đáp ứng tiêu chuẩn khắt khe từ thị trường Nhật Bản.",
          "Viết tài liệu Swagger/OpenAPI chi tiết phục vụ tích hợp giao diện frontend.",
          "Nâng cao khả năng làm việc trong môi trường đa quốc gia và tiêu chuẩn code chất lượng cao.",
        ],
        skills: ["FastAPI", "Python", "RESTful API", "Docker", "Japanese Standard"],
      },
      {
        title: "Full-Stack Developer Intern",
        company: "Techzen Co., Ltd.",
        role: "Full-Stack Developer Intern",
        period: "08/2024 - 07/2025",
        location: "Đà Nẵng",
        desc: "Phát triển toàn diện từ backend Java / Spring Boot đến giao diện người dùng bằng Vue.js và React Native.",
        achievements: [
          "Thiết kế kiến trúc MVC, xây dựng hệ thống quản lý dữ liệu toàn diện với cơ chế xác thực JWT.",
          "Phát triển giao diện ứng dụng di động với React Native mượt mà, thân thiện với người dùng.",
          "Hoàn thành xuất sắc các sprint cam kết với ban quản lý dự án.",
        ],
        skills: ["Java", "Spring Boot", "Vue.js", "React Native", "JWT", "MySQL"],
      },
    ],
    certificationsTitle: "Chứng Chỉ & Giải Thưởng",
    certifications: [
      {
        title: "Tetote Hackathon 2024",
        period: "05/2024",
        issuer: "Tetote Organization",
        desc: "Đạt Giải 4 chung cuộc (Rank: 4th Place) với sản phẩm sáng tạo giải quyết bài toán thực tế dưới áp lực thời gian 48 giờ.",
        badge: "Top 4 Hackathon",
      },
      {
        title: "Software Engineer Intern Certificate",
        period: "08/2024",
        issuer: "HackerRank",
        desc: "Chứng chỉ quốc tế đánh giá năng lực giải quyết vấn đề, thuật toán và kỹ năng lập trình chuyên nghiệp từ nền tảng HackerRank.",
        badge: "Verified HackerRank",
      },
    ],
    projectsTitle: "Dự Án Tiêu Biểu",
    projectsSubtitle: "Một số sản phẩm nổi bật thể hiện khả năng xây dựng hệ thống từ ý tưởng đến thực tế",
    projectsFilterAll: "Tất cả",
    projects: [
      {
        id: "fyn",
        name: "FYN - Find Your Network",
        image: "/images/FYN-Find-Your-Network-Live-Your-World.png",
        tech: ["Microservices", "Spring Boot", "FastAPI", "Flutter", "MinIO", "Docker", "REST API"],
        desc: "Mạng xã hội thế hệ mới xây dựng theo kiến trúc Microservices hiện đại, hỗ trợ chia sẻ khoảnh khắc, tương tác cộng đồng và lưu trữ tệp tin đa phương tiện với MinIO phân tán.",
        category: "fullstack",
        link: "https://github.com/luana2322/fyn-monolithic",
        highlights: [
          "Kiến trúc Microservices độc lập phân tách rõ ràng Service Quản lý người dùng, Nội dung và Lưu trữ.",
          "Giao diện di động mượt mà bằng Flutter kết hợp backend hiệu năng cao với Spring Boot & FastAPI.",
          "Đóng gói toàn bộ hạ tầng bằng Docker Compose sẵn sàng triển khai trên Cloud.",
        ],
        featured: true,
      },
      {
        id: "social-purchase",
        name: "Social Media Purchase Behavior Analysis",
        image: "/images/social-media-purchase.png",
        tech: ["Python", "XGBoost", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "Jupyter"],
        desc: "Nền tảng SaaS phân tích và dự đoán hành vi mua hàng trực tuyến dựa trên mô hình máy học XGBoost được huấn luyện trên dữ liệu thương mại điện tử và tương tác mạng xã hội.",
        category: "ai",
        link: "https://github.com/luana2322/Social-Media-Influence-on-Online-Purchase-Behavior-A-Data-Analyst",
        highlights: [
          "Mô hình học máy XGBoost đạt độ chính xác cao trong việc dự đoán tỷ lệ chuyển đổi đơn hàng.",
          "Dashboard trực quan hóa dữ liệu thời gian thực được xây dựng bằng Next.js và Tailwind CSS.",
          "API backend hiệu năng cao xử lý trích xuất feature và suy luận mô hình.",
        ],
        featured: true,
      },
      {
        id: "etechplaza",
        name: "E-TechPlaza E-Commerce",
        image: "/images/e-techplaza.png",
        tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JavaScript", "HTML5/CSS3"],
        desc: "Hệ thống quản lý và bán hàng công nghệ trực tuyến toàn diện với phân quyền chi tiết, giỏ hàng, thanh toán và bảng điều khiển quản trị viên thông minh.",
        category: "backend",
        link: "https://github.com/luana2322/E-TechPlaza",
        highlights: [
          "Quản lý vòng đời đơn hàng, tồn kho, báo cáo doanh thu chi tiết theo thời gian thực.",
          "Cơ chế bảo mật Spring Security với xác thực phân quyền Admin / Customer nghiêm ngặt.",
        ],
        featured: true,
      },
      {
        id: "hivehub",
        name: "HiveHub Community App",
        image: "/images/hivehub.png",
        tech: ["Java", "Spring Boot", "React Native", "MySQL", "JWT", "REST API"],
        desc: "Ứng dụng di động kết nối cộng đồng người dùng địa phương, thảo luận nhóm, tìm kiếm sự kiện và tương tác xã hội trực tiếp.",
        category: "mobile",
        link: "https://github.com/luana2322/HiveHub",
        highlights: [
          "Giao diện Mobile trải nghiệm bản địa (Native Feel) xây dựng với React Native.",
          "Hệ thống thông báo đẩy và đồng bộ bảng tin tương tác tức thì.",
        ],
        featured: false,
      },
      {
        id: "fitmeet",
        name: "FitMeet - Fitness Video Calls",
        image: "/images/fitmeet.png",
        tech: ["Java", "Spring Boot", "WebRTC", "Android XML", "Socket.io"],
        desc: "Ứng dụng hội nghị truyền hình trực tuyến chuyên biệt cho huấn luyện thể dục thể thao với truyền phát video độ trễ cực thấp sử dụng giao thức WebRTC.",
        category: "mobile",
        link: "https://github.com/luana2322/FitMeet",
        highlights: [
          "Truyền phát Video & Audio Peer-to-Peer trực tiếp với độ trễ dưới 200ms bằng WebRTC.",
          "Tích hợp hẹn giờ bài tập, đếm nhịp và phòng tập ảo tương tác thời gian thực.",
        ],
        featured: true,
      },
      {
        id: "usermanage",
        name: "User Management with MinIO",
        image: "/images/user-manage-spring-mongodb-minio.png",
        tech: ["Spring Boot", "MongoDB", "Flutter", "MinIO", "Docker"],
        desc: "Ứng dụng quản lý hồ sơ và dữ liệu người dùng nâng cao, kết hợp cơ sở dữ liệu MongoDB NoSQL và hệ thống lưu trữ đối tượng đám mây MinIO.",
        category: "fullstack",
        link: "https://github.com/luana2322/USER-MANAGE-SPRING-MONGODB-MINIO.git",
        highlights: [
          "Lưu trữ và phục vụ tập tin, avatar dung lượng lớn tối ưu qua S3-compatible MinIO.",
          "Cơ sở dữ liệu MongoDB lưu trữ metadata linh hoạt và mở rộng dễ dàng.",
        ],
        featured: false,
      },
      {
        id: "snakegame",
        name: "Retro Classic Snake Game",
        image: "/images/snake game.png",
        tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Audio API"],
        desc: "Tựa game rắn săn mồi cổ điển mang phong cách hiện đại với hiệu ứng đồ họa bắt mắt, hệ thống tính điểm và âm thanh sống động.",
        category: "fullstack",
        link: "https://github.com/luana2322/snakegame",
        demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
        highlights: [
          "Vòng lặp trò chơi tùy biến chạy ở 60fps trên HTML5 Canvas thuần.",
          "Video demo trực tiếp đã thu hút nhiều lượt theo dõi và tương tác.",
        ],
        featured: false,
      },
    ],
    contactTitle: "Kết Nối Với Tôi",
    contactSubtitle: "Bạn có dự án thú vị, muốn tuyển dụng hoặc chỉ muốn trao đổi công nghệ? Đừng ngần ngại nhắn tin cho tôi!",
    contactCardTitle: "Thông tin liên lạc",
    contactForm: {
      name: "Họ và tên của bạn",
      namePlaceholder: "VD: Nguyễn Văn A",
      email: "Địa chỉ Email",
      emailPlaceholder: "VD: yourname@example.com",
      subject: "Chủ đề trao đổi",
      subjectPlaceholder: "VD: Cơ hội hợp tác dự án mới",
      message: "Nội dung tin nhắn",
      messagePlaceholder: "Hãy chia sẻ chi tiết về nhu cầu hoặc lời mời của bạn...",
      send: "Gửi Tin Nhắn",
      sending: "Đang gửi đi...",
      sentSuccess: "Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.",
      copied: "Đã sao chép vào bộ nhớ tạm!",
    },
    footer: "© 2026 Thái Nguyễn Bảo Luân. Tất cả các quyền được bảo lưu.",
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      contact: "Liên hệ",
    },
    contact: {
      email: "thailuanpy1234@gmail.com",
      phone: "+84 972 031 655",
      github: "https://github.com/luana2322",
      linkedin: "https://linkedin.com/in/luana2322",
      zalo: "https://zalo.me/0972031655",
      telegram: "https://t.me/luana2322",
    },
    terminal: {
      welcome: "Chào mừng đến với Terminal của Bảo Luân! Gõ 'help' để xem danh sách lệnh.",
      helpText: "Các lệnh có sẵn: about, skills, projects, experience, contact, clear, sudo",
    },
  },
  en: {
    greeting: "Hi, I'm",
    title: "Thai Nguyen Bao Luan",
    roles: [
      "Software Engineer",
      "Java & Spring Boot Developer",
      "Fullstack & Mobile Developer",
      "Microservices & AI Enthusiast",
    ],
    bio: "Software Engineer passionate about building scalable web ecosystems, resilient Microservices, and AI-integrated applications. Experienced with Java, Spring Boot, React Native, Docker, and Cloud-native architectures.",
    about: "Information Technology student at Vietnam - Korea University of Information and Communication Technology (VKU), currently based in Da Nang, Vietnam. Dedicated to Clean Architecture, optimal performance, and smooth digital user experiences.",
    ageGender: "Male · 22 years old (Jan 1, 2004)",
    location: "Da Nang, Vietnam",
    availableStatus: "Available for new opportunities",
    ctaWork: "View My Work",
    ctaContact: "Get In Touch",
    stats: {
      experience: "2+",
      experienceLabel: "Years Practical Experience",
      projects: "7+",
      projectsLabel: "Completed Projects",
      awards: "Top 4",
      awardsLabel: "Tetote Hackathon 2024",
      dedication: "100%",
      dedicationLabel: "Clean Code & Quality",
    },
    skillsTitle: "Skills & Tech Stack",
    skillsSubtitle: "The modern tech stack and tooling I use to craft reliable, high-performance software",
    skillCategories: [
      {
        category: "Programming Languages",
        items: [
          { name: "Java", level: "Expert", icon: "FaJava", color: "#f89820" },
          { name: "Python", level: "Proficient", icon: "FaPython", color: "#3776ab" },
          { name: "TypeScript", level: "Proficient", icon: "SiTypescript", color: "#3178c6" },
          { name: "JavaScript", level: "Proficient", icon: "FaJs", color: "#f7df1e" },
          { name: "HTML5/CSS3", level: "Expert", icon: "FaHtml5", color: "#e34f26" },
          { name: "SQL", level: "Proficient", icon: "FaDatabase", color: "#4479a1" },
        ],
      },
      {
        category: "Backend & Microservices",
        items: [
          { name: "Spring Boot", level: "Expert", icon: "SiSpringboot", color: "#6db33f" },
          { name: "FastAPI", level: "Proficient", icon: "SiFastapi", color: "#009688" },
          { name: "RESTful API", level: "Expert", icon: "FaNodeJs", color: "#68a063" },
          { name: "WebRTC", level: "Experienced", icon: "SiWebrtc", color: "#333333" },
          { name: "Microservices", level: "Experienced", icon: "FaServer", color: "#0284c7" },
        ],
      },
      {
        category: "Frontend & Mobile",
        items: [
          { name: "React Native", level: "Proficient", icon: "FaReact", color: "#61dafb" },
          { name: "React / Next.js", level: "Proficient", icon: "SiNextdotjs", color: "#000000" },
          { name: "Vue.js", level: "Proficient", icon: "FaVuejs", color: "#4fc08d" },
          { name: "Flutter", level: "Experienced", icon: "SiFlutter", color: "#02569b" },
          { name: "Tailwind CSS", level: "Expert", icon: "SiTailwindcss", color: "#06b6d4" },
        ],
      },
      {
        category: "Databases & Cloud",
        items: [
          { name: "MySQL", level: "Expert", icon: "SiMysql", color: "#4479a1" },
          { name: "MongoDB", level: "Proficient", icon: "SiMongodb", color: "#47a248" },
          { name: "PostgreSQL", level: "Proficient", icon: "SiPostgresql", color: "#336791" },
          { name: "MinIO", level: "Experienced", icon: "SiMinio", color: "#c72c48" },
          { name: "Docker", level: "Proficient", icon: "FaDocker", color: "#2496ed" },
        ],
      },
      {
        category: "Tools & Methodologies",
        items: [
          { name: "Git & GitHub", level: "Expert", icon: "FaGitAlt", color: "#f05032" },
          { name: "Postman", level: "Proficient", icon: "SiPostman", color: "#ff6c37" },
          { name: "IntelliJ IDEA", level: "Expert", icon: "SiIntellijidea", color: "#000000" },
          { name: "VS Code", level: "Expert", icon: "VscVscode", color: "#007acc" },
          { name: "Agile / Scrum", level: "Proficient", icon: "FaProjectDiagram", color: "#8b5cf6" },
        ],
      },
    ],
    educationTitle: "Education",
    education: {
      degree: "Bachelor of Information Technology",
      school: "Vietnam - Korea University of Information and Communication Technology (VKU)",
      period: "Oct 2022 - Jun 2027 (Expected)",
      location: "Da Nang, Vietnam",
      details: "Comprehensive software engineering curriculum. In-depth focus on Data Structures & Algorithms, Software Architecture, Distributed Systems, Object-Oriented Programming (OOP), and Artificial Intelligence.",
    },
    experienceTitle: "Work Experience",
    experienceSubtitle: "Hands-on industry journey building real-world enterprise and startup applications",
    experience: [
      {
        title: "Software Developer (AI Video Production Tool)",
        company: "GTM MEDIA",
        role: "Software Developer",
        period: "May 2026 - Sep 2026",
        location: "Da Nang",
        desc: "Developing desktop software for AI-powered video production, engineering account, workflow, and data management modules.",
        achievements: [
          "Integrated cutting-edge AI APIs, automating end-to-end video and audio generation workflows.",
          "Optimized application performance, handling concurrent background processing and media caching.",
          "Collaborated via Git with robust code reviews and automated CI/CD pipelines.",
        ],
        skills: ["Python", "AI Integration", "Desktop App", "Workflow Automation", "Git"],
      },
      {
        title: "Developer Intern",
        company: "CodeGym Danang",
        role: "Developer Intern",
        period: "Feb 2026 - May 2026",
        location: "Da Nang",
        desc: "Developed and maintained web application features, implemented RESTful APIs, and optimized MySQL databases.",
        achievements: [
          "Conducted code reviews, authored unit tests, and resolved critical software bugs.",
          "Tuned complex SQL queries to significantly reduce API response latencies.",
          "Collaborated within Agile/Scrum sprints with multidisciplinary teams.",
        ],
        skills: ["Java", "Spring Boot", "MySQL", "RESTful API", "Agile/Scrum"],
      },
      {
        title: "Backend Developer Intern",
        company: "Mynavi Tectus Vietnam Co., Ltd.",
        role: "Backend Developer Intern",
        period: "Jul 2025 - Sep 2025",
        location: "Da Nang",
        desc: "Contributed to backend system development and maintenance, engineering resilient microservices with FastAPI and Spring Boot.",
        achievements: [
          "Developed robust and secure RESTful endpoints complying with strict Japanese market quality benchmarks.",
          "Created interactive Swagger/OpenAPI documentation for seamless frontend integration.",
          "Thrived in an international engineering culture with high clean code standards.",
        ],
        skills: ["FastAPI", "Python", "RESTful API", "Docker", "Japanese Standard"],
      },
      {
        title: "Full-Stack Developer Intern",
        company: "Techzen Co., Ltd.",
        role: "Full-Stack Developer Intern",
        period: "Aug 2024 - Jul 2025",
        location: "Da Nang",
        desc: "Delivered fullstack features utilizing Java & Spring Boot backend alongside Vue.js and React Native frontends.",
        achievements: [
          "Engineered MVC architecture with complete JWT authentication and role-based access control.",
          "Constructed fluid, intuitive mobile screens with React Native.",
          "Consistently delivered all feature sprints on schedule.",
        ],
        skills: ["Java", "Spring Boot", "Vue.js", "React Native", "JWT", "MySQL"],
      },
    ],
    certificationsTitle: "Certifications & Awards",
    certifications: [
      {
        title: "Tetote Hackathon 2024",
        period: "May 2024",
        issuer: "Tetote Organization",
        desc: "Secured 4th Place (Rank: 4th) with an innovative solution built under intense 48-hour hackathon conditions.",
        badge: "Top 4 Hackathon",
      },
      {
        title: "Software Engineer Intern Certificate",
        period: "Aug 2024",
        issuer: "HackerRank",
        desc: "Standardized credential assessing problem solving, algorithmic competence, and professional coding practices.",
        badge: "Verified HackerRank",
      },
    ],
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Selected software projects showcasing full-lifecycle engineering from architecture to deployment",
    projectsFilterAll: "All",
    projects: [
      {
        id: "fyn",
        name: "FYN - Find Your Network",
        image: "/images/FYN-Find-Your-Network-Live-Your-World.png",
        tech: ["Microservices", "Spring Boot", "FastAPI", "Flutter", "MinIO", "Docker", "REST API"],
        desc: "Next-generation social networking platform engineered with a decoupled Microservices architecture, distributed media storage via MinIO, and cross-platform Flutter client.",
        category: "fullstack",
        link: "https://github.com/luana2322/fyn-monolithic",
        highlights: [
          "Independent microservices separating User Management, Content Feeds, and Media Storage.",
          "Fluid mobile UX with Flutter paired with high-throughput Spring Boot & FastAPI backends.",
          "Containerized with Docker Compose for seamless cloud deployment.",
        ],
        featured: true,
      },
      {
        id: "social-purchase",
        name: "Social Media Purchase Behavior Analysis",
        image: "/images/social-media-purchase.png",
        tech: ["Python", "XGBoost", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "Jupyter"],
        desc: "SaaS predictive analytics platform leveraging trained XGBoost machine learning models on fused e-commerce and social engagement datasets.",
        category: "ai",
        link: "https://github.com/luana2322/Social-Media-Influence-on-Online-Purchase-Behavior-A-Data-Analyst",
        highlights: [
          "High predictive accuracy with tuned XGBoost classifiers for consumer conversion forecasting.",
          "Interactive real-time analytics dashboard built with Next.js and Tailwind CSS.",
          "Fast API endpoints for on-the-fly feature extraction and model inference.",
        ],
        featured: true,
      },
      {
        id: "etechplaza",
        name: "E-TechPlaza E-Commerce",
        image: "/images/e-techplaza.png",
        tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JavaScript", "HTML5/CSS3"],
        desc: "Comprehensive e-commerce and inventory management system with role-based authorization, cart checkout, and an administrative metrics dashboard.",
        category: "backend",
        link: "https://github.com/luana2322/E-TechPlaza",
        highlights: [
          "Real-time order lifecycle tracking, inventory audit, and analytics reporting.",
          "Spring Security implementation with rigorous Admin/Customer permission guards.",
        ],
        featured: true,
      },
      {
        id: "hivehub",
        name: "HiveHub Community App",
        image: "/images/hivehub.png",
        tech: ["Java", "Spring Boot", "React Native", "MySQL", "JWT", "REST API"],
        desc: "Local community engagement mobile app enabling localized group discussions, meetup coordination, and social interaction.",
        category: "mobile",
        link: "https://github.com/luana2322/HiveHub",
        highlights: [
          "Native-feeling responsive UI built with React Native.",
          "Real-time push notifications and fast synchronized discussion feeds.",
        ],
        featured: false,
      },
      {
        id: "fitmeet",
        name: "FitMeet - Fitness Video Calls",
        image: "/images/fitmeet.png",
        tech: ["Java", "Spring Boot", "WebRTC", "Android XML", "Socket.io"],
        desc: "Interactive fitness video conferencing platform enabling low-latency live coach-to-client workouts via WebRTC streaming.",
        category: "mobile",
        link: "https://github.com/luana2322/FitMeet",
        highlights: [
          "Sub-200ms ultra-low latency peer-to-peer video streaming powered by WebRTC.",
          "Integrated workout intervals, real-time pace counting, and interactive virtual studio.",
        ],
        featured: true,
      },
      {
        id: "usermanage",
        name: "User Management with MinIO",
        image: "/images/user-manage-spring-mongodb-minio.png",
        tech: ["Spring Boot", "MongoDB", "Flutter", "MinIO", "Docker"],
        desc: "Enterprise user directory and asset storage application pairing MongoDB document database with MinIO S3-compatible cloud bucket.",
        category: "fullstack",
        link: "https://github.com/luana2322/USER-MANAGE-SPRING-MONGODB-MINIO.git",
        highlights: [
          "High-capacity media handling and asset serving with S3-compatible MinIO.",
          "Flexible document schemas and fast query lookups via MongoDB.",
        ],
        featured: false,
      },
      {
        id: "snakegame",
        name: "Retro Classic Snake Game",
        image: "/images/snake game.png",
        tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Audio API"],
        desc: "Arcade classic snake game reimagined with modern 60fps canvas graphics, responsive controls, and high-score tracking.",
        category: "fullstack",
        link: "https://github.com/luana2322/snakegame",
        demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
        highlights: [
          "Custom game loop rendering at consistent 60fps on pure HTML5 Canvas.",
          "Live demo showcased on social media with positive feedback.",
        ],
        featured: false,
      },
    ],
    contactTitle: "Get In Touch",
    contactSubtitle: "Have an exciting project, job opening, or just want to discuss tech? Feel free to reach out anytime!",
    contactCardTitle: "Contact Information",
    contactForm: {
      name: "Your Name",
      namePlaceholder: "e.g. Alex Morgan",
      email: "Your Email Address",
      emailPlaceholder: "e.g. alex@example.com",
      subject: "Subject",
      subjectPlaceholder: "e.g. Project Collaboration or Job Opportunity",
      message: "Message",
      messagePlaceholder: "Tell me about your project, timeline, or requirements...",
      send: "Send Message",
      sending: "Sending...",
      sentSuccess: "Your message has been sent successfully! I will get back to you shortly.",
      copied: "Copied to clipboard!",
    },
    footer: "© 2026 Thai Nguyen Bao Luan. All rights reserved.",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    contact: {
      email: "thailuanpy1234@gmail.com",
      phone: "+84 972 031 655",
      github: "https://github.com/luana2322",
      linkedin: "https://linkedin.com/in/luana2322",
      zalo: "https://zalo.me/0972031655",
      telegram: "https://t.me/luana2322",
    },
    terminal: {
      welcome: "Welcome to Bao Luan's Interactive Terminal! Type 'help' for available commands.",
      helpText: "Available commands: about, skills, projects, experience, contact, clear, sudo",
    },
  },
  ja: {
    greeting: "こんにちは、",
    title: "タイ・グエン・バオ・ルアン",
    roles: [
      "ソフトウェアエンジニア",
      "Java & Spring Boot 開発者",
      "フルスタック & モバイルエンジニア",
      "マイクロサービス & AI 愛好家",
    ],
    bio: "スケーラブルなWebシステム、耐障害性に優れたマイクロサービス、AI統合アプリケーションの構築に情熱を注ぐソフトウェアエンジニア。Java、Spring Boot、React Native、Docker、クラウドネイティブ技術の実践経験が豊富です。",
    about: "ベトナム・韓国情報通信技術大学（VKU）で情報技術を専攻中、現在ダナン在住。クリーンアーキテクチャ、高パフォーマンス、滑らかなユーザー体験の追求を大切にしています。",
    ageGender: "男性 · 22歳 (2004年1月1日生)",
    location: "ベトナム、ダナン市",
    availableStatus: "新しい機会を歓迎しています",
    ctaWork: "実績を見る",
    ctaContact: "お問い合わせ",
    stats: {
      experience: "2年+",
      experienceLabel: "実務・インターン経験",
      projects: "7+",
      projectsLabel: "完成したプロジェクト",
      awards: "Top 4",
      awardsLabel: "Tetote ハッカソン 2024",
      dedication: "100%",
      dedicationLabel: "品質とコミットメント",
    },
    skillsTitle: "スキル & テクノロジースタック",
    skillsSubtitle: "信頼性の高い高品質なソフトウェアを構築するための最新ツールとスタック",
    skillCategories: [
      {
        category: "プログラミング言語",
        items: [
          { name: "Java", level: "得意", icon: "FaJava", color: "#f89820" },
          { name: "Python", level: "熟練", icon: "FaPython", color: "#3776ab" },
          { name: "TypeScript", level: "熟練", icon: "SiTypescript", color: "#3178c6" },
          { name: "JavaScript", level: "熟練", icon: "FaJs", color: "#f7df1e" },
          { name: "HTML5/CSS3", level: "得意", icon: "FaHtml5", color: "#e34f26" },
          { name: "SQL", level: "熟練", icon: "FaDatabase", color: "#4479a1" },
        ],
      },
      {
        category: "バックエンド & マイクロサービス",
        items: [
          { name: "Spring Boot", level: "得意", icon: "SiSpringboot", color: "#6db33f" },
          { name: "FastAPI", level: "熟練", icon: "SiFastapi", color: "#009688" },
          { name: "RESTful API", level: "得意", icon: "FaNodeJs", color: "#68a063" },
          { name: "WebRTC", level: "経験あり", icon: "SiWebrtc", color: "#333333" },
          { name: "Microservices", level: "経験あり", icon: "FaServer", color: "#0284c7" },
        ],
      },
      {
        category: "フロントエンド & モバイル",
        items: [
          { name: "React Native", level: "熟練", icon: "FaReact", color: "#61dafb" },
          { name: "React / Next.js", level: "熟練", icon: "SiNextdotjs", color: "#000000" },
          { name: "Vue.js", level: "熟練", icon: "FaVuejs", color: "#4fc08d" },
          { name: "Flutter", level: "経験あり", icon: "SiFlutter", color: "#02569b" },
          { name: "Tailwind CSS", level: "得意", icon: "SiTailwindcss", color: "#06b6d4" },
        ],
      },
      {
        category: "データベース & クラウド",
        items: [
          { name: "MySQL", level: "得意", icon: "SiMysql", color: "#4479a1" },
          { name: "MongoDB", level: "熟練", icon: "SiMongodb", color: "#47a248" },
          { name: "PostgreSQL", level: "熟練", icon: "SiPostgresql", color: "#336791" },
          { name: "MinIO", level: "経験あり", icon: "SiMinio", color: "#c72c48" },
          { name: "Docker", level: "熟練", icon: "FaDocker", color: "#2496ed" },
        ],
      },
      {
        category: "ツール & 開発手法",
        items: [
          { name: "Git & GitHub", level: "得意", icon: "FaGitAlt", color: "#f05032" },
          { name: "Postman", level: "熟練", icon: "SiPostman", color: "#ff6c37" },
          { name: "IntelliJ IDEA", level: "得意", icon: "SiIntellijidea", color: "#000000" },
          { name: "VS Code", level: "得意", icon: "VscVscode", color: "#007acc" },
          { name: "Agile / Scrum", level: "熟練", icon: "FaProjectDiagram", color: "#8b5cf6" },
        ],
      },
    ],
    educationTitle: "学歴",
    education: {
      degree: "情報技術学士（ソフトウェア工学）",
      school: "ベトナム・韓国情報通信技術大学（VKU）",
      period: "2022年10月 - 2027年6月（予定）",
      location: "ベトナム、ダナン",
      details: "データ構造とアルゴリズム、分散システム、ソフトウェア設計パターン（OOP）、人工知能を重点的に学習。",
    },
    experienceTitle: "職歴 & インターン経験",
    experienceSubtitle: "実際の企業・プロダクト開発を通じた実践的な成長の軌跡",
    experience: [
      {
        title: "ソフトウェア開発者 (AI動画制作ツール)",
        company: "GTM MEDIA",
        role: "Software Developer",
        period: "2026年5月 - 2026年9月",
        location: "ダナン",
        desc: "AI技術を活用した動画制作デスクトップアプリのアカウント、ワークフロー、データ処理モジュールを開発。",
        achievements: [
          "AI APIを統合し、動画および音声コンテンツ生成ワークフローを自動化。",
          "バックグラウンド並行処理とメディアキャッシュを最適化し、アプリ性能を向上。",
          "Gitを使用したチーム開発で品質保証とCI/CDパイプラインを運用。",
        ],
        skills: ["Python", "AI Integration", "Desktop App", "Workflow Automation", "Git"],
      },
      {
        title: "開発インターン",
        company: "CodeGym Danang",
        role: "Developer Intern",
        period: "2026年2月 - 2026年5月",
        location: "ダナン",
        desc: "Web機能開発・保守、RESTful API実装、MySQLデータベースのクエリ最適化を担当。",
        achievements: [
          "コードレビュー、単体テスト、バグ修正を継続的に実施。",
          "複雑なMySQLクエリを最適化し、API応答時間を短縮。",
          "Agile/Scrumスプリントに積極的に参画。",
        ],
        skills: ["Java", "Spring Boot", "MySQL", "RESTful API", "Agile/Scrum"],
      },
      {
        title: "バックエンド開発インターン",
        company: "マイナビ テクタス ベトナム 株式会社",
        role: "Backend Developer Intern",
        period: "2025年7月 - 2025年9月",
        location: "ダナン",
        desc: "FastAPIおよびSpring Bootを用いた堅牢なマイクロサービスバックエンドシステムの開発と保守。",
        achievements: [
          "日本市場の厳格な品質基準を満たすRESTfulエンドポイントを実装。",
          "Swagger/OpenAPIによる詳細なドキュメント作成。",
          "国際色豊かな開発現場で高品質なコード規約を徹底。",
        ],
        skills: ["FastAPI", "Python", "RESTful API", "Docker", "Japanese Standard"],
      },
      {
        title: "フルスタック開発インターン",
        company: "Techzen有限会社",
        role: "Full-Stack Developer Intern",
        period: "2024年8月 - 2025年7月",
        location: "ダナン",
        desc: "Java / Spring BootバックエンドとVue.js / React Nativeフロントエンドの開発を担当。",
        achievements: [
          "MVCパターンとJWT認証によるセキュアなデータ管理システムを構築。",
          "React Nativeによる快適なモバイルUIを設計。",
          "予定されていたすべての開発スプリントを完遂。",
        ],
        skills: ["Java", "Spring Boot", "Vue.js", "React Native", "JWT", "MySQL"],
      },
    ],
    certificationsTitle: "資格 & 受賞歴",
    certifications: [
      {
        title: "Tetote Hackathon 2024",
        period: "2024年5月",
        issuer: "Tetote Organization",
        desc: "48時間の過密スケジュール下で実用的かつ独創的なプロダクトを開発し、総合第4位に入賞。",
        badge: "Top 4 Hackathon",
      },
      {
        title: "ソフトウェアエンジニアインターン証明書",
        period: "2024年8月",
        issuer: "HackerRank",
        desc: "問題解決力、アルゴリズム設計、プログラミング実務能力を認証する世界基準の証明書。",
        badge: "Verified HackerRank",
      },
    ],
    projectsTitle: "主なプロジェクト",
    projectsSubtitle: "設計からデプロイまで自ら手掛けた代表的なプロダクト",
    projectsFilterAll: "すべて",
    projects: [
      {
        id: "fyn",
        name: "FYN - Find Your Network",
        image: "/images/FYN-Find-Your-Network-Live-Your-World.png",
        tech: ["Microservices", "Spring Boot", "FastAPI", "Flutter", "MinIO", "Docker", "REST API"],
        desc: "マイクロサービスアーキテクチャを採用した新世代ソーシャルネットワーキングアプリ。FlutterフロントエンドとMinIO分散メディアストレージを統合。",
        category: "fullstack",
        link: "https://github.com/luana2322/fyn-monolithic",
        highlights: [
          "ユーザー管理、タイムライン、メディアストレージをマイクロサービスとして分離。",
          "Flutterによる直感的なモバイルUIとSpring Boot & FastAPIの高速処理。",
          "Docker Composeによるコンテナ化で容易なクラウド展開。",
        ],
        featured: true,
      },
      {
        id: "social-purchase",
        name: "Social Media Purchase Behavior Analysis",
        image: "/images/social-media-purchase.png",
        tech: ["Python", "XGBoost", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "Jupyter"],
        desc: "eコマースとSNSデータを統合し、機械学習モデル（XGBoost）を用いて購買行動を予測するSaaSプラットフォーム。",
        category: "ai",
        link: "https://github.com/luana2322/Social-Media-Influence-on-Online-Purchase-Behavior-A-Data-Analyst",
        highlights: [
          "XGBoost分類モデルにより高い購買転換予測精度を達成。",
          "Next.jsとTailwind CSSによるリアルタイム分析ダッシュボード。",
          "特徴量抽出と推論を高速に行うバックエンドAPI。",
        ],
        featured: true,
      },
      {
        id: "etechplaza",
        name: "E-TechPlaza E-Commerce",
        image: "/images/e-techplaza.png",
        tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JavaScript", "HTML5/CSS3"],
        desc: "きめ細やかな権限管理、ショッピングカート、決済、管理者ダッシュボードを備えた総合オンライン販売管理システム。",
        category: "backend",
        link: "https://github.com/luana2322/E-TechPlaza",
        highlights: [
          "注文追跡、在庫管理、リアルタイム売上分析を完備。",
          "Spring Securityによる厳格な管理者/顧客アクセス制御。",
        ],
        featured: true,
      },
      {
        id: "hivehub",
        name: "HiveHub Community App",
        image: "/images/hivehub.png",
        tech: ["Java", "Spring Boot", "React Native", "MySQL", "JWT", "REST API"],
        desc: "地域コミュニティをつなぐモバイルアプリ。グループディスカッション、イベント情報共有、タイムライン機能を提供。",
        category: "mobile",
        link: "https://github.com/luana2322/HiveHub",
        highlights: [
          "React Nativeによるネイティブ感ある快適な操作性。",
          "プッシュ通知と同期タイムライン機能。",
        ],
        featured: false,
      },
      {
        id: "fitmeet",
        name: "FitMeet - Fitness Video Calls",
        image: "/images/fitmeet.png",
        tech: ["Java", "Spring Boot", "WebRTC", "Android XML", "Socket.io"],
        desc: "フィットネス指導に特化したオンラインビデオ通話アプリ。WebRTCプロトコルを活用した超低遅延リアルタイム映像配信。",
        category: "mobile",
        link: "https://github.com/luana2322/FitMeet",
        highlights: [
          "WebRTCによる200ms以下の超低遅延P2Pビデオストリーミング。",
          "ワークアウトタイマーとリアルタイムカウント機能。",
        ],
        featured: true,
      },
      {
        id: "usermanage",
        name: "User Management with MinIO",
        image: "/images/user-manage-spring-mongodb-minio.png",
        tech: ["Spring Boot", "MongoDB", "Flutter", "MinIO", "Docker"],
        desc: "MongoDBとS3互換MinIOオブジェクトストレージを組み合わせたユーザー情報＆大容量ファイル管理アプリケーション。",
        category: "fullstack",
        link: "https://github.com/luana2322/USER-MANAGE-SPRING-MONGODB-MINIO.git",
        highlights: [
          "MinIOによる大容量アセットのセキュアかつ高速なストレージ。",
          "MongoDBによる柔軟なドキュメントスキーマ設計。",
        ],
        featured: false,
      },
      {
        id: "snakegame",
        name: "Retro Classic Snake Game",
        image: "/images/snake game.png",
        tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Audio API"],
        desc: "HTML5 Canvasで構築された現代風クラシックスネークゲーム。滑らかな描画とスコアランキング機能を実装。",
        category: "fullstack",
        link: "https://github.com/luana2322/snakegame",
        demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
        highlights: [
          "純粋なHTML5 Canvasで安定した60fpsゲームループを実現。",
          "SNSで動画デモを公開し、多くの反響を獲得。",
        ],
        featured: false,
      },
    ],
    contactTitle: "お問い合わせ",
    contactSubtitle: "プロジェクトのご相談、採用のご連絡、技術ディスカッションなど、いつでもお気軽にご連絡ください！",
    contactCardTitle: "連絡先情報",
    contactForm: {
      name: "お名前",
      namePlaceholder: "例：山田 太郎",
      email: "メールアドレス",
      emailPlaceholder: "例：yamada@example.com",
      subject: "件名",
      subjectPlaceholder: "例：新規プロジェクトの協業について",
      message: "メッセージ内容",
      messagePlaceholder: "詳細なご要望やご相談内容をご記入ください...",
      send: "メッセージを送信",
      sending: "送信中...",
      sentSuccess: "メッセージが送信されました！追ってご連絡いたします。",
      copied: "クリップボードにコピーしました！",
    },
    footer: "© 2026 タイ・グエン・バオ・ルアン。無断転載を禁じます。",
    nav: {
      about: "自己紹介",
      skills: "スキル",
      experience: "経歴",
      projects: "プロジェクト",
      contact: "連絡先",
    },
    contact: {
      email: "thailuanpy1234@gmail.com",
      phone: "+84 972 031 655",
      github: "https://github.com/luana2322",
      linkedin: "https://linkedin.com/in/luana2322",
      zalo: "https://zalo.me/0972031655",
      telegram: "https://t.me/luana2322",
    },
    terminal: {
      welcome: "バオ・ルアンのターミナルへようこそ！'help'と入力するとコマンド一覧が表示されます。",
      helpText: "使用可能コマンド: about, skills, projects, experience, contact, clear, sudo",
    },
  },
};

export const credlyBadgeIds = [
  "4074c3bb-9c01-4623-9578-9c0542f8652d",
  "0a8cd209-0f3f-4bdf-a598-a563dc36b99f",
  "657d5b06-0573-4c50-ae7a-295abc486ea6",
  "11f987ba-0243-4f38-99bc-cd938d3da17f",
  "0ba890de-f433-4cc8-a212-9ed6223ab23b",
];
