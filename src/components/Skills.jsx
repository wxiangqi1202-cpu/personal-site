import React from "react";

/**
 * 技能模块
 * 三列网格布局 + 每个技能卡片可点击交互 + hover 科技光效
 */
export default function Skills({ items, onOpen }) {
  return (
    <section className="mb-8">
      {/* 模块标题 */}
      <h2 className="text-xl font-semibold mb-3">技能</h2>

      {/* 三列网格布局（自适应） */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((s, i) => (
          <div
            key={i}
            onClick={() => onOpen({ type: "skill", data: s })}
            className="p-4 rounded-xl bg-gradient-to-br from-[#07121a] to-[#0b1220]
                       border border-gray-800 cursor-pointer 
                       hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(14,165,255,0.15)]
                       transition-all duration-300"
          >
            <div className="text-sm text-gray-200 text-center font-medium">
              {s.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
