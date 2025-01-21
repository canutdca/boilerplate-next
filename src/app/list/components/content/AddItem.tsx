'use client'

import { useState } from 'react'

export default function AddItem() {
	const [items, setItems] = useState<string[]>([])
	const [newItem, setNewItem] = useState('')

	const handleAddItem = () => {
		if (newItem.trim()) {
			setItems((prevItems) => [...prevItems, newItem])
			setNewItem('')
		}
	}

	return (
		<div>
			<input
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				placeholder="Add a new item"
			/>
			<button onClick={handleAddItem}>Add</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}
