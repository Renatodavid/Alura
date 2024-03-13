import { App } from "../layouts/App";


export const Home = () => (
  <App>
    <div className="container-fluid">
    <h1 className="text-xl text-sky-600">Login</h1>
    </div>
    <div className="container">
    
      <form className="forms" type="submit">
        <label className="text " htmlFor="email">Digite o seu melhor e-mail</label>
        <input type="text" placeholder="email@exemplo.com" />
       <label className="text" htmlFor="password">Senha</label>
        <input type="password" placeholder="********" />
        <button type="submit">Acessar conta</button>
        <span className="text-sm">Não possui uma conta? <a href="NovaConta" >Crie uma agora!</a></span>
      </form>
     
      </div>
      
  
  </App>
);
