import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";

interface ProgressBarProps {
	className?: string;
	progressBarPercentage?: number;
}

export const ProgressBarWithLabel = (props: ProgressBarProps) => {
	const { className } = props;
	const { progressBarPercentage } = props;

	const [progressPercentage, setprogressPercentage] = useState(
		progressBarPercentage
	);

	return <ProgressBar className={className} now={progressPercentage} />;
};

export const StyledProgressBar = styled(ProgressBarWithLabel)`
	width: 100%;
	background-color: white;
	border-radius: 5px;

	.progress-bar {
		background-color: #783da5;
		color: white;
		font-weight: 900;
		border-radius: 5px;
		height: 10px;
	}
`;

export default ProgressBarWithLabel;
