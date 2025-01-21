import { Item } from '../domain/Item'
import { getList } from '../infrastructure/items.repository'

export function getAllItems(): Promise<Item[]> {
	return getList()
}
