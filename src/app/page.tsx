"use client"
import { useEffect } from "react";


export default function Home() {
   async function getAllBlogs() {
    const response = await fetch("http://localhost:3000/api/blogs")
    const data = await response.json()
    console.log(data.data[0])
    return data
  }
  useEffect(()=>{
    getAllBlogs()
  }, [])
  return (
    <>
      <header>
        
      </header>
    </>
  );
}
