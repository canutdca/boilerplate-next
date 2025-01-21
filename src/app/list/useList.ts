'use client'

import { Item } from '@/contexts/items/domain/Item'
import { useState } from 'react'

export function useList() {
	const [list, setList] = useState<Item[]>([])
	const initList = (items: Item[]) => setList(items)
	const addItem = () =>
		setList(() => {
			const newId = Math.max(...list.map((item) => item.id)) + 1
			const newItem = {
				id: newId,
				title: 'Item ' + newId,
				description: 'Description ' + newId,
			}
			return [...list, newItem]
		})
	const removeItem = (id: number) =>
		setList((list) => list.filter((i) => i.id !== id))

	return {
		list,
		initList,
		addItem,
		removeItem,
	}
}
