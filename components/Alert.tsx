import styled from "styled-components";
import { StyledProps } from "styled-components";

type Props = StyledProps<{
    type: "success" | "danger";
}>

const Alert = styled.p((props: Props) => `
width:100%;
padding:30px 15px;
margin: 20px 0;
font-weight:bold;
color:${props.type === "success" ? "#2c693b" : "#a15c63"};
background-color: ${props.type === "success" ? "#d4edda" : "#f8d7da"};
`);

export default Alert;