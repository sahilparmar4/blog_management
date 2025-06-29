"use client"
import { formatDate } from '@/lib/formateDate'
import { recommendedArticleType, responseDataType } from '@/lib/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { recommendedBlogImage1, recommendedBlogImage2, previousIcon } from './image'

const ExploreMore = () => {
  const [recommendedArticles, setRecommendedArticles] = useState<recommendedArticleType[]>([])
  const [index, setIndex] = useState(0)

  const fetchRecommendedArticles = async () => {
    const result = await fetch("/api/explore-more")
    const data: responseDataType = await result?.json()
    setRecommendedArticles(data?.data)
  }

  useEffect(() => {
    fetchRecommendedArticles()
  }, [])

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + recommendedArticles.length) % recommendedArticles.length)
  }

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % recommendedArticles.length)
  }

  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore more</h1>

      {/* Mobile Carousel */}
      <div className="explore-carousel-mobile">
        <div className="explore-card">
          <Image
            src={index === 2 ? recommendedBlogImage2 : recommendedBlogImage1}
            width={301}
            height={165}
            alt='blog-image'
            className="explore-image"
          />
          <div className="explore-meta">
            <span className="explore-category">{recommendedArticles[index]?.category}</span>
            <span className="explore-separator">|</span>
            <span className="explore-date">{formatDate(recommendedArticles[index]?.date || '')}</span>
          </div>
          <div className="explore-description">
            {recommendedArticles[index]?.description}
          </div>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", width:"100%"}} className="carousel-controls" key={`controls-${index}`}>
            <div>
                <button style={{display: "flex", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px", cursor:"pointer"}} onClick={()=>goToPrevious()} className="prevButton">
                <Image src={previousIcon} width={16} height={16} alt="prev-icon" />
                <span style={{color:"#05091C"}}>Previous</span>
                </button>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
                <button style={{display: "flex", flexDirection:"row-reverse", gap: "4px", padding: "8px", background:"#fff", border:"1px solid black", borderRadius: "2px", cursor: "pointer"}} onClick={()=>goToNext()} className="nextButton">
                <Image src={previousIcon} width={18} height={16} alt="prev-icon" style={{rotate: "180deg"}} />
                <span style={{color:"#05091C"}}>Next</span>
                </button>
            </div>
        </div>
      </div>

      {/* Tablet & Desktop List */}
      <div className="explore-list-desktop">
        {recommendedArticles.map((item, idx) => (
          <div className="explore-card" key={item?.id}>
            <Image
              src={idx === 2 ? recommendedBlogImage2 : recommendedBlogImage1}
              width={301}
              height={165}
              alt='blog-image'
              className="explore-image"
            />
            <div className="explore-meta">
              <span className="explore-category">{item?.category}</span>
              <span className="explore-separator">|</span>
              <span className="explore-date">{formatDate(item?.date)}</span>
            </div>
            <div className="explore-description">
              {item?.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMore
