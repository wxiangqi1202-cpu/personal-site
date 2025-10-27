import React from "react";

/**
 * 教育背景模块
 * 一行一个教育卡片，点击可查看详细信息
 */
export default function Education({ items, onOpen }) {
  return (
    <section className="mb-8">
      {/* 模块标题 */}
      <h2 className="text-xl font-semibold mb-3">教育背景</h2>

      {/* 单列布局，每个教育经历独立一行 */}
      <div className="grid grid-cols-1 gap-4">
        {items.map((e, i) => (
          <div
            key={i}
            onClick={() => onOpen({ type: "education", data: e })}
            className="p-5 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220] 
                       border border-gray-800 cursor-pointer hover:scale-[1.02] 
                       hover:shadow-[0_0_25px_rgba(14,165,255,0.15)] transition-all duration-300"
          >
            {/* 学校和时间 */}
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-white">{e.school}</div>
              <div className="text-sm text-gray-400">{e.period}</div>
            </div>

            {/* 详细描述 */}
            <p className="text-gray-300 text-sm">{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
