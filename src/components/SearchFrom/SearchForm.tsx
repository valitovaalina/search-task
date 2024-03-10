import { ChangeEventHandler } from 'react';
import './styles.css';

type SearchFormProp = {
  handleInputChange: ChangeEventHandler<HTMLInputElement>,
}

export function SearchForm(props: SearchFormProp): React.ReactElement {
  return (
    <div className="searchForm">
      <form>
        <input type="text" placeholder="Поиск пользователя" onChange={props.handleInputChange} />
      </form>
    </div>
  );
}
