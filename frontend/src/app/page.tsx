import Image from "next/image"
// import { useEffect, useState } from 'react'

export default function TemplatePage() {
  // 🔧 State declarations
  // const [data, setData] = useState(null)

  // 🚀 Side effects (e.g., data fetching)
  // useEffect(() => {
  //   // Fetch data or run setup logic here
  // }, [])

  return (
    <main className="min-h-screen">
      {/* 🧭 Page layout wrapper */}
      <div className="">
        <p className="text-3xl font-bold text-white text-center p-12">
          test
        </p>
      </div>
      <div className=" max-h-1/4">
      <Image
        src="/icon kota.png"
        alt="FIFA Card Tournament"
        width={500}
        height={280}
        className="rounded-xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
      />
      </div>
    {/*
      TODO: LEAGUES LIST VIEW:
            FETCH LIST OF ALL LEAGUES FROM BACKEND API
            FOR EACH LEAGUE:
            - INSERT REDIRECTING BUTTON (TODO: CREATE LEAGUE BUTTON REUSABLE COMPONENT)
    */}
    </main>
  )
}
