import React from "react";

/**
 * 兴趣与想法模块
 * 三列网格布局，每个兴趣都是可点击卡片
 * 点击后会调用 onOpen 打开详情弹窗
 */
export default function Interests({ items, onOpen }) {
  return (
    <section className="mb-8">
      {/* 模块标题 */}
      <h2 className="text-xl font-semibold mb-3">兴趣与想法</h2>

      {/* 三列网格布局（自适应） */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            onClick={() => onOpen({ type: "interest", data: it })}
            className="p-4 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220]
                       border border-gray-800 cursor-pointer 
                       hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(14,165,255,0.15)]
                       transition-all duration-300"
          >
            {/* 兴趣标题 */}
            <div className="text-gray-200 text-center font-medium text-sm">
              {it.name || it}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
