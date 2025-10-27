import React from 'react'

export default function Hero({ data }) {
  return (
    <section className="mb-10">
      <div className="p-6 rounded-2xl shadow-card bg-gradient-to-br from-[#071019] to-[#0b1220] border border-gray-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{data.name}</h1>
            <p className="text-tech-blue mt-2 font-medium">{data.title}</p>
            <p className="mt-4 text-gray-300 max-w-2xl">{data.subtitle}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <div>{data.location}</div>
              <div>·</div>
              <div>{data.phone}</div>
              <div>·</div>
              <a href={`mailto:${data.email}`} className="text-tech-blue hover:underline">{data.email}</a>
            </div>
          </div>

          {/* 🆕 新头像区 */}
          <div className="ml-auto flex-shrink-0">
            <div className="relative group w-36 h-36 rounded-full border border-tech-blue/40 shadow-card overflow-hidden">
              <img
                src="/src/assets/avatar.jpg"
                alt="Avatar"
                className="object-cover w-full h-full rounded-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-tech-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
