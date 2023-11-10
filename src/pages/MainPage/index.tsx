import {FC} from 'react';

import PageWrapper from "components/Layout/PageWrapper";
import {LinkButton} from "components/UI-kit/Buttons";

import {staticLinks} from "routes/routingLinks.ts";

import ImgHelmet from 'assets/images/global/helmet.png';
import styles from './styles.module.scss';

const MainPage: FC = () => {
	return (
		<PageWrapper>
			<section className={styles.mainSection}>
				<div className={styles.content}>
					<h2 className={styles.title}>Приглашаем в Кибер-войну</h2>
					<p>
						Играйте вместе с друзьями<br/>
						и узнавайте больше о информационной безопасности
					</p>
					<LinkButton to={staticLinks.rooms}>Начать игру</LinkButton>
				</div>
				<img src={ImgHelmet} alt="logo" className={styles.img}/>
			</section>

			<section className={styles.purposeSection}>
				<div className={styles.content}>
					<h2 className={styles.title}>Цель игры</h2>

					<p>
						Цель в этой игре - стать последним игроком, который выживет в мире цифровых угроз. Каждый игрок начинает с
						определенным количеством виртуальной валюты и одной фишкой, размещенной на "Поле старта". <br/><br/>
						Игроки бросают два кубика и двигаются по игровой доске, на которой расположены 40 полей с разнообразными
						вопросами по информационной безопасности. Когда игрок попадает на поле, ему предлагается ответить на вопрос.
						Правильные ответы позволяют игроку стать владельцем поля, а неверные могут потребовать оплаты "ренты"
						другому игроку, если поле уже принадлежит ему.<br/><br/>
						Вопросы охватывают различные аспекты информационной безопасности, от вирусных атак до законодательства и мер
						безопасности.
					</p>

					<LinkButton to={staticLinks.rooms}>Играть!</LinkButton>
				</div>
			</section>
		</PageWrapper>
	);
};

export default MainPage;