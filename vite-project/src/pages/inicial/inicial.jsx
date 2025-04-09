import { FormCriarTarefa, ListaTarefas } from "../../Componentes";

import style from './inicial.module.css';

const Inicial = () => {
    return (
        <div className={style.inicial}>
        <FormCriarTarefa />
        <ListaTarefas />
        </div>
    );
};
export { Inicial };
