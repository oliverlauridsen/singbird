import React from "react";
import styled from "styled-components";
import login from "../../img/login.svg";
import register from "../../img/register.svg";
import { NavLink } from "react-router-dom";

export default function LoginOrRegister() {
	return (
		<Wrapper>
			<div className='header'>singbird</div>
			<div className='main-content'>
				<div>
					<span>
						<img src={login} alt='' />
						<h1>Already have an account?</h1>
						<p>Pick up where you left off.</p>
						<NavLink className='main-button' to='/login'>
							LOG IN
						</NavLink>
					</span>
				</div>
				<div>
					<span>
						<img src={register} alt='' />
						<h1>New to the app?</h1>
						<p>Get started with your efficient practise now.</p>
						<NavLink className='main-button' to='/register'>
							REGISTER
						</NavLink>
					</span>
				</div>
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: auto;
		width: 100%;

		div {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			height: 75vh;
			margin: auto;

			&:first-child {
				border-right: 1.5px solid #432759;
			}

			span {
				margin: auto;
				display: flex;
				flex-direction: column;

				img {
					height: 45%;
					width: auto;
					padding-bottom: 50px;
				}

				h1 {
					margin-bottom: 10px;
					font-size: 30px;
				}
				p {
					font-size: 22px;
					margin: 0;
				}
			}
		}
	}

	.main-button {
		font-weight: 900;
		font-size: 20px;
		color: white;
		background-color: #783da6;
		padding: 10px 30px;
		border-radius: 10px;
		border: none;
		width: fit-content;
		margin: 25px auto auto auto;
		cursor: pointer;
		text-decoration: none;
	}
`;
