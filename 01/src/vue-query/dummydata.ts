import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import { get } from 'lodash-es';

export interface TypeDummyData {
	id: string;
	name: string;
	avatar: string;
	isFavorite: boolean;
}

const getData = async () => {
	const data = await axios.get(`https://randomuser.me/api/?results=100`).then(({ data }) => {
		return {
			data: get(data, 'results', []).map((item: any) => {
				return {
					id: get(item, 'login.uuid', ''),
					name: get(item, 'name.title', '') + '. ' + get(item, 'name.first', '') + get(item, 'name.last', ''),
					avatar: get(item, 'picture.large', ''),
					isFavorite: true,
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
		// 快取保留時間 20秒
		staleTime: 20 * 1000,
		// 切回換視窗,頁面即時更新
		refetchOnWindowFocus: false,
	});
};
