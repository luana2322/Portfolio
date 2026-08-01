export interface Project {
  name: string;
  image: string;
  tech: string;
  desc: string;
  link: string;
  demo?: string;
}

export interface Certification {
  title: string;
  period: string;
  desc: string;
}

export interface Experience {
  title: string;
  period: string;
  desc: string;
}

export interface Skills {
  lang: string;
  tools: string;
  other: string;
  items: string[][];
}

export interface LangContent {
  title: string;
  role: string;
  about: string;
  ageGender: string;
  skillsTitle: string;
  skills: Skills;
  educationTitle: string;
  education: string;
  experienceTitle: string;
  experience: Experience[];
  certifications: Certification[];
  projectsTitle: string;
  projects: Project[];
  footer: string;
  nav: {
    about: string;
    skills: string;
    education: string;
    experience: string;
    projects: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
  };
}

export const content: Record<string, LangContent> = {
  ja: {
    title: "タイ・グエン・バオ・ルアン",
    role: "ソフトウェアエンジニア",
    about: "出身地：ベトナム、ダナン市、ホアハイ地区、グー・ハンソン区。現在の住所：ダナン市、グー・ハンソン区、ホアハイ。言語：日本語、英語。情報技術を専攻する学生で、Java、Spring Boot、React Nativeなどの技術を使った実践的なプロジェクトに取り組んでいます。",
    ageGender: "男性, 22歳 (2004年1月1日生)",
    skillsTitle: "スキル",
    skills: {
      lang: "プログラミング言語",
      tools: "ツール & フレームワーク",
      other: "その他",
      items: [
        ["Java", "Python", "JavaScript", "React Native", "Vue.js", "Spring Boot", "FastAPI"],
        ["Git/GitHub", "Postman", "Visual Studio Code", "IntelliJ", "Spring Tool Suite", "Docker", "PyCharm"],
        ["MongoDB/MySQL", "MVCパターン", "Agile/Scrum", "OOP", "RESTful API", "WebRTC"],
      ],
    },
    educationTitle: "学歴",
    education: "情報技術学士、ダナン工科大学、期間: 2022年10月 - 2027年6月（予定）",
    experienceTitle: "経験 & 資格",
    experience: [
      {
        title: "Techzen有限会社 (フルスタック開発インターン)",
        period: "2024年8月 - 2025年7月",
        desc: "JavaとSpring Bootを使用したアプリケーション開発、Vue.JSを使用したフロントエンド開発にも参加。",
      },
      {
        title: "マイナビ テクタス ベトナム 株式会社 (バックエンド開発インターン)",
        period: "2025年7月 - 2025年9月",
        desc: "バックエンドシステムの開発と保守、FastAPIおよびRESTful APIを使用したプロジェクトに貢献。",
      },
      {
        title: "CodeGym Danang (開発インターン)",
        period: "2026年2月 - 2026年5月",
        desc: "Webアプリケーション機能の開発・保守、RESTful APIの実装、MySQLデータベースの最適化、Gitを使用したチーム協力を担当。コードレビュー、テスト、デバッグ、ソフトウェア保守にも参加。",
      },
      {
        title: "GTM MEDIA (ソフトウェア開発者 - AI動画制作ツール)",
        period: "2026年5月 - 現在",
        desc: "アカウント、ワークフロー、データ管理モジュールを開発し、AI動画制作のためのデスクトップソフトウェアを構築。AI APIの統合、コンテンツ生成ワークフローの自動化、アプリケーションパフォーマンスの最適化を実施し、Gitを使用したチーム協力でソフトウェアの品質と安定性を確保。",
      },
    ],
    certifications: [
      {
        title: "Tetote Hackathon 2024",
        period: "2024年5月",
        desc: "成績: 4位",
      },
      {
        title: "ソフトウェアエンジニアインターン証明書 (HackerRank)",
        period: "2024年8月",
        desc: "",
      },
    ],
    projectsTitle: "プロジェクト",
    projects: [
      {
        name: "E-TechPlaza",
        image: "/images/e-techplaza.png",
        tech: "Java/Spring Boot, HTML/CSS/JavaScript/Thymeleaf",
        desc: "オンライン販売管理システム。",
        link: "https://github.com/luana2322/E-TechPlaza",
      },
      {
        name: "HiveHub",
        image: "/images/hivehub.png",
        tech: "Java/Spring Boot, React Native, MySQL",
        desc: "コミュニティ接続アプリケーション。",
        link: "https://github.com/luana2322/HiveHub",
      },
      {
        name: "FitMeet",
        image: "/images/fitmeet.png",
        tech: "Java/Spring Boot, Java/XML, WebRTC",
        desc: "フィットネスに特化したオンラインミーティングアプリ。",
        link: "https://github.com/luana2322/FitMeet",
      },
      {
        name: "Snake Game",
        image: "/images/snake game.png",
        tech: "JavaScript/HTML/CSS",
        desc: "シンプルなスネークゲーム。Facebookで公開されたデモ動画あり。",
        link: "https://github.com/luana2322/snakegame",
        demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
      },
      {
        name: "USER-MANAGE-SPRING-MONGODB-MINIO",
        image: "/images/user-manage-spring-mongodb-minio.png",
        tech: "Spring Boot, MongoDB, Flutter, MinIO",
        desc: "MongoDBを使用したCRUD管理アプリで、Spring Bootバックエンド、Flutterフロントエンド、MinIOによるファイルストレージを実装。",
        link: "https://github.com/luana2322/USER-MANAGE-SPRING-MONGODB-MINIO.git",
      },
      {
        name: "FYN-Find-Your-Network-Live-Your-World",
        image: "/images/FYN-Find-Your-Network-Live-Your-World.png",
        tech: "Microservices, Spring Boot, FastAPI, Flutter, MinIO, Docker, REST API",
        desc: "マイクロサービスを用いたソーシャルネットワーキングアプリケーション。",
        link: "https://github.com/luana2322/fyn-monolithic",
      },
      {
        name: "Social Media Purchase Behavior Analysis",
        image: "/images/social-media-purchase.png",
        tech: "Python/Jupyter, Spring Boot, Next.js, Docker, PostgreSQL, XGBoost",
        desc: "SaaSプラットフォーム。MLモデル（XGBoost）を使用してeコマースとソーシャルメディアデータから購入行動を予測。",
        link: "https://github.com/luana2322/Social-Media-Influence-on-Online-Purchase-Behavior-A-Data-Analyst",
      },
    ],
    footer: "© 2025 タイ・グエン・バオ・ルアン。無断転載を禁じます。",
    nav: {
      about: "概要",
      skills: "スキル",
      education: "学歴",
      experience: "経験",
      projects: "プロジェクト",
    },
    contact: {
      email: "メール",
      phone: "電話",
      github: "GitHub",
    },
  },
  en: {
    title: "Thai Nguyen Bao Luan",
    role: "Software Engineer",
    about: "Born in Hoa Hai Ward, Ngu Hanh Son District, Da Nang, Vietnam. Current address: Hoa Hai, Ngu Hanh Son, Da Nang. Languages: Japanese, English. A dedicated IT student passionate about software development, with hands-on experience in Java, Spring Boot, React Native, and modern technologies.",
    ageGender: "Male, 22 (Born: Jan 1, 2004)",
    skillsTitle: "Skills",
    skills: {
      lang: "Programming Languages",
      tools: "Tools & Frameworks",
      other: "Others",
      items: [
        ["Java", "Python", "JavaScript", "React Native", "Vue.js", "Spring Boot", "FastAPI"],
        ["Git/GitHub", "Postman", "Visual Studio Code", "IntelliJ", "Spring Tool Suite", "Docker", "PyCharm"],
        ["HTML/CSS/JavaScript", "PHP/MySQL", "MVC Pattern", "Agile/Scrum", "OOP", "RESTful API", "WebRTC"],
      ],
    },
    educationTitle: "Education",
    education: "Bachelor of Information Technology, Da Nang University of Technology, Duration: Oct 2022 - Jun 2027 (Expected)",
    experienceTitle: "Experience & Certifications",
    experience: [
      {
        title: "Techzen Co., Ltd. (Full-Stack Developer Intern)",
        period: "Aug 2024 - Jul 2025",
        desc: "Developed applications using Java and Spring Boot, also contributed to frontend development with React Native.",
      },
      {
        title: "Mynavi Tectus Vietnam Co., Ltd. (Backend Developer Intern)",
        period: "Jul 2025 - Sep 2025",
        desc: "Contributed to backend system development and maintenance, working on projects using Spring Boot and RESTful APIs.",
      },
      {
        title: "CodeGym Danang (Developer Intern)",
        period: "Feb 2026 - May 2026",
        desc: "Developed and maintained web application features, implemented RESTful APIs, optimized MySQL databases, and collaborated with the team using Git. Participated in code reviews, testing, debugging, and software maintenance.",
      },
      {
        title: "GTM MEDIA (Software Developer - AI Video Production Tool)",
        period: "May 2026 - Present",
        desc: "Developed desktop software for AI-powered video production, building account, workflow, and data management modules. Integrated AI APIs, automated content generation workflows, optimized application performance, and collaborated with the team using Git to ensure software quality and stability.",
      },
    ],
    certifications: [
      {
        title: "Tetote Hackathon 2024",
        period: "May 2024",
        desc: "Rank: 4th Place",
      },
      {
        title: "Software Engineer Intern Certificate (HackerRank)",
        period: "Aug 2024",
        desc: "",
      },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        name: "E-TechPlaza",
        image: "/images/e-techplaza.png",
        tech: "Java/Spring Boot, HTML/CSS/JavaScript/Thymeleaf",
        desc: "Online sales management system.",
        link: "https://github.com/luana2322/E-TechPlaza",
      },
      {
        name: "HiveHub",
        image: "/images/hivehub.png",
        tech: "Java/Spring Boot, React Native, MySQL",
        desc: "Community connection application.",
        link: "https://github.com/luana2322/HiveHub",
      },
      {
        name: "FitMeet",
        image: "/images/fitmeet.png",
        tech: "Java/Spring Boot, Java/XML, WebRTC",
        desc: "Fitness-focused online meeting app.",
        link: "https://github.com/luana2322/FitMeet",
      },
      {
        name: "Snake Game",
        image: "/images/snake game.png",
        tech: "JavaScript/HTML/CSS",
        desc: "A simple snake game with a demo video published on Facebook.",
        link: "https://github.com/luana2322/snakegame",
        demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
      },
      {
        name: "USER-MANAGE-SPRING-MONGODB-MINIO",
        image: "/images/user-manage-spring-mongodb-minio.png",
        tech: "Spring Boot, MongoDB, Flutter, MinIO",
        desc: "CRUD management app with Spring Boot backend, Flutter frontend, and MinIO file storage.",
        link: "https://github.com/luana2322/USER-MANAGE-SPRING-MONGODB-MINIO.git",
      },
      {
        name: "FYN-Find-Your-Network-Live-Your-World",
        image: "/images/FYN-Find-Your-Network-Live-Your-World.png",
        tech: "Microservices, Spring Boot, FastAPI, Flutter, MinIO, Docker, REST API",
        desc: "A social networking application built with microservices architecture.",
        link: "https://github.com/luana2322/fyn-monolithic",
      },
      {
        name: "Social Media Purchase Behavior Analysis",
        image: "/images/social-media-purchase.png",
        tech: "Python/Jupyter, Spring Boot, Next.js, Docker, PostgreSQL, XGBoost",
        desc: "SaaS platform predicting online purchase behavior using ML models (XGBoost) trained on fused e-commerce and social media data.",
        link: "https://github.com/luana2322/Social-Media-Influence-on-Online-Purchase-Behavior-A-Data-Analyst",
      },
    ],
    footer: "© 2025 Thai Nguyen Bao Luan. All rights reserved.",
    nav: {
      about: "About",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
    },
    contact: {
      email: "Email",
      phone: "Phone",
      github: "GitHub",
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
