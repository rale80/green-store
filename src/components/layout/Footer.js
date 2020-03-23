import React from 'react';
import styles from './Footer.module.css';

const Footer = props => {
	return (
		<div className={styles.Footer}>
			<div className="container">
				<div className="row">
					<p>Copyright &copy;GreenStore {new Date().getFullYear(Date.now)}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
