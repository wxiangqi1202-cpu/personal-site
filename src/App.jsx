import React, { useState } from "react";
import DATA from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg";
import PhotoGallery from "./components/PhotoGallery";
import Modal from "./components/Modal";
import Papers from "./components/Papers";
import MessageBoard from "./components/MessageBoard";
import WorkExperience from "./components/WorkExperience";


/**
 * 🌟 主应用组件
 */
export default function App() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="min-h-screen text-gray-200 relative">
      {/* 背景粒子 */}
      <ParticlesBg />

      {/* 导航 */}
      <Navbar siteTitle={DATA.siteTitle} email={DATA.hero.email} />

      {/* 主体部分 */}
      <main className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        <Hero data={DATA.hero} />

        {/* 模块 */}
        <About data={DATA.about} onOpen={setActiveItem} />
        <Skills items={DATA.skills} onOpen={setActiveItem} />
        <WorkExperience items={DATA.work} onOpen={setActiveItem} />
        <Projects items={DATA.projects} onOpen={setActiveItem} />
        <Education items={DATA.education} onOpen={setActiveItem} />
        <Papers items={DATA.papers} onOpen={setActiveItem} />
        <Interests items={DATA.interests} onOpen={setActiveItem} />
        <PhotoGallery />
        <Contact
          email={DATA.hero.email}
          note={DATA.contactNote}
          onOpen={setActiveItem}
        />
        <MessageBoard messages={DATA.messages} />

        <div className="h-24" />
      </main>

      {/* 页脚 */}
      <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-800 relative z-10">
        © {new Date().getFullYear()} 王祥祺 — 数据分析与机器学习研究员
      </footer>

      {/* 通用弹窗 */}
      <Modal
        show={!!activeItem}
        onClose={() => setActiveItem(null)}
        title={
          activeItem?.data?.title ||
          activeItem?.data?.school ||
          activeItem?.data?.name ||
          "详情"
        }
      >
        <div className="space-y-4 text-gray-300 leading-relaxed">
          {/* === 工作经历详情 === */}
          {activeItem?.type === "work" && (
            <>
              <p>
                <strong>公司：</strong> {activeItem.data.company}
              </p>
              <p>
                <strong>职位：</strong> {activeItem.data.position}
              </p>
              <p className="text-sm text-gray-400">
                <strong>时间：</strong> {activeItem.data.period}
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {activeItem.data.details}
              </p>
              {activeItem.data.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeItem.data.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-900/20 border border-blue-700/40 rounded text-blue-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}

          {/* === 项目 === */}
          {activeItem?.type === "project" && (
            <>
              <p>{activeItem.data.desc}</p>
              {activeItem.data.details && (
                <p className="text-gray-400 text-sm">
                  <strong>详细说明：</strong> {activeItem.data.details}
                </p>
              )}
              {activeItem.data.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeItem.data.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-900/20 border border-blue-700/40 rounded text-blue-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              {activeItem.data.period && (
                <p className="text-sm text-gray-500 mt-2">
                  时间：{activeItem.data.period}
                </p>
              )}
            </>
          )}
          {/* === 教育详情 === */}
          {activeItem?.type === "education" && (
            <>
              {/* 主说明 */}
              <p className="text-gray-300 leading-relaxed">{activeItem.data.details}</p>

              {/* 附加说明 */}
              {activeItem.data.extra && (
                <p className="text-gray-400 text-sm mt-2">
                  <span className="text-blue-400 font-semibold">📘 详细说明：</span>{" "}
                  {activeItem.data.extra}
                </p>
              )}

              {/* 时间 */}
              <p className="text-sm text-gray-500 mt-3">
                <strong>学习时间：</strong> {activeItem.data.period}
              </p>
            </>
          )}

          {/* === 技能 === */}
          {activeItem?.type === "skill" && (
            <>
              <p>
                <strong>技能名称：</strong> {activeItem.data.name}
              </p>
              {activeItem.data.desc && (
                <p className="text-gray-400 text-sm">
                  <strong>说明：</strong> {activeItem.data.desc}
                </p>
              )}
            </>
          )}

          {/* === 兴趣 === */}
          {activeItem?.type === "interest" && (
            <>
              <p>
                <strong>兴趣方向：</strong>{" "}
                {activeItem.data.name || activeItem.data}
              </p>
              {activeItem.data.desc && (
                <p className="text-gray-400 text-sm">
                  <strong>深入探索：</strong> {activeItem.data.desc}
                </p>
              )}
            </>
          )}

          {/* === 关于我 === */}
          {activeItem?.type === "about" && (
            <div className="space-y-3">
              {activeItem.data.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed">
                  {p}
            
                </p>
              
              ))}
            </div>
          )}
          {/* === 研究论文 === */}
          {activeItem?.type === "paper" && (
            <>
             {/* 作者与年份信息 */}
            {activeItem.data.authors && (
              <p className="text-gray-400 text-sm mb-2">
                <strong>作者：</strong> {activeItem.data.authors.join("，")}
              </p>
              )}
            {activeItem.data.year && (
              <p className="text-gray-500 text-sm mb-3">
              <strong>年份：</strong> {activeItem.data.year}
              </p>
             )}

               {/* 详细内容 */}
              <p className="text-gray-300 leading-relaxed">{activeItem.data.details}</p>

               {/* PDF 链接 */}
              {activeItem.data.pdf && (
                <a
                  href={activeItem.data.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-400 hover:underline"
                >
                  📄 点击打开 PDF 原文
                </a>
              )}
           </>
          )}

          {/* === 联系方式 === */}
          {activeItem?.type === "contact" && (
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>邮箱：</strong>{" "}
                <a
                  href={`mailto:${activeItem.data.email}`}
                  className="text-blue-400 hover:underline"
                >
                  {activeItem.data.email}
                </a>
              </p>
              <p>{activeItem.data.note}</p>
              <p className="text-gray-400 text-sm">
                微信：SCI0000001
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
