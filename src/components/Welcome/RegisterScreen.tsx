import styled from "styled-components";
import RegisterForm from "./RegisterForm";
import register from "../../img/register.svg";

export default function RegisterScreen() {
	return (
		<Wrapper>
			<div className='header'>singbird</div>
			<div className='main-content'>
				<img src={register} alt='Register' />
				<h1> Register your email</h1>
				<RegisterForm />
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background: #f9f4fc;
	height: 100vh;
	padding: 0 10%;
	font-family: SF;
	padding-top: 50px;
	color: #2a2a3b;
	display: flex;
	flex-direction: column;

	.header {
		font-size: 30px;
		font-weight: 700;
	}

	.main-content {
		margin: auto;
		display: flex;
		flex-direction: column;
		width: 100%;

		img {
			margin: auto;
			width: 300px;
		}

		h1 {
			color: #2a2a3b;
			font-size: 35px;
			text-align: center;
			margin-bottom: 0px;
			font-weight: 700;
			margin-top: 50px;
		}

		p {
			text-align: center;
			font-size: 25px;
		}

		.main-button {
			font-weight: 800;
			font-size: 20px;
			color: white;
			background-color: #783da6;
			padding: 15px 30px;
			border-radius: 10px;
			border: none;
			width: fit-content;
			margin: 10px auto auto auto;
			cursor: pointer;
			text-decoration: none;
		}
	}
`;
