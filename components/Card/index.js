import Image from 'next/image'
import s from './card.module.css'

export const Card = ({src, title='Card Component'}) => {
    return(
        <div className={s.container}>
        <Image src={src}
        alt='Some card' 
        className={s.card}
        width={500}
        height={250}/>
        <p className={s.text}>{title}</p></div>
    )
}