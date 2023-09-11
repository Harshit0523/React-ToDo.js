import React from 'react'

export const Footer = () => {
  let footerStyle ={
    
  postion : "absolute",
  top: "100vh",
  width: "100%"

  }
  return (
    <Footer className ="bg-dark text-light py-2" style = {footerStyle}>
      <p className= "text-center">
      Copyright &copy; MyTodoList.com
      </p>
    </Footer>
  )
}
