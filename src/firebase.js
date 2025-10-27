// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔑 用你的 Firebase 项目配置替换这里的内容
const firebaseConfig = {
  apiKey: "AIzaSyDT-nEiXExmW2WavzJAY5HsBps1k_Dgf6o",
  authDomain: "message-board-cf1bc.firebaseapp.com",
  databaseURL: "https://message-board-cf1bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-board-cf1bc",
  storageBucket: "message-board-cf1bc.firebasestorage.app",
  messagingSenderId: "845068825403",
  appId: "1:845068825403:web:e39e084e982b6b093e7d1e",
  measurementId: "G-D01FEGEJN3"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 获取 Firestore 数据库实例
const db = getFirestore(app);

// ✅ 导出 db 实例（这才是唯一要导出的）
export { db };