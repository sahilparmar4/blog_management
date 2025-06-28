"use client"
import { formatDate } from '@/lib/formateDate'
import { recommendedArticleType, responseDataType } from '@/lib/types'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { recommendedBlogImage1, recommendedBlogImage2 } from './image'

const ExploreMore = () => {
    const [recommendedArticles, setRecommendedArticles] = useState<recommendedArticleType[]>([])
    const fetchRecommendedArticles = async()=>{
        const result = await fetch("http://localhost:3000/api/explore-more")
        const data: responseDataType  = await result?.json()
        setRecommendedArticles(data?.data)
    }

    useEffect(()=>{
        fetchRecommendedArticles()
    }, [])
  return (
    <>
      <div style={{paddingLeft:"8px", paddingRight: "8px"}}>
        <h1 style={{fontSize: "20px", textWrap: "nowrap", textAlign:"left", fontWeight: 600}}>Explore more</h1>
        {
            recommendedArticles?.map((item: recommendedArticleType, index: number)=>{
                return (
                    <Fragment key={item?.id}>
                        <div style={{width: "100%", marginTop:"15px"}}>
                            <Image src={index === 2 ? recommendedBlogImage2 : recommendedBlogImage1} width={301} height={165} alt='blog-image' />
                        </div>
                        <div style={{display: "flex", gap: "4px", marginTop: "10px"}}>
                            <span style={{fontWeight: "500 !important"}}>{item?.category}</span>
                            <span style={{color: "#DEDEDE"}}>|</span>
                            <span style={{textWrap: "nowrap", color:"#757575"}}>{formatDate(item?.date)}</span>
                        </div>
                        <div style={{marginTop: "8px"}}>
                            {item?.description}
                        </div>
                    </Fragment>
                )
            })
        }
      </div>
    </>
  )
}

export default ExploreMore
