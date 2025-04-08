import { Botao, CampoTexto } from '../../Componentes';

import style from './CriarTarefa.module.css';

const FormCriarTarefa = () => {
    return (
        <form className={style.FormCriarTrefa}>
            <CampoTexto />
            <Botao texto="+" />
        </form>
    );
};
export { FormCriarTarefa };