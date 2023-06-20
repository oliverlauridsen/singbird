import { NavLink } from "react-router-dom";
import singingBird from "../img/singing-bird.svg";

export default function StartScreen() {
	return (
		<div className='main-content'>
			<img src={singingBird} alt='Bird singing' />
			<h1>
				Welcome to your <br /> personal pitch tutor
			</h1>
			<p>
				Start guiding your practise towards <br /> becoming a better musician
			</p>
			<NavLink className='main-button' to='/start'>
				START SINGING JOURNEY
			</NavLink>
		</div>
	);
}
