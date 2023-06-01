import styled from "styled-components";
import account from "../../img/account.svg";
import notification from "../../img/notification.svg";
import flame from "../../img/flame.svg";
import UnlockPremium from "./UnlockPremium";
import DailyQuests from "./DailyQuests";

export default function SecondarySideBar() {
	return (
		<StyledMainNav>
			<div className='top-bar-wrapper'>
				<span>
					<img className='account-image' src={account} alt='' />
					<p> Oliver Lauridsen </p>
				</span>
				<img src={notification} alt='' />
			</div>
			<div className='streak-wrapper'>
				<img src={flame} alt='' /> 0
			</div>
			<UnlockPremium />
			<DailyQuests />
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
	background-color: #f9f4fc;

	.account-image {
		width: 30px;
		height: 30px;
	}

	.top-bar-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		span {
			align-items: center;
			display: flex;
			flex-direction: row;
		}

		p {
			margin: 0 0 0 10px;
			font-weight: 600;
		}
	}

	.streak-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20px;
		font-weight: 600;
		border: 2px solid #d0ccd5;
		width: fit-content;
		padding: 5px 10px;
		color: #cbc3ca;
		border-radius: 5px;

		img {
			margin-right: 10px;
		}
	}
`;
