import { Botao } from '../../Botao';

import style from './ListaTarefasitem.module.css';

const ListaTarefasitem = (props) => {
    const {nome} = props;
    return (
      <li className={style.ListaTarefasitem}>
         {nome}
         <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
      </li> 
    );
};

export { ListaTarefasitem };