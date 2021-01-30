import styled from "styled-components";
import { StyledProps } from "styled-components";


type Props = StyledProps<{
    error?: boolean
}>

const TextArea = styled.textarea((props: Props) => `
width:100%;
padding:10px;
border-radius:8px;
height:100px;
outline:none;
resize: none;
border: 1px solid #aaa;
transition: box-shadow 0.3s ease;
&:focus{
    box-shadow: 0 0 4px 0 #aaa;
}
${props.error ? "border-color:red" : ""}
`);

export default TextArea;