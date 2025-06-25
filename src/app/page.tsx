"use client"
import { useEffect } from "react";

export async function getAllBlogs() {
  const response = await fetch("http://localhost:3000/api/blogs")
  const data = await response.json()
  console.log(data.data[0])
  return data
}

export default function Home() {
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
