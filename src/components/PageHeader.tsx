import styled from "styled-components";

interface PageHeaderProps {
	color: string;
}

interface StyledPageHeaderProps {
	color: string;
}

export default function PageHeader({ color }: PageHeaderProps) {
	return <StyledPageHeader color={color}>test</StyledPageHeader>;
}

const StyledPageHeader = styled.div<StyledPageHeaderProps>`
	width: 100%;
	padding: 50px 75px;
	background-color: ${(props) => props.color};
`;
