import styled from "styled-components";
import { StyledProps } from "styled-components";

type Props = StyledProps<{
    center?: boolean
}>

const Button = styled.button((props: Props) => `
${props.center
        ? "margin: 0 auto; display:block;"
        : ""}
outline:none;
padding:6px 10px;
border-radius:8px;
background-color:#0c59cc;
color:white;
font-weight:bold;
border:none;
font-size:18px;
cursor:pointer;
`);

export default Button;