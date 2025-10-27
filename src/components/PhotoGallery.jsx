import React from "react";

/**
 * 📸 生活照展示区组件
 * ----------------------------------------
 * 作用：
 *  - 从 src/assets 文件夹加载图片
 *  - 响应式布局 + 悬停放大
 *  - 正确导出 default（防止报错）
 */

// ✅ 从 src/assets 导入三张生活照
import life1 from "../assets/life1.jpg";
import life2 from "../assets/life2.jpg";
import life3 from "../assets/life3.jpg";

// ✅ 默认导出组件（必须有！）
export default function PhotoGallery() {
  const photos = [life1, life2, life3];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">生活瞬间</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-gray-800 hover:scale-105 transition-transform duration-500"
          >
            <img
              src={src}
              alt={`生活照 ${i + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
