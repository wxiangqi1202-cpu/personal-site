import React from "react";

/**
 * 🧑‍💼 工作经历模块（卡片展示 + 标签）
 * - 每个经历卡片底部显示 tags（如项目管理 / Revit 等）
 * - 点击后弹窗展示详情信息
 */
export default function WorkExperience({ items = [], onOpen }) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <section className="mb-8 text-gray-400 text-sm">
        <h2 className="text-xl font-semibold mb-3">工作经历</h2>
        <p>暂无工作经历记录。</p>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">工作经历</h2>

      {/* 卡片布局 */}
      <div className="grid grid-cols-1 gap-4">
        {items.map((job, i) => (
          <div
            key={i}
            onClick={() => onOpen({ type: "work", data: job })}
            className="p-5 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220]
                       border border-gray-800 cursor-pointer hover:scale-[1.02]
                       hover:shadow-[0_0_25px_rgba(14,165,255,0.15)] transition-all duration-300"
          >
            {/* 公司与时间 */}
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-white">{job.company}</div>
              <div className="text-sm text-gray-400">{job.period}</div>
            </div>

            {/* 职位 */}
            <p className="text-gray-300 text-sm font-semibold mb-1">
              {job.position}
            </p>

            {/* 简介 */}
            <p className="text-gray-400 text-sm mb-2 line-clamp-2">
              {job.summary}
            </p>

            {/* ✅ 标签区（点击前也显示） */}
            {job.tags && job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {job.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded bg-blue-900/20 border border-blue-700/40 text-blue-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
