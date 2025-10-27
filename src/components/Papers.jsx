import React from "react";

/**
 * 📚 研究论文模块
 * - 卡片高度统一（固定大小）
 * - 超出内容显示“...”
 * - 鼠标悬停自动展开显示完整内容
 */
export default function Papers({ items, onOpen }) {
  return (
    <section className="mb-8">
      {/* 模块标题 */}
      <h2 className="text-xl font-semibold mb-4 text-white">研究论文</h2>

      {/* 📚 网格布局：每行三列（自适应） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((paper, i) => (
          <div
            key={i}
            onClick={() => onOpen({ type: "paper", data: paper })}
            className="group p-5 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220]
                       border border-gray-800 cursor-pointer transition-all duration-500
                       hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(14,165,255,0.25)]
                       overflow-hidden relative"
          >
            {/* 标题 */}
            <div
              className="font-medium text-white text-base mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
            >
              {paper.title}
            </div>

            {/* 作者 */}
            {paper.authors && (
              <div
                className="text-gray-400 text-sm mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
              >
                {paper.authors.join("，")}
              </div>
            )}

            {/* 简介 */}
            <p
              className="text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
            >
              {paper.desc}
            </p>

            {/* 📄 底部年份 */}
            <div className="absolute bottom-3 right-4 text-xs text-gray-500">
              {paper.year}
            </div>

            {/* 🧭 悬停提示（视觉暗示） */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-3 text-sm text-blue-400">
              点击查看详情
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
