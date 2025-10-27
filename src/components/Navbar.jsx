import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar({ siteTitle, email }) {
  const { i18n } = useTranslation();

  // 切换语言函数
  const switchLang = () => {
    const newLang = i18n.language === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 网站标题 */}
        <div className="text-white font-medium tracking-wide">{siteTitle}</div>

        {/* 右侧区域：图标 + 语言切换 */}
        <div className="flex items-center gap-4 text-gray-400">
          {/* 邮件 */}
          <a
            href={"mailto:xiangqi1202@163.com?subject=来自个人网站的联系&body=您好，我想进一步了解你的信息。"}
            className="hover:text-blue-400 transition-colors"
            title="发送邮件"
          >
            <FaEnvelope size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/wxiangqi1202-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/%E7%A5%A5%E7%A5%BA-%E7%8E%8B-593615371/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

        </div>
      </div>
    </nav>
  );
}
