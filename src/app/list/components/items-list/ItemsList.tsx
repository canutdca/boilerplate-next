'use client'

import { useEffect } from 'react'
import { useList } from '../../useList'
import styles from './ItemsList.module.scss'
import { Item } from '@/contexts/items/domain/Item'
import { Item as ItemComponent } from '../item/Item'
import { AddItem } from '../add-item/AddItem'

interface ItemsListProps {
	initialItems: Item[]
}

export function ItemsList({ initialItems }: ItemsListProps) {
	const { list, initList, addItem } = useList()

	useEffect(() => {
		initList(initialItems)
	}, [])

	return (
		<ul className={styles.list}>
			{list.map((item) => (
				<li key={item.id}>
					<ItemComponent
						title={item.title}
						description={item.description}
					/>
				</li>
			))}
			<li>
				<AddItem onClick={addItem} />
			</li>
		</ul>
	)
}
