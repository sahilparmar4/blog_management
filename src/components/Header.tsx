import React from 'react'

interface HeaderProps {
    title:string | undefined
}

const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    <>
      <header>
        <nav>
            <ul>
                <li style={{fontWeight: "bold"}}>
                    HOME
                </li> /
                <li>
                    ARTICLES
                </li>
            </ul>
        </nav>
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", fontWeight: 600}}>{title}</h1>
      </header>
    </>
  )
}

export default Header
