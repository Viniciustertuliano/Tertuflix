import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>cadastro de Videos</h1>

      <Link to='/cadastro/categoria'> Cadastro de Categorias</Link>
    </PageDefault>
  );
}

export default CadastroVideo;