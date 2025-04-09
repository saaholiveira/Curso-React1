import { ListaTarefasitem } from "./ListaTarefasitem";

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
    const tarefas = [
        { id: 1, nome: 'Item 1' },
        { id: 2, nome: 'Item 2' },
        { id: 3, nome: 'Item 3' },
        { id: 4, nome: 'Item 4' },
    ];
    return (
        <ul className={style.ListaTarefas}>
            {tarefas.map(item => <ListaTarefasitem key={item.id} nome={item.nome} />)}
        </ul>
    )
};

export { ListaTarefas };