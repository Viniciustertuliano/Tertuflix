import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
//import CadastroVideo from './pages/cadastro/Video';
//import CadastroCategoria from './pages/cadastro/Categoria';
import page404 from './pages/page404';

//      <Route path="/cadastro/video" component={CadastroVideo}  />
//      <Route path="/cadastro/categoria" component={CadastroCategoria}  />

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);
