import { useState } from "react";
import { Form, SearchInput, SearchButton } from "./searchStyles";

export const SearchWrapper = ({getUserProfile}) => {
  const [valueInput, setValueInput] = useState("");

  const getValueInput = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <Form onSubmit={(event) =>{
      event.preventDefault()
      getUserProfile(valueInput)

      setValueInput("")
    }}>
      <SearchInput
        placeholder="Digite o seu perfil"
        value={valueInput}
        onChange={getValueInput}
      />
      <SearchButton>{"Buscar perfil"}</SearchButton>
    </Form>
  );
};
