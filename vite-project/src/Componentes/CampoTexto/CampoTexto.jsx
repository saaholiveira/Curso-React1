import style from './CampoTexto.module.css';

const CampoTexto = (props) => {
    return (
        <input type="text" 
        ClassNmae={style.CampoTexto}
        {...props} />
    );
};
export { CampoTexto };