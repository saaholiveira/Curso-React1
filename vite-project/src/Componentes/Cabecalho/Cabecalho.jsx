import styles from './Cabecalho.module.css';


const Cabecalho = () => {
    return (
        <div className={styles.Cabecalho}>
            <h1>
                <span>ToDo</span>
                List
            </h1>
        </div>
    );
};

export { Cabecalho };