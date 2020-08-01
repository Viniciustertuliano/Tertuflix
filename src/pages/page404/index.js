import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Canvas = styled.canvas`
body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
          width: 220px; 
          height:380px;
          border: 1px solid #fff;
          display: block;
          margin: 0 auto;
        
`;

function page404() {
  return (
    <PageDefault>
      <Canvas />

    </PageDefault>
  );
}

export default page404;