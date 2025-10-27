import React from "react";

/**
 * 通用弹窗组件（加宽版）
 * 用于显示技能 / 兴趣 / 教育 / 项目等详情内容
 */
export default function Modal({ show, onClose, title, children }) {
  if (!show) return null; // 🚫 未激活时不渲染

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4"
      onClick={onClose}
    >
      <div
        // ⚙️ 宽度从 max-w-lg → max-w-3xl，更适合阅读
        className="bg-[#0b0f14] border border-gray-800 rounded-2xl max-w-4xl w-full p-8 
                   text-gray-200 shadow-2xl relative transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // 阻止冒泡
      >
        {/* 标题栏 */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
          <h3 className="text-2xl font-semibold text-tech-blue tracking-wide">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold leading-none"
          >
            ×
          </button>
        </div>

        {/* 内容区域 */}
        <div className="text-gray-300 text-base leading-relaxed space-y-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {children}
        </div>
      </div>
    </div>
  );
}
