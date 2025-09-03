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
          title: "Techzenでのインターン開発者",
          period: "2024年8月 - 2025年7月",
          desc: "JavaとSpring Bootを使用したアプリケーション開発。",
        },
        {
          title: "インターン開発者 [Tên công ty này]",
          period: "2025年6月 - 2025年9月",
          desc: "ウェブアプリケーションの開発と保守、React Nativeを使用したプロジェクトに貢献。",
        },
      ],
      certifications: [
        {
          title: "Teso Hackathon 2024",
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
          title: "Intern Developer at Techzen",
          period: "Aug 2024 - Jul 2025",
          desc: "Application development using Java and Spring Boot.",
        },
        {
          title: "Intern Developer at [Tên công ty này]",
          period: "Jun 2025 - Sep 2025",
          desc: "Contributed to web application development and maintenance, worked on projects using React Native.",
        },
      ],
      certifications: [
        {
          title: "Teso Hackathon 2024",
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
    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-b from-blue-100 to-purple-100 text-gray-800"} min-h-screen p-8`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-300">{title}</h1>
        <div className="flex space-x-6">
          <select value={lang} onChange={changeLanguage} className="bg-white dark:bg-gray-700 p-2 rounded">
            <option value="ja">日本語</option>
            <option value="en">English</option>
          </select>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#skills" className="hover:text-purple-600">Skills</a>
          <a href="#education" className="hover:text-purple-600">Education</a>
          <a href="#experience" className="hover:text-purple-600">Experience</a>
          <a href="#projects" className="hover:text-purple-600">Projects</a>
          <button onClick={toggleDarkMode} className="hover:text-purple-600">{darkMode ? "Light Mode" : "Dark Mode"}</button>
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
        <Image src="/images/profile.jpg" alt={title} width={150} height={150} className="rounded-full mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-purple-800 dark:text-purple-300 mb-4">{title}</h1>
        <p className="text-2xl mb-2">Male, 21 (Born: Jan 1, 2004)</p>
        <p className="text-xl mb-6">{role}</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:[your-email@example.com]" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition">Email</a>
          <a href="tel:[your-phone]" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition">Phone</a>
          <a href="https://github.com/luana2322" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:scale-105 transition">GitHub</a>
        </div>
        <p className="max-w-2xl mx-auto">{about}</p>
      </motion.section>

      {/* Skills */}
      <motion.section 
        id="skills"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-400 mb-6 text-center">{skillsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><FaJava className="mr-2" /> {skills.lang}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {skills.items[0].map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><FaDocker className="mr-2" /> {skills.tools}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {skills.items[1].map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><FaDatabase className="mr-2" /> {skills.other}</h3>
            <ul className="list-disc pl-5 space-y-2">
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
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-400 mb-6 text-center">{educationTitle}</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <p>{education}</p>
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
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-400 mb-6 text-center">{experienceTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              {experience.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.title}</strong><br />
                  {exp.period}<br />
                  {exp.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <strong>{cert.title}</strong><br />
                  {cert.period}<br />
                  {cert.desc}
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
        <h2 className="text-4xl font-semibold text-purple-700 dark:text-purple-400 mb-6 text-center">{projectsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded"> {/* Container cố định kích thước 48 (192px) */}
                <Image 
                  src={`/images/${project.name.toLowerCase()}.png`} 
                  alt={project.name} 
                  fill // Sử dụng fill để lấp đầy container
                  className="object-contain" // Giữ tỷ lệ, không cắt ảnh
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-2">Tech: {project.tech}</p>
              <p>{project.desc}</p>
              <div className="mt-auto space-x-4">
                <a href={project.link} className="text-blue-500 hover:underline">GitHub</a>
                {project.demo && <a href={project.demo} className="text-blue-500 hover:underline">Demo</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-8 border-t">
        <p>{footer}</p>
      </footer>
    </main>
  );
}