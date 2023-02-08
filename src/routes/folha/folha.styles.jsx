import styled from 'styled-components';

export const FolhaContainer = styled.div`
    display: flex;
    height: 90vh;
    flex-direction: column;
    font-size: 0.9rem;
    background-color: #ffffff;
    
`
export const FormFolha = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    margin: 0 auto;
    
    padding
    input {
        margin: 0.3rem 0.7rem 0 0;
    }
`