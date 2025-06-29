"use client"
import { responseDataType, tourGuideType } from '@/lib/types'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { DanielleMarshAvatar, KangHaerinAvatar, locationIcon, MirandaRachelAvatar, starFillIcon, starWhiteIcon } from './image'

const TourGuides = () => {
    const [tourGuidesData, setTourGuidesData] = useState<tourGuideType[]>([])
    const fetchTourGuidesData = async ()=>{
        const result = await fetch("/api/tour-guides")
        const data: responseDataType = await result.json()
        setTourGuidesData(data?.data)
    }

    useEffect(()=>{
        fetchTourGuidesData()
    }, [])
    
  return (
    <>
      <div style={{paddingLeft:"8px", paddingRight: "8px", marginTop: "40px"}}>
        <h1 style={{fontSize: "20px", textWrap: "nowrap", textAlign:"left", fontWeight: 600, color:"#10152E"}}>Tour guides</h1>
        {
            tourGuidesData?.map((item: tourGuideType, index: number)=>{
                return(
                    <Fragment key={item?.id}>
                        <div style={{display:"flex", gap: "10px", marginTop: "30px"}}>
                            <div>
                                <Image src={index === 0 ? MirandaRachelAvatar:  index === 1 ? DanielleMarshAvatar : KangHaerinAvatar} width={60} height={60} alt='tour-guide' />
                            </div>  
                            <div>
                                <h3 style={{fontWeight: 400, fontSize: "16px"}}>
                                    {item?.name}
                                </h3>
                                <div style={{display: "flex", justifyContent:"center", alignItems:"center", marginTop: "8px", gap:"4px"}}>

                                    <Image src={locationIcon} width={13} height={16} alt='location'  /> 
                                    <span style={{fontSize: "14px"}}>{item?.location}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex", gap:"8px", alignItems:"center"}}>
                            <div style={{display: "flex", gap:"4px"}}>
                                {
                                    Array.from({length: 5})?.map((_: any, index: any)=>{
                                        return (
                                            <Fragment key={index}>
                                                {
                                                    index < item?.rating ?
                                                    <Image src={starFillIcon} width={15} height={15} alt='star-fill'/>:
                                                    <Image src={starWhiteIcon} width={15} height={15} alt='star-unfill'/>
                                                }
                                            </Fragment>
                                        )
                                    })
                                }

                            </div>
                            <span>{`(${parseFloat(item?.rating?.toString()).toFixed(1)})`}</span>
                        </div>
                        <hr style={{border: "1px solid #DEDEDE", marginTop:"16px"}} />
                    </Fragment>
                )
            })
        }
      </div>
    </>
  )
}

export default TourGuides
