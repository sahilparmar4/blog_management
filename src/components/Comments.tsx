"use client"
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { angryIcon, angryWhiteIcon, commentIcon, goodIcon, goodWhiteIcon, happyIcon, happyWhiteIcon, KangHaerinAvatar, loveIcon, loveWhiteIcon, sendIcon, shutIcon, shutWhiteIcon, starFillIcon, starWhiteIcon } from './image'
import { commentType, responseDataType } from '@/lib/types'
import { formatDate } from '@/lib/formateDate'

interface commmentPropsType {
  commentData: commentType[]
  setCommentData: React.Dispatch<React.SetStateAction<commentType[]>>
}


const Comments:React.FC<commmentPropsType> = ({commentData, setCommentData}) => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [rating, setRating] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [screenWidth, setScreenWidth] = useState<number>(0)

    const addComment = async(e: any)=>{
        e.preventDefault()
        setLoading(true)
        const result = await fetch("/api/comments/add-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            email,
            description,
            rating,
        }),
        });
        const data: responseDataType = await result.json()
        if(data?.status === 200){
            alert(data?.message)
            setCommentData((prev: commentType[]) => [data?.data as commentType, ...prev]);
            setName("")
            setDescription("")
            setEmail("")
            setRating(0)
        }
        setLoading(false)
    }

    const clickHandler = (rate: number)=>{
        setRating(rate)
    }

    const isFormValid = (): boolean => {
    return (
        name.trim().length > 0 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        description.trim().length > 0 &&
        rating > 0
    );
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    console.log(screenWidth)


    return (
    <>
      <div style={{ }} className='comment-section-main'>
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
                            <div style={{flex: 1}}>
                                {/* <div style={{}}> */}
                                <div className='comment-listing'>

                                    <div className='comment-list-section'>
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
        
                                        <span style={{color: "#121212"}}>{`(${parseFloat(item?.rating?.toString()).toFixed(1)})`}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{color:"#757575", fontSize:"14px"}}>{formatDate(item?.date)}</span>
                                    </div>
                                </div>
                                <div>
                                    <p style={{fontWeight:"400 !important", fontSize:"14px", color:"#10152E"}}>{item?.comment}</p>
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
            <form method='POST' onSubmit={addComment}>
                <div style={{}} className='add-comment-form'>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"8px"}}>
                        <div>
                            <label style={{color: "#3E3232"}}>
                                Name
                            </label>
                            <div>
                                <input type='text' style={{background: "#F5F5F5", border:"1px", borderRadius: "12px", height:"40px", marginTop:"4px", width:"100%", paddingLeft: "6px", paddingTop:"4px"}} value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <label style={{color: "#3E3232"}}>
                                Email
                            </label>
                            <div>
                                <input type='email' style={{background: "#F5F5F5", border:"1px", borderRadius: "12px", height:"40px", marginTop:"4px", width:"100%", paddingLeft: "6px", paddingTop: "4px"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        </div>

                    </div>
                    <div style={{width: "100%"}}>
                        <div>
                            <label style={{color: "#3E3232"}}>
                                Comment
                            </label>
                            <div>
                                <textarea placeholder='Search anything...' style={{background: "#F5F5F5", border:"1px", borderRadius: "12px", width:"100%", marginTop:"4px", fontFamily: "Lato, sans-serif", paddingLeft: "6px", paddingTop:"4px"}} rows={7} value={description} onChange={(e)=>setDescription(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{}} className='btn-main'>
                    <div className='add-comment-btn'>
                        <div style={{padding:"8px"}}>

                        <h6 style={{fontSize:"16px"}}>Rate the usefulness of the article</h6>
                        </div>
                        <div style={{display:"flex", gap:"8px", padding: "8px"}}>

                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background: rating === 1 ? "#FF0412" : "none", border:"none", cursor:"pointer", padding: rating === 1 ? "8px" : "0px", borderRadius: rating === 1 ?"12px" : "0px", gap: rating === 1 ? "4px" : "0px"}} onClick={()=>clickHandler(1)} type='button'>
                                <Image src={rating === 1 ? angryWhiteIcon :  angryIcon} width={16} height={16} alt='bad' /> {rating  === 1  && <span style={{color: "white"}}>Bad</span>}
                            </button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:rating === 2 ? "#FF6700" :"none", border:"none", cursor:"pointer", padding: rating === 2 ? "8px" : "0px", borderRadius: rating === 2 ?"12px" : "0px", gap: rating === 2 ? "4px" : "0px"}} onClick={()=>clickHandler(2)} type='button'>
                                <Image src={rating === 2 ? shutWhiteIcon : shutIcon} width={16} height={16} alt='shut' /> {rating  === 2  && <span style={{color: "white"}}>Average</span>}
                            </button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:rating === 3 ? "#FFB416" :"none", border:"none", cursor:"pointer", padding: rating === 3 ? "8px" : "0px", borderRadius: rating === 3 ?"12px" : "0px", gap: rating === 3 ? "4px" : "0px"}} onClick={()=>clickHandler(3)} type='button'>
                                <Image src={rating === 3 ? happyWhiteIcon : happyIcon} width={16} height={16} alt='happy' /> {rating  === 3  && <span style={{color: "white"}}>Normal</span>}
                            </button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:rating === 4 ? "#1C9AF4" :"none", border:"none", cursor:"pointer", padding: rating === 4 ? "8px" : "0px", borderRadius: rating === 4 ?"12px" : "0px", gap: rating === 4 ? "4px" : "0px"}} onClick={()=>clickHandler(4)} type='button'>
                                <Image src={rating === 4 ? loveWhiteIcon : loveIcon} width={16} height={16} alt='love' /> {rating  === 4  && <span style={{color: "white"}}>Nice</span>}
                            </button>
                            <button style={{display:"flex", justifyContent:"center", alignItems:"center", background:rating === 5 ? "#00BA5C" :"none", border:"none", cursor:"pointer", padding: rating === 5 ? "8px" : "0px", borderRadius: rating === 5 ?"12px" : "0px", gap: rating === 5
                                 ? "4px" : "0px"}} onClick={()=>clickHandler(5)} type='button'>
                                <Image src={rating === 5 ? goodWhiteIcon : goodIcon} width={16} height={16} alt='good' /> {rating  === 5  && <span style={{color: "white"}}>Good</span>}    
                            </button>
                        </div>

                    </div>
                    <div>
                        <button style={{display:"flex", padding: "8px", gap:"8px", background:"#000", borderRadius:"12px", cursor: loading || !isFormValid() ? "not-allowed" : "pointer", opacity: loading || !isFormValid() ? 0.6 : 1, width:"100%", justifyContent:"center"}} type='submit' disabled={loading || !isFormValid()}>
                            <Image src={sendIcon} width={16} height={16} alt='send' />
                            <span style={{color:"white"}}>{screenWidth <= 400 ? "Send Comment" : "Send"}</span>
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
