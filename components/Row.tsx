import styled from "styled-components";
import { StyledProps } from "styled-components";

type Props = StyledProps<{
    justifyContent?: "space-between" | "center" | "flex-end" | "space-around" | "flex-start";
    alignItems?: "space-between" | "center" | "flex-end" | "space-around" | "flex-start";
    flexDirection?: "column" | "row-reverse" | "column-reverse" | "row";
}>;

const Row = styled.div((props: Props) => `
display:flex;
justify-content: ${props.justifyContent || "flex-start"};
align-items: ${props.alignItems || "flex-start"};
flex-direction: ${props.flexDirection || "row"};
flex-wrap: wrap;
margin: 0 -15px;
`);

export default Row;