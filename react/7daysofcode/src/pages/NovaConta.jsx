import React from 'react'

export default function NovaConta() {
  return (
    
    <div className='container-form'>
      <div className='container-fluid'>
      <h1>Criar conta</h1>
      </div>
      
        <form className='formNovaConta' action="onsubmit"></form>
        <label htmlFor="name">Digite seu nome</label>
        <input className='inputNovaConta' type= "text" placeholder="nome" />
        <label htmlFor="sobrenome">Digite seu sobrenome</label>
        <input className='inputNovaConta' type="text" placeholder="sobrenome" />
        <label htmlFor="email">Digite seu melhor e-mail</label>
        <input type="text" placeholder="email@exemplo.com" />
        <label htmlFor="password">Senha</label>
        <input className='inputNovaConta' type="password" placeholder="********" />
        <button type="submit">Criar conta</button>
        <span className="text-sm">Ja possui uma conta? <a href="Home" >Acesse agora!</a></span>
    </div>
  )
}
