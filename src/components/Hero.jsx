import React from "react";

/**
 * Hero 模块（首页顶部）
 * ✅ 风格与其他模块统一（边框发光 + 居中宽度）
 * ✅ 桌面端左右布局，移动端上下布局
 * ✅ 发光边框与柔光特效
 */
export default function Hero({ data }) {
  return (
    <section className="mb-10">
      {/* 外层容器，与其他模块一致 */}
      <div
        className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl 
                   bg-gradient-to-br from-[#071019] to-[#0b1220] 
                   border border-gray-800 shadow-[0_0_25px_rgba(14,165,255,0.1)] 
                   hover:shadow-[0_0_35px_rgba(14,165,255,0.25)] 
                   transition-all duration-500"
      >
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 
                     text-center md:text-left"
        >
          {/* ===== 左侧：文字信息 ===== */}
          <div className="flex-1 space-y-3">
            {/* 姓名 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {data.name}
            </h1>

            {/* 职位 */}
            <p className="text-tech-blue text-lg md:text-xl font-medium">
              {data.title}
            </p>

            {/* 简介 */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
              {data.subtitle}
            </p>

            {/* 联系方式 */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-sm text-gray-400 mt-4">
              {data.location && <div>{data.location}</div>}
              {data.phone && (
                <>
                  <div>·</div>
                  <div>{data.phone}</div>
                </>
              )}
              {data.email && (
                <>
                  <div>·</div>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-tech-blue hover:underline break-all"
                  >
                    {data.email}
                  </a>
                </>
              )}
            </div>
          </div>

          {/* ===== 右侧：头像 ===== */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0 flex-shrink-0 relative">
            <div
              className="relative group w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                         rounded-full border border-tech-blue/40 
                         overflow-hidden shadow-[0_0_25px_rgba(14,165,255,0.15)] 
                         hover:shadow-[0_0_45px_rgba(14,165,255,0.4)] 
                         transition-all duration-500"
            >
              <img
                src="/images/profile.jpg"
                alt="Avatar"
                loading="lazy"
                className="object-cover w-full h-full rounded-full transform 
                           group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* 悬停时淡蓝光圈 */}
              <div
                className="absolute inset-0 rounded-full bg-tech-blue/15 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
              ></div>
            </div>

            {/* 背景柔光环 */}
            <div className="absolute inset-0 blur-3xl bg-tech-blue/10 scale-150 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
