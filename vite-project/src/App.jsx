import { Cabecalho } from './Componentes';
import { Conteudo } from './Componentes';
import { Rodape } from './Componentes';
import { Inicial } from './pages';
import './global.css';

const App = () => {
  return (
    <>

      <Cabecalho nomeUsuario="Sarah" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Sarah"/>
    </>
  );
};

export { App };
