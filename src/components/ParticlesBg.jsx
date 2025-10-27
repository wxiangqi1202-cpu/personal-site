import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * 🌌 粒子背景组件（ParticlesBg.jsx）
 * ----------------------------------------
 * ✅ 兼容 Vite + React 18
 * ✅ 移动端自适应数量
 * ✅ 背景透明，支持 Tailwind 背景层叠
 * ✅ 鼠标悬停交互（repulse 模式）
 */
export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  // 初始化粒子引擎
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // 引擎初始化完成前不渲染
  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        fullScreen: { enable: false },
        detectRetina: true,
        particles: {
          number: {
            value: window.innerWidth < 768 ? 30 : 110, // 💡 移动端减少数量
            density: { enable: true, area: 800 },
          },
          color: { value: "#00bfff" }, // 💡 粒子颜色
          shape: { type: "triangle" }, // 💡 粒子形状: "circle" | "square" | "triangle"| "polygon" | "star"
          opacity: { value: 0.6 }, // 💡 透明度
          size: { value: { min: 1, max: 4 } }, // 💡 大小范围
          links: {
            enable: true,
            distance: 150,// 连接距离
            color: "#00bfff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.7, // 💡 粒子移动速度
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // 💡 鼠标悬停反弹:"repulse"	鼠标靠近时排斥/"grab"	鼠标靠近时连线更亮/"bubble"鼠标悬停时粒子变大/"push"点击时生成粒子/"remove"	点击时移除粒子
            onClick: { enable: false }, // 可开启点击交互
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.3 },
          },
        },
      }}
    />
  );
}
