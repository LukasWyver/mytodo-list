import { useState,KeyboardEvent } from "react";
import * as C from "./styles";
import { BiPlusCircle } from "react-icons/bi";

type Props ={
    onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
        onEnter(inputText);
        setInputText('');
    }
  } 

  return (
    <C.Container>
      <div className="include">
        <BiPlusCircle color="#7FCD91" size="28" />
      </div>
      <input
        type="text"
        placeholder="Digite sua próxima tarefa."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
