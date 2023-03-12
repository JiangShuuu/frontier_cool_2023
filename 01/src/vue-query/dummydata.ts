import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import { get } from 'lodash-es';

export interface TypeDummyData {
	id: string;
	name: string;
	avatar: string;
	age: number;
	phone: string;
	birthday: string;
	email: string;
	gender: string;
}

const filterBirthday = (birthday: string): string => {
	const date = new Date(birthday);

	if (date.toString() === 'Invalid Date') {
		return '';
	}

	return date.toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
	});
};

const filterGender = (gender: string): string => {
	switch (gender) {
		case 'male':
			return '男';

		case 'female':
			return '女';

		default:
			return '其他';
	}
};

const getData = async () => {
	const data = await axios.get(`https://randomuser.me/api/?results=3010`).then(({ data }) => {
		return {
			data: get(data, 'results', []).map((item: any) => {
				return {
					id: get(item, 'login.uuid', ''),
					name: get(item, 'name.title', '') + '. ' + get(item, 'name.first', '') + get(item, 'name.last', ''),
					avatar: get(item, 'picture.large', ''),
					phone: get(item, 'phone', 'not provid'),
					age: get(item, 'dob.age', 0),
					birthday: filterBirthday(get(item, 'dob.date', 'not provid')),
					email: get(item, 'email', 'not provid'),
					gender: filterGender(get(item, 'gender', '')),
				};
			}) as TypeDummyData[],
		};
	});

	return data.data;
};

// Query
export const useGetData = () => {
	return useQuery({
		queryKey: ['dummy_data'],
		queryFn: getData,
		// 快取保留時間 30秒
		staleTime: 30 * 1000,
		// 切回換視窗,頁面即時更新
		refetchOnWindowFocus: false,
	});
};
