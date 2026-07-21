import styles from "./styles.module.css"
import icon from "../../assets/tip.svg"

type Props = {
    tip: string
}

function Tip({ tip }: Props) {
    return (
        <div className={styles.container}>
            <img src={icon} alt="icone de dica" />

            <div>
                <h3>Dica</h3>
                <p>{tip}</p>
            </div>
        </div>
    )
}

export default Tip