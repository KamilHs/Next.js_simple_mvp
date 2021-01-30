import styled from "styled-components";

const Container = styled.div`
    display:block;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
@media screen and (min-width: 576px) {  
    width: 540px;
}
 
@media screen and (min-width: 768px) {  
    width: 720px;
}
 
@media screen and (min-width: 992px) { 
    width: 960px;
}
 
@media screen and (min-width: 1200px) {  
    width: 1140px;
}
`

export default Container;