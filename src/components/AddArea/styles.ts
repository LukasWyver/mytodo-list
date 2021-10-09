import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #363641;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;

    .include{
        margin-right: 5px;
    }
    
    input{
        border: 0;
        background: transparent;
        outline: 0;
        color: #e9e9e9;
        font-size:18px;
        flex: 1;
    }
`;
