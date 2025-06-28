"use client"
import Comments from "@/components/Comments";
import ExploreMore from "@/components/ExploreMore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AlexCarterAvatar, coverPhoto, previousIcon } from "@/components/image";
import TourGuides from "@/components/TourGuides";
import { formatDate } from "@/lib/formateDate";
import { blogType } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [blogMain, setBlogMain] = useState<blogType | undefined>(undefined)
   async function getAllBlogs() {
    const response = await fetch("http://localhost:3000/api/blogs")
    const data = await response.json()
    setBlogMain(data?.data)
  }
  useEffect(()=>{
    getAllBlogs()
  }, [])

  return (
    <>
      <Header title={blogMain?.title} />
      <div>
        <Image src={coverPhoto} width={0} height={0} alt="cover-photo" style={{width:"100%", height: "auto"}} />
      </div>
      <section style={{display:"flex", justifyContent:"center", width: "100%", padding: "3rem 20rem", gap:"40px"}}>
        <article>
          <div style={{paddingTop:"4px", paddingBottom:"4px", display:"flex", justifyContent: "space-between", marginBottom: "8px"}}>
            <div className="author-data" style={{gap: "4px"}}>
                <Image src={AlexCarterAvatar} width={32} height={32} alt="alex-avatar" />
                <span style={{fontSize: "medium"}}>{blogMain?.author}</span>
            </div>
            <div>
                <span className="blog-date">{formatDate(blogMain?.date ?? "")}</span>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{__html: blogMain?.description ?? ""}}>
          </p>
        <hr style={{marginTop: "30px", marginBottom: "30px", border: "1px solid #E5E6EA"}} />
        <div style={{display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <h2 style={{fontWeight: 400, fontSize:"large"}}>About {blogMain?.author}</h2>
          <Image src={AlexCarterAvatar} width={100} height={100} alt="author-avatar" style={{marginTop: "8px", marginBottom: "8px"}} />
          <p style={{fontStyle: "italic", textAlign: "left", fontSize: "medium", color:"#4E5265", fontWeight: 600}}>
            With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
          </p>
        </div>
        <hr style={{marginTop: "30px", marginBottom: "30px", border: "1px solid #E5E6EA"}} />
        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
          <div>
              <button style={{display: "flex", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px"}}>
                <Image src={previousIcon} width={16} height={16} alt="prev-icon" />
                <span>Previous</span>
              </button>
                <h5 style={{fontWeight: 400, marginTop:"6px"}}>5 Tips for Better Cardio Sessions</h5>
          </div>
          <div style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
              <button style={{display: "flex", flexDirection:"row-reverse", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px"}}>
                <Image src={previousIcon} width={18} height={16} alt="prev-icon" style={{rotate: "180deg"}} />
                <span>Next</span>
              </button>
                <h5 style={{fontWeight: 400, marginTop:"6px", textAlign:"right"}}>5 Tips for Better Cardio Sessions</h5>
          </div>
        </div>
        </article>
        <div>
          <ExploreMore />
          <TourGuides />
        </div>
      </section>
      <Comments commentData = {blogMain?.comments ?? []} />
      <Footer />
    </>
  );
}
