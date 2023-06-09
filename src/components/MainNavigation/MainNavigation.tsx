import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import house from "../../img/house.svg";
import mic from "../../img/mic.svg";
import person from "../../img/person.svg";
import settings from "../../img/settings.svg";
import logout from "../../img/logout.svg";

export default function MainNavigation() {
	return (
		<StyledMainNav>
			<div className='content-wrapper'>
				<div>
					<div className='logo'>singbird</div>
					<ul>
						<NavLink
							to='/'
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}>
							<img src={house} alt='' />
							<span> Learn </span>
						</NavLink>
						<NavLink
							to='review'
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}>
							<img src={mic} alt='' />
							<span> Review </span>
						</NavLink>
						<NavLink
							to='profile'
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}>
							<img src={person} alt='' />
							<span> Profile </span>
						</NavLink>
						<NavLink
							to='settings'
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}>
							<img src={settings} alt='' />
							<span> Settings </span>
						</NavLink>
					</ul>
				</div>

				<NavLink
					to='logout'
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}>
					<img src={logout} alt='' />
					<span> Log out </span>
				</NavLink>
			</div>
		</StyledMainNav>
	);
}

const StyledMainNav = styled.div`
	height: 100%;
	background-color: #432759;
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	left: 0;
	padding: 20px;

	.content-wrapper {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 95%;
	}

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
		padding: 10px 50px 10px 15px;
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
		padding: 10px 50px 10px 15px;
		margin: 0;
		list-style: none;
		margin-bottom: 20px;
		display: flex;

		&:last-child {
			margin-bottom: 0;
		}

		&:hover {
			color: white;
			padding: 10px 50px 10px 15px;
			background-color: #783da6;
			border-radius: 15px;
			display: flex;
		}

		span {
			margin: auto auto auto 20px;
		}
	}
`;
