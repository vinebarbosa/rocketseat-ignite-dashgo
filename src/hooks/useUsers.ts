
import { useQuery } from 'react-query';
import { api } from "../services/axios/api";

const getUsers = async () => {
	const { data } = await api.get('users');
	return data.users.map(user => ({
		...user,
		created_at: new Date(user.createdAt).toLocaleDateString('pt-br', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		})
	}));
}

export const useUsers = <T>() => {
	return useQuery<T>('users', getUsers, { staleTime: 1000 * 5 });
}