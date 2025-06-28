"use client"
import Image from 'next/image'
import React, { Fragment } from 'react'
import { angryIcon, commentIcon, goodIcon, happyIcon, KangHaerinAvatar, loveIcon, sendIcon, shutIcon, starFillIcon, starWhiteIcon } from './image'
import { commentType } from '@/lib/types'
import { formatDate } from '@/lib/formateDate'

interface commmentPropsType{
    commentData: commentType[]
}

const Comments:React.FC<commmentPropsType> = ({commentData}) => {
  return (
    <>
      <div style={{ marginBottom: "32px", padding: "1rem 20rem"}}>
        <div style={{display: "flex", gap: "4px", alignItems:"center", marginBottom: "24px"}}>
            <Image src={commentIcon} width={4} height={10} alt='commment' />
            <span>
                Comments
            </span>
        </div>
        {
            commentData?.map((item: commentType)=>{
                return (
                    <Fragment key={item?.id}>
                        <div style={{display: "flex", marginBottom: "24px", gap:"16px"}}>
                            <div>
                                <Image src={KangHaerinAvatar} width={50} height={50} alt='avatar' />
                            </div>
                            <div>
                                <div style={{display: "flex", justifyContent:"space-between", marginBottom: "8px"}}>
                                    <div style={{gap: "8px", display:"flex", flexDirection:"row", alignItems:"center"}}>
                                        <span style={{fontSize:"14px"}}>{item?.authorName}</span>
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
                                    <div>
                                        <span>{formatDate(item?.date)}</span>
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontWeight:"400 !important", fontSize:"14px"}}>{item?.comment}</p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })
        }
        <div>
            <div style={{display: "flex", gap: "4px", alignItems:"center", marginBottom: "24px"}}>
                <Image src={commentIcon} width={4} height={10} alt='commment' />
                <span>
                    Add a comment
                </span>
            </div>
            <form method='POST' >
                <div style={{display:"flex", justifyContent:"space-between", gap:"16px"}}>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"8px"}}>
                        <div>
                            <label>
                                Name
                            </label>
                            <div>
                                <input type='text' style={{background: "#F5F5F5", border:"1px", borderRadius: "12px", height:"40px", marginTop:"4px", width:"100%"}}/>
                            </div>
                        </div>
                        <div>
                            <label>
                                Email
                            </label>
                            <div>
                                <input type='email' style={{background: "#F5F5F5", border:"1px", borderRadius: "12px", height:"40px", marginTop:"4px", width:"100%"}}/>
                            </div>
                        </div>

                    </div>
                    <div style={{width: "100%"}}>
                        <div>
                            <label>
                                Comment
                            </label>
                            <div>
                                <textarea placeholder='Search anything...' style={{background: "#F5F5F5", border:"1px", borderRadius: "12px", width:"100%", marginTop:"4px", fontFamily: "Lato, sans-serif"}} rows={7}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{display:"flex", gap:"8px", marginTop:"8px"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"8px", paddingRight:"4px", width:"100%", background:"#F5F5F5", borderRadius:"12px"}}>
                        <div style={{padding:"8px"}}>

                        <h6 style={{fontSize:"16px"}}>Rate the usefulness of the article</h6>
                        </div>
                        <div style={{display:"flex", gap:"8px", padding: "8px"}}>

                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:"none", border:"none"}}><Image src={angryIcon} width={16} height={16} alt='bad' /></button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:"none", border:"none"}}><Image src={shutIcon} width={16} height={16} alt='shut' /></button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:"none", border:"none"}}><Image src={happyIcon} width={16} height={16} alt='happy' /></button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:"none", border:"none"}}><Image src={loveIcon} width={16} height={16} alt='love' /></button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:"none", border:"none"}}><Image src={goodIcon} width={16} height={16} alt='good' /></button>
                        </div>

                    </div>
                    <div>
                        <button style={{display:"flex", padding: "8px", gap:"8px", background:"#000", borderRadius:"12p"}}>
                            <Image src={sendIcon} width={16} height={16} alt='send' />
                            <span style={{color:"white"}}>Send</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Comments
