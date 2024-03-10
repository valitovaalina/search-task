import { ErrorInfo } from '@components/ErrorInfo/ErrorInfo';
import { SearchForm } from '@components/SearchFrom/SearchForm';
import { SearchContext } from '@components/SearchResults/SearchContext';
import SearchResults from '@components/SearchResults/SearchResults';
import { UseSearchResults } from '@components/hooks/UseSearchResults';

export default function App(): React.ReactElement {
  const { users, currentQuery, handleInputChange, error } = UseSearchResults();

  return (
    error === '' ?
      <SearchContext.Provider value={{ users }}>
        <SearchForm handleInputChange={handleInputChange} />
        {currentQuery ? <SearchResults /> : ''}
      </SearchContext.Provider>
      : <ErrorInfo error={error} />
  );
}
