import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    background-color: inherit;
    min-width: 0;
    overflow: hidden;
    height: 90vh;
  
    @media (min-width: 450px) {
      height: 90vh;
    }
`;

export const FolderContainer = styled.div`
    margin-top: auto;
    justify-content: flex-end;
    display: flex;
    height:15%;
    padding-top: 2rem;
    
    svg {
        height: 100%;
        width: 30%;
    }

    @media (min-width: 450px) {
      height:15%;
    }

    
`

export const LogoTextoContainer = styled.div`
    height:15%;

    svg {
        height: 100%;
    }    
`