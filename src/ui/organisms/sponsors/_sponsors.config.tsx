import { IGrid } from '../../../interfaces/shared/grid.interface';
import { gqlUser } from '../../../api/queries/user';
import { useQuery } from '@apollo/react-hooks';

const row: IGrid = {
	grid: [{
		id: 1,
		size: 12,
		spacing: 3
	}, {
		id: 2,
		size: 12,
		spacing: 3
	}, {
		id: 3,
		size: 12,
		spacing: 3
	}
	]
};

const column: IGrid = {

	grid: [{
		id: 1,
		size: 4
	}, {
		id: 2,
		size: 4
	}, {
		id: 3,
		size: 4
	}
	]
};


function Users() {
	return useQuery(gqlUser);
}


export const sponsorsConfig = {
	row,
	column,
	Users
}