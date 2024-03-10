import { useEffect, useState } from 'react';
import { User } from '@components/types/user';
import { fetchData } from '@services/api';

type UseSearchResultsType = {
  users: User[],
  currentQuery: string,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error: string,
}

export function UseSearchResults(): UseSearchResultsType {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (currentQuery !== '') {
      if (timerId) {
        clearTimeout(timerId);
      }
      const id = setTimeout(fetchData, 500, currentQuery, setError, setSearchResults);
      setTimerId(id);
    } else {
      setSearchResults([]);
    }
  }, [currentQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setCurrentQuery(query);
  }

  return { users: searchResults, currentQuery, handleInputChange, error };
}
