import React from "react";

/**
 * 📩 联系方式模块（可点击弹出详细信息）
 */
export default function Contact({ email, note, onOpen }) {
  if (!email) return null;

  return (
    <section className="mb-8 relative z-20"> {/* z-20 确保层级最高 */}
      <h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">
        联系方式
      </h2>

      <div
        onClick={() =>
          onOpen({
            type: "contact",
            data: {
              email,
              note,
              more:
                "如有科研合作、数据项目或求职意向，欢迎通过邮箱联系。我通常会在24小时内回复。"
            }
          })
        }
        className="p-5 rounded-xl bg-gradient-to-br from-[#071019] to-[#0b1220]
                   border border-gray-800 cursor-pointer hover:scale-[1.02]
                   hover:shadow-[0_0_25px_rgba(14,165,255,0.15)]
                   transition-all duration-300"
      >
        <p className="text-gray-200 font-medium mb-1">{email}</p>
        <p className="text-gray-400 text-sm">{note}</p>
        <p className="text-blue-400 text-sm mt-2">点击查看详细联系信息 →</p>
      </div>
    </section>
  );
}
