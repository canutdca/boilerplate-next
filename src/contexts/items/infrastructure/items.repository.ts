import { Item } from '../domain/Item'

const items: Item[] = [
	{
		id: 1,
		title: 'Item 1',
		description: 'Description 1',
	},
	{
		id: 2,
		title: 'Item 2',
		description: 'Description 2',
	},
	{
		id: 3,
		title: 'Item 3',
		description: 'Description 3',
	},
]

export async function getList(): Promise<Item[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(items)
		}, 1000)
	})
}
