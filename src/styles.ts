
import styled from 'styled-components';

const COLORS = {blue: '#687bf7',
lightblue: '#72d9ef',
cyan: '#79e7eb'}

export const GridPage = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 550px) {
        display: block;
    }
`;

export const StyledGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
   grid-auto-rows: 1fr;
   max-width: 550px;
   &::before {
       content: '';
       width: 0;
       padding-bottom: 100%;
       grid-row: 1 / 1;
       grid-column: 1 / 1;
   }
   > *:first-child {
       grid-row: 1 / 1;
       grid-column: 1 / 1;
   }
   > * {
       background: rgba(0,0,0,0.1);
       border: 1px white solid;
   }
     
`;

export const StyledCard = styled.div`
    &:hover {
        cursor: move;
        border: 1px solid ${COLORS.lightblue};
        color: white;

   span {
        background-color: ${COLORS.cyan};
   }
`;