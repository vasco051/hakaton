import {FC, useEffect, useState} from "react";
import styles from "./styles.module.scss"
interface  IDiceProps {
  userId: number
}

export const Dice:FC<IDiceProps>= () => {
    const min =1;
    const max =7;
    const [random,setRandom] = useState<number[]>()
    useEffect(()=>{
        setRandom([Math.floor(Math.random() * (max - min) + min),Math.floor(Math.random() * (max - min) + min)])
    },[])

    return(
        <div className={styles.wrapper}>
            <div className={styles.cubesWrapper}>
                <div className="cube">
                    <div className="face front">Front</div>
                    <div className="face back">Back</div>
                </div>
            </div>

                {random}

        </div>
    )
}