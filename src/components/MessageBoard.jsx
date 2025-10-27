import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase"; // ✅ 确保 firebase.js 已导出 db

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ email: "", company: "", content: "" });

  const MY_EMAIL = ""; // ✅ 你的邮箱（用于判断显示脱敏）

  // 🔹 从 Firestore 获取留言
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedMessages = querySnapshot.docs.map((doc) => doc.data());
        setMessages(fetchedMessages);
      } catch (err) {
        console.error("❌ 获取留言失败:", err);
      }
    };

    fetchMessages();
  }, []);

  // 🔹 提交留言
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.content) {
      Swal.fire("提示", "请填写邮箱和留言内容", "warning");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        email: form.email,
        company: form.company || "",
        content: form.content,
        timestamp: new Date(),
      });

      // 📧 邮件通知 (EmailJS)
      emailjs.send(
        "service_75xtg1o",
        "template_ss15tmb",
        {
          from_email: form.email,
          message: form.content,
          company: form.company || "未填写公司",
        },
        "rrsBjpXKg_sqaOD27"
      );

      Swal.fire("✅ 提交成功", "您的留言已通过邮箱安全发送！", "success");

      // 清空输入框
      setForm({ email: "", company: "", content: "" });

      // 重新获取最新留言
      const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedMessages = querySnapshot.docs.map((doc) => doc.data());
      setMessages(fetchedMessages);
    } catch (err) {
      console.error("❌ 提交失败:", err);
      Swal.fire("错误", "留言发送失败，请稍后再试。", "error");
    }
  };

  // 🔒 数据脱敏函数
  const maskEmail = (email) => {
    if (!email.includes("@")) return "***";
    const [name, domain] = email.split("@");
    return name.slice(0, 2) + "***@" + domain;
  };

  const maskCompany = (company) => {
    if (!company) return "***";
    return company.length <= 2 ? "*".repeat(company.length) : company[0] + "***";
  };

  const maskContent = (content) => "★".repeat(Math.min(content.length, 20));

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-white">留言板</h2>

      {/* 表单区域 */}
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#071019] to-[#0b1220] border border-gray-800 rounded-xl p-6 space-y-4"
      >
       
        <input
          type="text"
          placeholder="公司名称（可选）"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full p-2 bg-[#0d121b] border border-gray-700 rounded-md text-gray-200"
        />
         <input
          type="email"
          placeholder="您的邮箱"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 bg-[#0d121b] border border-gray-700 rounded-md text-gray-200"
          required
        />
        <textarea
          placeholder="留言内容..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full p-2 bg-[#0d121b] border border-gray-700 rounded-md text-gray-200 h-24"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-tech-blue text-white rounded-md hover:bg-blue-600 transition-all"
        >
          提交留言
        </button>
      </form>

      {/* 留言展示区域 */}
      <div className="mt-6 max-h-[300px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {messages.length === 0 && (
          <p className="text-gray-500 text-sm">暂无留言，欢迎成为第一个留言者！</p>
        )}

        {messages.map((m, i) => {
          const isOwner = m.email === MY_EMAIL;
          return (
            <div
              key={i}
              className="p-4 rounded-xl bg-gradient-to-br from-[#0d131b] to-[#101a2a] border border-gray-700"
            >
              <p className="text-gray-300 leading-snug line-clamp-3">
                {isOwner ? m.content : maskContent(m.content)}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                —— {isOwner ? m.company || "匿名" : maskCompany(m.company)} (
                {isOwner ? m.email : maskEmail(m.email)})
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
