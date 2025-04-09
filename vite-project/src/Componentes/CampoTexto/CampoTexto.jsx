import style from './CampoTexto.module.css';

const CampoTexto = (props) => {
    return (
        <input type="text" 
        classNmae={style.CampoTexto}
        {...props} />
    );
};
export { CampoTexto };