import React from 'react'

interface HeaderProps {
    title:string | undefined
}

const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    <>
      <header>
        <nav>
            <ul style={{color:"#262D4D"}}>
                <li style={{fontWeight: "bold", color:"#262D4D"}}>
                    HOME
                </li> /
                <li style={{color:"#262D4D"}}>
                    ARTICLES
                </li>
            </ul>
        </nav>
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", fontWeight: 600, textAlign:"center"}}>{title}</h1>
      </header>
    </>
  )
}

export default Header
