import { Cabecalho } from './Componentes';
import { Conteudo } from './Componentes';
import { Rodape } from './Componentes';
import { inicial } from './pages';
import './global.css';

const App = () => {
  return (
    <>

      <Cabecalho nomeUsuario="Sarah" />
      <Conteudo>
        <inicial />
      </Conteudo>
      <Rodape criador="Sarah"/>
    </>
  );
};

export { App };
