import { FC } from 'react';

import Button from 'components/Buttons';

import { staticLinks } from 'routes/routingLinks.ts';

import ImgHelmet from 'assets/images/global/helmet.png';
import styles from './styles.module.scss';


const MainPage: FC = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.introWrapper}>
        <section className={styles.intro}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Приглашаем в Кибер-войну
            </h1>
            <p className={styles.subTitle}>
              Играйте вместе с друзьями и узнавайте больше о информационной безопасности
            </p>
            <a href={staticLinks.rooms}>
              <Button>Начать игру</Button>
            </a>
          </div>
          <div>
            <img className={styles.image} src={ImgHelmet} alt=""/>
          </div>
        </section>
      </div>

      <div className={styles.rulesBackground}>
        <section className={styles.rules}>
          <h1 className={styles.title}>
            Правила игры
          </h1>
          <div className={styles.text}>
            <p>Цель в этой игре - стать последним игроком, который выживет в мире цифровых угроз. Каждый игрок начинает с определенным количеством виртуальной валюты и одной фишкой, размещенной на "Поле старта". </p>
            <p>Игроки бросают два кубика и двигаются по игровой доске, на которой расположены 40 полей с разнообразными вопросами по информационной безопасности. Когда игрок попадает на поле, ему предлагается ответить на вопрос. Правильные ответы позволяют игроку стать владельцем поля, а неверные могут потребовать оплаты "ренты" другому игроку, если поле уже принадлежит ему.</p>
            <p> Вопросы охватывают различные аспекты информационной безопасности, от вирусных атак до законодательства и мер безопасности.</p>
          </div>
          <a href={staticLinks.rooms}>
            <Button>Играть</Button>
          </a>
        </section>
      </div>

    </main>
  );
};

export default MainPage;