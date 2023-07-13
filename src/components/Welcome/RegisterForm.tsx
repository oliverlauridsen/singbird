import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import verifyUserAuth from "../firebase/verifyUserAuth";

type Inputs = {
	email: string;
	password: string;
};

function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [userId, setUserId] = useState<null | string>(null);
	const navigate = useNavigate();

	useEffect(() => {
		verifyUserAuth((uid) => {
			// Use the uid value in this callback function
			setUserId(uid);
		});
	}, [userId]);

	const registerUser = async () => {
		try {
			await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			navigate("/");
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
				if (error.message == "Firebase: Error (auth/email-already-in-use).")
					navigate("/");
			}
		}
	};

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register("email", { required: "Email is required" })}
				placeholder='Email'
				onChange={(event) => {
					setRegisterEmail(event.target.value);
				}}
			/>
			<span>{errors.email?.message}</span>
			<input
				type='password'
				{...register("password", { required: "Password is required" })}
				placeholder='Password'
				onChange={(event) => {
					setRegisterPassword(event.target.value);
				}}
			/>
			<span>{errors.password?.message}</span>
			<input value='REGISTER USER' type='submit' onClick={registerUser} />
		</StyledForm>
	);
}

const StyledForm = styled.form`
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

	input[type~="submit"] {
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

export default RegisterForm;
