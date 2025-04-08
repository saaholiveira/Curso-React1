import { Cabecalho } from './Componentes';
import { Conteudo } from './Componentes';
import { Rodape } from './Componentes';
import './global.css';

const App = () => {
  return (
    <>

      <Cabecalho nomeUsuario="Sarah" />
      <Conteudo>
       <h1>texto</h1>
      </Conteudo>
      <Rodape criador="Sarah"/>
    </>
  );
};

export { App };
