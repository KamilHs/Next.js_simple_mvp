import styled from "styled-components";
import { StyledProps } from "styled-components";

const GRID_SIZE: number = 12;
const DEFAULT_SIZE: number = 12;
type Props = StyledProps<{
    xs?: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    sm?: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    md?: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    lg?: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    xl?: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    marginY?: 1 | 2 | 3 | 4 | 5
}>;

const Col = styled.div((props: Props) => `
margin: ${(props.marginY || 0) * 8}px 0;
padding: 0 15px;
width:${((props.xs || DEFAULT_SIZE) / GRID_SIZE) * 100}%;
@media screen and (min-width: 576px) {  
    &{
        width:${((props.sm || props.xs || DEFAULT_SIZE) / GRID_SIZE) * 100}%;
    }
}
@media screen and (min-width: 768px) {  
    &{
        width:${((props.md || props.sm || props.xs || DEFAULT_SIZE) / GRID_SIZE) * 100}%;
    }
}
@media screen and (min-width: 992px) { 
    &{
        width:${((props.lg || props.md || props.sm || props.xs || DEFAULT_SIZE) / GRID_SIZE) * 100}%;
    }
}
@media screen and (min-width: 1200px) {  
    &{
        width:${((props.xl || props.lg || props.sm || props.xs || DEFAULT_SIZE) / GRID_SIZE) * 100}%;
    }
}
`);

export default Col;
