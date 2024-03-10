import { createContext } from 'react';
import { User } from '@components/types/user';

export const SearchContext = createContext<{ users: User[] }>({ users: [] });
