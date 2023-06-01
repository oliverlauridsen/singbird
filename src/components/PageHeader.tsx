import styled from "styled-components";
import { sharedButtonStyles } from "../styles/sharedButtonStyles";
interface PageHeaderProps {
	color: string;
	firstImage?: string;
	heading: string;
	body: string;
	secondImage?: string;
	optionalWarmupText?: string;
	optionalButton?: string;
}

interface StyledPageHeaderProps {
	color: string;
}

export default function PageHeader({
	color,
	firstImage,
	heading,
	body,
	secondImage,
	optionalWarmupText,
	optionalButton,
}: PageHeaderProps) {
	return (
		<StyledPageHeader color={color}>
			<div>
				<h1> {heading} </h1>
				<p> {body} </p>
			</div>
			{firstImage && <img src={firstImage} alt='firstImage' />}
			{secondImage && <img src={secondImage} alt='secondImage' />}
			<div>
				{optionalWarmupText && <p className='bolded'> {optionalWarmupText} </p>}
				{optionalButton && <button> {optionalButton} </button>}
			</div>
		</StyledPageHeader>
	);
}

const StyledPageHeader = styled.div<StyledPageHeaderProps>`
	width: 100%;
	padding: 20px;
	background-color: ${(props) => props.color};
	display: flex;
	flex-direction: row;
	color: white;
	border-radius: 20px;
	justify-content: space-between;

	h1 {
		font-size: 25px;
		margin: 0 0 10px 0;
	}
	.bolded {
		font-weight: 700;
		margin: auto;
		text-align: center;
	}
	p {
		margin: 0;
	}
	div {
		display: flex;
		flex-direction: column;
		margin: auto;
	}

	button {
		${sharedButtonStyles}
	}
`;
