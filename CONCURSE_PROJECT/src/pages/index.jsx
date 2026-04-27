import { useState } from 'react'
import "../App.css"
import myImage from "../assets/22.jpg"


export default function Index() {

  return (
    <div className=''>
      <div className="flex justify-center items-center mt-10 ml-96 mr-96 border-4 bg-yellow-500 border-yellow-500 border-black h-30 rounded-xl ">
        <h1 className='font-serif text-5xl text-white'>
          CONCOURSE TEST SITE
        </h1>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row shadow-lg">
          <img
            src={myImage}
            alt=""
            className="w-full md:w-1/2 object-cover"
          />
          <div className="w-full md:w-1/2 bg-slate-700 text-white p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">
              Your Title Here
            </h2>
            <p className="text-sm leading-relaxed">
              Your text goes here. This should describe the image or content.
              Keep it readable and structured like your reference design.
            </p>
          </div>
        </div>
      </div>
      <hr className='mt-30 ml-97 mr-97 border-yellow-500' />

      <div className="max-w-6xl mx-auto mt-10 px-4 flex gap-6 items-start">

        <div className="flex-1">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
            <div className="flex">
              <div className="w-1.5 bg-yellow-400 flex-shrink-0"></div>
              <div className="p-5 flex flex-col gap-2 w-full">
                <h2 className="text-center font-bold text-gray-800 text-base">
                  მიმდინარეობს ინტერნეტჭიდობრის მე-7 ტური
                </h2>
                <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-1">
                  <span>📅</span> 2026-04-07
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  გამოქვეყნებულია მეექვსე ტურის შედეგებიც . . .
                </p>
                <div className="mt-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1.5 rounded">
                    ვრცლად...
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-4">
            <button className="w-8 h-8 rounded bg-yellow-400 text-white font-semibold text-sm">1</button>
            <button className="w-8 h-8 rounded bg-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-300">2</button>
            <button className="w-8 h-8 rounded bg-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-300">3</button>
            <button className="px-3 h-8 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300">შემდეგი</button>
            <button className="px-3 h-8 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300">ბოლო</button>
          </div>
        </div>

        <div className="w-80 flex flex-col gap-3">
  <p className="text-center text-sm text-gray-600">ენვიით ჩვენს Facebook გვერდს</p>

  <div className="border border-gray-300 rounded p-3 text-sm text-gray-700 flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">MZIURI</div>
      <div>
        <p className="font-semibold text-sm">კომპიუტერული ...</p>
        <p className="text-xs text-gray-400">22K followers</p>
      </div>
    </div>
    <button className="border border-blue-500 text-blue-600 text-sm py-1.5 rounded flex items-center justify-center gap-1">
      <span>f</span> Follow Page
    </button>
  </div>

  <div className="bg-yellow-400 rounded-lg p-5 flex flex-col items-center gap-3">
    <p className="font-black text-2xl tracking-widest">M Z I U R I</p>
    <div className="flex items-center gap-2">
      <span className="bg-white text-sm px-2 py-0.5 rounded text-gray-600 font-mono">http://</span>
      <span className="text-base font-medium">მთავარი საიტი</span>
    </div>
  </div>

  <div className="bg-yellow-400 rounded-lg p-5 flex flex-col items-center gap-3">
    <p className="font-black text-2xl tracking-widest">M Z I U R I</p>
    <div className="flex items-center gap-2">
      <span className="text-3xl">🖥️</span>
      <span className="text-base font-medium">მβიურის ბლოგი</span>
    </div>
  </div>

  <div className="bg-yellow-400 rounded-lg p-5 flex flex-col items-center gap-3">
    <p className="font-black text-2xl tracking-widest">M Z I U R I</p>
    <div className="flex items-center gap-2">
      <span className="text-3xl">👩‍💻</span>
      <span className="text-base font-medium text-center">მათემატიკური ინტერნეტ შეჯიბრი</span>
    </div>
  </div>

  <div className="bg-yellow-400 rounded-lg p-5 flex flex-col items-center gap-3">
    <p className="font-black text-2xl tracking-widest">M Z I U R I</p>
    <div className="flex items-center gap-2">
      <span className="text-3xl">🧮</span>
      <span className="text-base font-medium text-center">იმედი ხვალის კონკურსი</span>
    </div>
  </div>
</div>

      </div>
    </div>
  )


}
