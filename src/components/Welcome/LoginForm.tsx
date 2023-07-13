import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const navigate = useNavigate();
	const today = new Date().getDate();

	//TODO: REFACTOR AWAY FROM :any
	const signInUserWithEmailAndPassword = (
		auth: any,
		email: any,
		password: any,
		e: any
	) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				// Signed in
				navigate("/");
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	return (
		<StyledLoginForm>
			<input
				onChange={(event) => setUserEmail(event.target.value)}
				type='text'
				placeholder='Email'
			/>
			<input
				onChange={(event) => setUserPassword(event.target.value)}
				type='password'
				placeholder='Password'
			/>
			<button
				placeholder='Password'
				onClick={(event) =>
					signInUserWithEmailAndPassword(auth, userEmail, userPassword, event)
				}>
				Sign in with email
			</button>
		</StyledLoginForm>
	);
};

export const StyledLoginForm = styled("form")`
	width: 50%;
	margin: 50px auto 0 auto;
	display: flex;
	flex-direction: column;
	font-size: 16px;
	text-align: left;

	input {
		padding: 10px;
		border: none;
		border-radius: 5px;
		margin-bottom: 20px;
		padding: 1em;
		font-size: 1em;
		font-weight: 600;
	}

	button {
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
`;

export default LoginForm;
