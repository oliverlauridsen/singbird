import styled from "styled-components";

export default function SecondarySideBar() {
	return (
		<StyledMainNav>
			<div>Secondary bar</div>
		</StyledMainNav>
	);
}

const StyledMainNav = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	padding: 20px;
	border-left: 2px solid #d0ccd5;
	justify-content: space-between;

	.logo {
		font-size: 30px;
		font-weight: 700;
		color: white;
		cursor: pointer;
	}

	ul {
		padding: 0;
		padding-top: 30px;
		margin: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	.active {
		color: white;
		padding: 10px 15px;
		background-color: #783da6;
		border-radius: 15px;
		display: flex;

		span {
			margin: auto auto auto 20px;
		}

		img {
			filter: brightness(5);
		}
	}

	a {
		font-weight: 700;
		color: #8b73a4;
		text-decoration: none;
		padding: 10px 15px;
		margin: 0;
		list-style: none;
		margin-bottom: 20px;
		display: flex;

		&:last-child {
			margin-bottom: 0;
		}

		span {
			margin: auto auto auto 20px;
		}
	}
`;
