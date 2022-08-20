import { Search, SearchInput , SearchButton} from "./searchStyles"

export const SearchWrapper = ()=>{
  return (
    <Search>
      <SearchInput placeholder="Digite o seu perfil"></SearchInput>
      <SearchButton>{'Buscar perfil'}</SearchButton>
    </Search>
  )
}