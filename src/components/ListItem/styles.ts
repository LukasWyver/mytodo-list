import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: rgba(54,54,65, 0.3);
    padding:10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px; 
        margin-right: 15px;
        -webkit-appearance:none;
        outline:none;
        transition: .5s;

       &:before{
        content:'';
        position: absolute;
        width:  ${done ? "11px" : "25px"};
        height: 25px; 
        border: ${done ? "2.5px solid #7FCD91" : "2px solid #e9e9e9"};
        box-sizing:border-box;
        transition: .5s;
        transform:${done ? "rotate(45deg) translate(5px, -15px)" : ""};
        border-left:${done ? "none" : ""};
        border-top:${done ? "none" : ""};        
       }
    }

    label {
        color: ${done ? "#62626b" : "#c9c9c9"};
        font-weight: ${done ? 'normal': '500'};
    }


`
);
