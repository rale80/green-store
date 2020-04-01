import React from 'react';
import FeaturedImage from '../../images/fruits.jpg';
import styles from './Home.module.css';
import classNames from 'classnames';
import CtaCard from './CtaCard';
import Jumbo from './Jumbo';

const Home = props => {
	return (
		<div className={classNames(styles.Home, 'row')}>
			<div className={classNames(styles.featured, 'col-12')}>
				<img src={FeaturedImage} alt="Featured" />
			</div>
			<div className={classNames(styles.info, 'col-md-8')}>
				<h1>Welcome to Green Store</h1>
				<p>
					Fruit and vegetables should be an important part of your daily diet.
					They are naturally good and contain vitamins and minerals that can
					help to keep you healthy. They can also help protect against some
					diseases. No single fruit or vegetable provides all of the nutrients
					you need to be healthy. Eat plenty every day.
				</p>
				<Jumbo />
				<p>
					A diet rich in vegetables and fruits can lower blood pressure, reduce
					the risk of heart disease and stroke, prevent some types of cancer,
					lower risk of eye and digestive problems, and have a positive effect
					upon blood sugar, which can help keep appetite in check. Eating
					non-starchy vegetables and fruits like apples, pears, and green leafy
					vegetables may even promote weight loss. Their low glycemic loads
					prevent blood sugar spikes that can increase hunger.
				</p>
			</div>
			<div className={classNames(styles.cta, 'col-md-4')}>
				<CtaCard />
			</div>
		</div>
	);
};

export default Home;
