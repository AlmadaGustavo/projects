import React, { Component } from 'react';
import Topo from './components/Topo';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import NotFound from './components/NotFound';
import Catalogo from './components/Catalogo';
import Home from './components/Home';
import Rodape from './components/Rodape';
import Livro from './components/Livro';
import axios from "axios";
import { useParams } from 'react-router-dom';

class App extends Component {
  state ={
    livros: [],
    erro:false,
  };
  async componentDidMount(){
    try{
      const {data:livros} = await axios.get("/api/todosOsLivros.json");
      this.setState({livros});
    }catch(error){
      console.log(error);
      this.setState({erro: true});
    }
  }

  render() {
    const{livros,erro} = this.state;
    return (
      <Router>
        <main className='principal'>
          <Topo/>
          <Routes>
            <Route path='/Home' element = {<Home livros={livros}/>}></Route>
            <Route path='/Frontend' element = {<Frontend livros={livros}/>}></Route>
            <Route path='/Programacao' element = {<Programacao livros={livros}/>}></Route>
            <Route path='/Design' element = {<Design livros={livros}/>}></Route>
            <Route path='/Catalogo' element = {<Catalogo livros={livros}/>}></Route>
            <Route
                path = "/livro/:livroSlug"
                element ={<LivroWrapper livros = {livros} />}/>
            <Route path='*' element = {<NotFound/>}></Route>
          </Routes>
          <Rodape/>
        </main>
      </Router>
      
    
    );
  }
}
//define uma função para lidar com a busca a exibiçao de um livro especifico
  function LivroWrapper({livros}){
    const {livroSlug} = useParams(); //hook que extrai parametros da URL
    const livro = livros.find(livro => livro.slug === livroSlug);
    if(livro){
      return <Livro livro ={ livro}/>
    }else{
      return <NotFound/>
    }
  }


export default App;
