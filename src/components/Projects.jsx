import React from "react";

/**
 * 项目与科研经历模块
 * 点击单个项目卡片时弹出对应项目的详细信息
 */
export default function Projects({ items, onOpen }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">项目与科研经历</h2>
      <div className="grid grid-cols-1 gap-4">
        {items.map((p, i) => (
          <div
            key={i}
            onClick={() => onOpen({ type: "project", data: p })} // ✅ 点击单卡片传递单个项目
            className="p-5 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220]
             border border-gray-800 cursor-pointer hover:scale-[1.02]
             hover:shadow-[0_0_25px_rgba(14,165,255,0.25)] transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-white">{p.title}</h3>
              <div className="text-sm text-gray-400">{p.period}</div>
            </div>
            <p className="text-gray-300 mt-2 line-clamp-2">{p.desc}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map((t, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 rounded bg-blue-900/20 border border-blue-700/40 text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
