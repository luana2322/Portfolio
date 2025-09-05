"use client"; // Đảm bảo file chạy như client-side component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaGitAlt, FaDocker, FaDatabase } from "react-icons/fa"; // Icons cho skills
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("ja"); // Giá trị mặc định an toàn
  const [isClient, setIsClient] = useState(false); // Theo dõi hydration hoàn tất

  useEffect(() => {
    setIsClient(true); // Đánh dấu đã chạy trên client
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");
    if (savedTheme === "dark") setDarkMode(true);
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const content = {
    ja: {
      title: "タイ・グエン・バオ・ルアン",
      role: "ソフトウェアエンジニアインターン",
      about: "出身地：ベトナム、ダナン市、ホアハイ地区、グー・ハンソン区。現在の住所：ダナン市、グー・ハンソン区、ホアハイ。言語：日本語、英語。情報技術を専攻する学生で、Java、Spring Boot、React Nativeなどの技術を使った実践的なプロジェクトに取り組んでいます。",
      skillsTitle: "スキル",
      skills: {
        lang: "プログラミング言語",
        tools: "ツール & フレームワーク",
        other: "その他",
        items: [
          ["Java", "Python", "JavaScript", "React Native", "Vue.js", "Spring Boot", "FastAPI"],
          ["Git/GitHub", "Postman", "Visual Studio Code", "IntelliJ", "Spring Tool Suite", "Docker", "PyCharm"],
          ["HTML/CSS/JavaScript", "PHP/MySQL", "MVCパターン", "Agile/Scrum", "OOP", "RESTful API", "WebRTC"],
        ],
      },
      educationTitle: "学歴",
      education: "情報技術学士、ダナン工科大学、期間: 2022年10月 - 2027年6月（予定）",
      experienceTitle: "経験 & 資格",
      experience: [
        {
          title: "Techzen有限会社 (フルスタック開発インターン)",
          period: "2024年8月 - 2025年7月",
          desc: "JavaとSpring Bootを使用したアプリケーション開発、React Nativeを使用したフロントエンド開発にも参加。",
        },
        {
          title: "マイナビ テクタス ベトナム 株式会社 (バックエンド開発インターン)",
          period: "2025年7月 - 2025年9月",
          desc: "バックエンドシステムの開発と保守、Spring BootおよびRESTful APIを使用したプロジェクトに貢献。",
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
          tech: "Java/Spring Boot, HTML/CSS/JavaScript/Thymeleaf",
          desc: "オンライン販売管理システム。",
          link: "https://github.com/luana2322/E-TechPlaza",
        },
        {
          name: "HiveHub",
          tech: "Java/Spring Boot, React Native, MySQL",
          desc: "コミュニティ接続アプリケーション。",
          link: "https://github.com/luana2322/HiveHub",
        },
        {
          name: "FitMeet",
          tech: "Java/Spring Boot, Java/XML, WebRTC",
          desc: "フィットネスに特化したオンラインミーティングアプリ。",
          link: "https://github.com/luana2322/FitMeet",
        },
        {
          name: "Snake Game",
          tech: "JavaScript/HTML/CSS (推定)",
          desc: "シンプルなスネークゲーム。Facebookで公開されたデモ動画あり。",
          link: "https://github.com/luana2322/snakegame",
          demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
        },
      ],
      footer: "© 2025 タイ・グエン・バオ・ルアン。無断転載を禁じます。",
    },
    en: {
      title: "Thai Nguyen Bao Luan",
      role: "Software Engineer Intern",
      about: "Born in Hoa Hai Ward, Ngu Hanh Son District, Da Nang, Vietnam. Current address: Hoa Hai, Ngu Hanh Son, Da Nang. Languages: Japanese, English. A dedicated IT student passionate about software development, with hands-on experience in Java, Spring Boot, React Native, and modern technologies.",
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
          tech: "Java/Spring Boot, HTML/CSS/JavaScript/Thymeleaf",
          desc: "Online sales management system.",
          link: "https://github.com/luana2322/E-TechPlaza",
        },
        {
          name: "HiveHub",
          tech: "Java/Spring Boot, React Native, MySQL",
          desc: "Community connection application.",
          link: "https://github.com/luana2322/HiveHub",
        },
        {
          name: "FitMeet",
          tech: "Java/Spring Boot, Java/XML, WebRTC",
          desc: "Fitness-focused online meeting app.",
          link: "https://github.com/luana2322/FitMeet",
        },
        {
          name: "Snake Game",
          tech: "JavaScript/HTML/CSS (Estimated)",
          desc: "A simple snake game with a demo video published on Facebook.",
          link: "https://github.com/luana2322/snakegame",
          demo: "https://www.facebook.com/100080772817243/videos/898712848208298/",
        },
      ],
      footer: "© 2025 Thai Nguyen Bao Luan. All rights reserved.",
    },
  };

  const { title, role, about, skillsTitle, skills, educationTitle, education, experienceTitle, experience, certifications, projectsTitle, projects, footer } = content[lang as keyof typeof content];

  // Chỉ render nội dung khi đã hydrate trên client
  if (!isClient) {
    return null; // Tránh render ban đầu từ server
  }

  return (
    <main className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-b from-blue-100 to-purple-100 text-gray-800"} min-h-screen p-8 transition-colors duration-300`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 ${darkMode ? "bg-gray-800/90 text-gray-100" : "bg-white/80 text-gray-800"} backdrop-blur-md p-4 flex justify-between items-center shadow-md transition-colors duration-300`}>
        <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-300">{title}</h1>
        <div className="flex space-x-6 items-center">
          <select 
            value={lang} 
            onChange={changeLanguage} 
            className={`${darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"} p-2 rounded border ${darkMode ? "border-gray-600" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
          </select>
          <a href="#about" className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">Skills</a>
          <a href="#education" className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">Education</a>
          <a href="#experience" className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-purple-500 dark:hover:text-purple-300 transition-colors">Projects</a>
          <button 
            onClick={toggleDarkMode} 
            className={`${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-800"} px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-colors`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <Image src="/images/profile.png" alt={title} width={150} height={150} className="rounded-full mx-auto mb-4 border-4 border-purple-500 dark:border-purple-300" />
        <h1 className="text-5xl font-bold text-purple-700 dark:text-purple-300 mb-4">{title}</h1>
        <p className="text-2xl mb-2 text-gray-700 dark:text-gray-200">Male, 21 (Born: Jan 1, 2004)</p>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">{role}</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:[your-email@example.com]" className={`${darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-600"} text-white px-6 py-3 rounded-lg hover:scale-105 transition transform`}>Email</a>
          <a href="tel:[your-phone]" className={`${darkMode ? "bg-green-600 hover:bg-green-500" : "bg-green-500 hover:bg-green-600"} text-white px-6 py-3 rounded-lg hover:scale-105 transition transform`}>Phone</a>
          <a href="https://github.com/luana2322" className={`${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-800 hover:bg-gray-700"} text-white px-6 py-3 rounded-lg hover:scale-105 transition transform`}>GitHub</a>
        </div>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">{about}</p>
      </motion.section>

      {/* Skills */}
      <motion.section 
        id="skills"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-300 mb-6 text-center">{skillsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg hover:scale-105 transition border`}>
            <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-600 dark:text-purple-300"><FaJava className="mr-2 text-purple-500 dark:text-purple-300" /> {skills.lang}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              {skills.items[0].map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg hover:scale-105 transition border`}>
            <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-600 dark:text-purple-300"><FaDocker className="mr-2 text-purple-500 dark:text-purple-300" /> {skills.tools}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              {skills.items[1].map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg hover:scale-105 transition border`}>
            <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-600 dark:text-purple-300"><FaDatabase className="mr-2 text-purple-500 dark:text-purple-300" /> {skills.other}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              {skills.items[2].map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section 
        id="education"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-300 mb-6 text-center">{educationTitle}</h2>
        <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg border`}>
          <p className="text-gray-600 dark:text-gray-300">{education}</p>
        </div>
      </motion.section>

      {/* Experience & Certifications */}
      <motion.section 
        id="experience"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-300 mb-6 text-center">{experienceTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg border`}>
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-300">Experience</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {experience.map((exp, index) => (
                <li key={index}>
                  <strong className="text-gray-800 dark:text-gray-100 font-semibold">{exp.title}</strong><br />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span><br />
                  {exp.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg border`}>
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-300">Certifications</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <strong className="text-gray-800 dark:text-gray-100 font-semibold">{cert.title}</strong><br />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{cert.period}</span><br />
                  {cert.desc && <span className="text-gray-600 dark:text-gray-300">{cert.desc}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section 
        id="projects"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-300 mb-6 text-center">{projectsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} p-6 rounded-lg shadow-lg flex flex-col border`}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
                <Image 
                  src={`/images/${project.name.toLowerCase()}.png`} 
                  alt={project.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 font-semibold">{project.name}</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">Tech: {project.tech}</p>
              <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
              <div className="mt-auto space-x-4">
                <a href={project.link} className="text-blue-500 dark:text-blue-400 hover:underline">GitHub</a>
                {project.demo && <a href={project.demo} className="text-blue-500 dark:text-blue-400 hover:underline">Demo</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={`text-center py-8 border-t ${darkMode ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"}`}>
        <p>{footer}</p>
      </footer>
    </main>
  );
}