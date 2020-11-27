import styles from './example.module.css'

export const Example = ({err}) => {
    return (
    <div className={`${styles.example} ${err ? styles.error : ''}`}>Hello World</div>
    )
}