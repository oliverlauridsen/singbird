import singingBird from "../img/singing-bird.svg";
import { Link } from "react-router-dom";

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
			<Link className='main-button' to='/start'>
				START SINGING JOURNEY
			</Link>
		</div>
	);
}
