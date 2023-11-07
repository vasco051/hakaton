import {FC, useEffect, useState} from "react";
import styles from "./styles.module.scss"
import  IcDice1 from '../../../assets/images/dice/dice1.svg'
import  IcDice2 from '../../../assets/images/dice/dice2.svg'
import  IcDice3 from '../../../assets/images/dice/dice3.svg'
import  IcDice4 from '../../../assets/images/dice/dice4.svg'
import  IcDice5 from '../../../assets/images/dice/dice5.svg'
import  IcDice6 from '../../../assets/images/dice/dice6.svg'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import { getRandomDice} from "../../../store/reducers/diceSlice.ts";
interface  IDiceProps {
  userId: number
}


export const Dice:FC<IDiceProps>= () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const { random } = useAppSelector(state => state.diceReducer)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getRandomDice())
        setIsVisible(true);
        setTimeout(()=>{setIsVisible(false);},600)
    },[])

    const  diceEdges= [IcDice1,IcDice2,IcDice3,IcDice4,IcDice5,IcDice6]

    return(
      <>
          {isVisible && <div className={styles.wrapper}>
              <div className={styles.cubesWrapper}>

                  <div className={styles.cube}>
                      <img src={diceEdges[random[0]-1]} alt=""/>


                  </div>
                  <div className={styles.cube}>
                      <img src={diceEdges[random[1]-1]} alt=""/>

                  </div>
              </div>
          </div> }

      </>

    )
}