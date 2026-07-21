import styles from "./styles.module.css"

type Props = {
    value?: string
}

function Letter({ value = "" }: Props) {
    return (
        <div className={styles.container}>
            <span>{value}</span>
        </div>
    )
}

export default Letter