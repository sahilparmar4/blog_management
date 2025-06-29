"use client"
import Comments from "@/components/Comments";
import ExploreMore from "@/components/ExploreMore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AlexCarterAvatar, coverPhoto, previousIcon } from "@/components/image";
import TourGuides from "@/components/TourGuides";
import { carouselData } from "@/lib/blog";
import { formatDate } from "@/lib/formateDate";
import { blogType, commentType } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [blogMain, setBlogMain] = useState<blogType | undefined>(undefined)
  const [comments, setComments] = useState<commentType[]>([])
  const [index, setIndex] = useState(0);
   const slide = carouselData[index];
   const [loading, setLoading] = useState<boolean>(true)

   const getAllBlogs = async()=> {
    setLoading(true)
    const response = await fetch("/api/blogs")
    
    const data = await response.json()
    setBlogMain(data?.data)
    setComments(data?.data?.comments)
    setLoading(false)
  }

  const goToPrevious = ()=>{  
    setIndex((index - 1 + carouselData.length) % carouselData.length);
  }

  const goToNext = ()=>{  
    setIndex((index + 1) % carouselData.length)
  }
  useEffect(()=>{
    getAllBlogs()
  }, [])

  return (
    <>
      {
        loading ?
        <h1 style={{textAlign: "center"}}>
            Loading....
        </h1> :
        <>
          <Header title={blogMain?.title} />
          <div className="cover-photo-section">
            <Image src={coverPhoto} width={0} height={0} alt="cover-photo" style={{width:"100%", height: "auto"}} />
          </div>
          <section className="main-section">
            <article>
              <div className="author-title">
                <div className="author-data" style={{gap: "8px"}}>
                    <Image src={AlexCarterAvatar} width={32} height={32} alt="alex-avatar" />
                    <span style={{fontSize: "medium", fontWeight: 600, color:"#4E5265"}}>{blogMain?.author?.toUpperCase()}</span>
                </div>
                <div>
                    <span style={{color: "#4E5265"}}>{formatDate(blogMain?.date ?? "")}</span>
                </div>
              </div>
              <hr style={{border: "1px solid #E5E6EA"}} /> 
            <p className="blog-description">
              Discover exercises that target every muscle group, helping you build strength and endurance. 
              Perfect for beginners and seasoned gym-goers alike.
              </p>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
              </p>
              <p className="blog-description">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
              </p>
              <p style={{color: "#000", marginTop: "32px", fontWeight: 600, fontSize: "16px", padding: "16px", fontStyle: "italic", borderTop: "1px solid #E5E6EA", borderBottom: "1px solid #E5E6EA"}} className="italic-paragraph">
                
                With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. 
                Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. 
                His passion lies in helping clients build strength and confidence through personalized training routines. 
                Outside the gym, Alex is an avid runner and enjoys outdoor adventures.

              
              </p>
              <p className="blog-description">
                With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. 
                Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. 
                His passion lies in helping clients build strength and confidence through personalized training routines. 
                Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
              </p>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
              </p>
              <p className="blog-description">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
              </p>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
              </p>
              <p className="blog-description">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean
              </p>
              <div className="carousel">
                <hr style={{marginTop: "30px", marginBottom: "30px", border: "1px solid #E5E6EA"}} />
                <div style={{display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column", width:"100%"}} className="carousel-fade" key={index}>
                  <h2 style={{fontWeight: 400, fontSize:"large", color: "#10152E"}}>About {slide?.author}</h2>
                  <Image src={AlexCarterAvatar} width={100} height={100} alt="author-avatar" style={{marginTop: "8px", marginBottom: "8px"}} />
                  <p style={{}} className="slider-author-description">
                    {slide?.description}  
                  </p>
                </div>
                <hr style={{marginTop: "30px", marginBottom: "30px", border: "1px solid #E5E6EA"}} />
                <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}} className="carousel-controls" key={`controls-${index}`}>
                  <div>
                      <button style={{display: "flex", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px", cursor:"pointer"}} onClick={()=>goToPrevious()} className="prevButton">
                        <Image src={previousIcon} width={16} height={16} alt="prev-icon" />
                        <span style={{color:"#05091C"}}>Previous</span>
                      </button>
                        <h5 className="blog-recommended">5 Tips for Better Cardio Sessions</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
                      <button style={{display: "flex", flexDirection:"row-reverse", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px", cursor: "pointer"}} onClick={()=>goToNext()} className="nextButton">
                        <Image src={previousIcon} width={18} height={16} alt="prev-icon" style={{rotate: "180deg"}} />
                        <span style={{color:"#05091C"}}>Next</span>
                      </button>
                        <h5 className="blog-recommended">5 Tips for Better Cardio Sessions</h5>
                  </div>
                </div>

              </div>
            </article>
            <div>
              <ExploreMore />
              <TourGuides />
            </div>
          </section>
          <div className="carousel-tablet">
            <hr style={{marginTop: "30px", marginBottom: "30px", border: "1px solid #E5E6EA"}} />
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column", width:"100%"}} className="carousel-fade" key={index}>
              <h2 style={{fontWeight: 400, fontSize:"large", color: "#10152E"}}>About {slide?.author}</h2>
              <Image src={AlexCarterAvatar} width={100} height={100} alt="author-avatar" style={{marginTop: "8px", marginBottom: "8px"}} />
              <p style={{}} className="slider-author-description">
                {slide?.description}  
              </p>
            </div>
            <hr style={{marginTop: "30px", marginBottom: "30px", border: "1px solid #E5E6EA"}} />
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}} className="carousel-controls" key={`controls-${index}`}>
              <div>
                  <button style={{display: "flex", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px", cursor:"pointer"}} onClick={()=>goToPrevious()} className="prevButton">
                    <Image src={previousIcon} width={16} height={16} alt="prev-icon" />
                    <span style={{color:"#05091C"}}>Previous</span>
                  </button>
                    <h5 className="blog-recommended">5 Tips for Better Cardio Sessions</h5>
              </div>
              <div style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
                  <button style={{display: "flex", flexDirection:"row-reverse", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px", cursor: "pointer"}} onClick={()=>goToNext()} className="nextButton">
                    <Image src={previousIcon} width={18} height={16} alt="prev-icon" style={{rotate: "180deg"}} />
                    <span style={{color:"#05091C"}}>Next</span>
                  </button>
                    <h5 className="blog-recommended">5 Tips for Better Cardio Sessions</h5>
              </div>
            </div>
          </div>
          <Comments commentData={comments} setCommentData={setComments} />
          <Footer />
        </>
      }
    </>
  );
}
