import styled from 'styled-components';

export const FolhaContainer = styled.div`
    display: flex;
    height: 90vh;
    flex-direction: column;
    font-size: 0.9rem;
`
export const FormFolha = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
    margin: 0 auto;
    input {
        margin: 0.3rem 0.7rem 0 0;
    }
`