import React from "react";

/**
 * 🧠 关于我模块
 * - 页面中显示所有基础介绍段落
 * - 点击后在弹窗中显示更详细的个人信息
 */
export default function About({ data, onOpen }) {
  if (!data || !data.paragraphs) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">
        关于我
      </h2>

      <div
        onClick={() =>
          onOpen({
            type: "about",
            data: {
              paragraphs: data.paragraphs,
              extra:
                "我在科研与工程结合的领域持续探索，专注于将机器学习方法用于地震预测、风险分析与物联网监测系统。未来希望拓展国际化科研合作与项目管理体系。"
            }
          })
        }
        className="p-5 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220]
                   border border-gray-800 cursor-pointer hover:scale-[1.02]
                   hover:shadow-[0_0_25px_rgba(14,165,255,0.15)]
                   transition-all duration-300"
      >
        {data.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-300 text-sm mb-2 leading-relaxed">
            {p}
          </p>
        ))}

        
      </div>
    </section>
  );
}
