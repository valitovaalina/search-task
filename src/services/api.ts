import { User } from '@components/types/user';

export const fetchData = async (currentQuery: string, setError: React.Dispatch<React.SetStateAction<string>>, setSearchResults: React.Dispatch<React.SetStateAction<User[]>>) => {
  try {
    if (currentQuery !== '') {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${currentQuery}`,
        {
          method: 'GET',
        }
      );

      if (response.status === 400) {
        setError('Данные введены неправильно. Пожалуйста, обновите страницу и попробуйте еще раз');
        throw new Error('Данные введены неправильно. Пожалуйста, обновите страницу и попробуйте еще раз');
      }
      else if (response.status === 500) {
        setError('Упс, проблемы с сервером. Пожалуйста, попробуйте позже еще раз');
        throw new Error('Упс, проблемы с сервером. Пожалуйста, попробуйте позже еще раз');
      }

      const results = await response.json();
      setSearchResults(results.users);
      setError('');
    }
  } catch (error) {
    if (error === '') {
      setError('Что-то пошло не так. Проверьте сеть и перезагрузите страницу - это должно помочь.');
    }
  }
};