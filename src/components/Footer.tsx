"use client"
import { relatedArticleType, responseDataType } from '@/lib/types'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { coverPhoto, relatedArticle2, relatedArticle3, relatedArticle4 } from './image'
import { styleText } from 'util'

const Footer = () => {
    const [relatedArticleData, setRelatedArticleData] = useState<relatedArticleType[]>([])
    const fetchRelatedArticles = async ()=>{
        const result = await fetch("/api/related-articles")
        const data: responseDataType  = await result.json()
        setRelatedArticleData(data?.data)
    }

    useEffect(()=>{
        fetchRelatedArticles()
    }, [])
  return (
    <>
      <footer  style={{display:"flex", justifyContent:"center", alignItems:"center", background:"#F5F5F6", flexDirection: "column"}}>
        <div style={{marginTop: "32px", marginBottom: "32px"}}>
            <h1 style={{fontWeight: 600, color: "#262D4D"}}>Related Articles</h1>
        </div>
        <div style={{}} className='footer-related-articles'>
            {
                relatedArticleData?.map((item: relatedArticleType, index: number)=>{
                    return (
                        <Fragment key={item?.id}>
                            <div style={{marginBottom:"12px", width: "inherit"}}>
                                <Image src={index === 0 ? coverPhoto : index === 1 ? relatedArticle2 : index === 2 ? relatedArticle3 : relatedArticle4} width={228} height={229} alt='blog-image' />
                                <h1 style={{fontSize:"20px", marginTop:"12px", color: "#10152E"}}>
                                    {item?.title}
                                </h1>
                                <p style={{marginTop:"12px", marginBottom: "12px", textAlign:"left", color: "#4E5265", fontWeight: 400}}>
                                    {item?.description+"..."}
                                </p>

                                <h6 style={{fontSize:"small", verticalAlign:"end", bottom:"0px"}}>By {item?.author}</h6>
                            </div>
                        </Fragment>
                    )
                })
            }
        </div>
      </footer>
    </>
  )
}

export default Footer
