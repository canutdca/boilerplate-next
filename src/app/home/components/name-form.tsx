'use client'

import { useEffect, useState } from 'react'

interface NameFormProps {
	initialName?: string
	onSuccess: (name: string) => void
	onError: (error: string) => void
}

export function NameForm({
	initialName = '',
	onSuccess,
	onError,
}: NameFormProps) {
	const [name, setName] = useState(initialName)

	useEffect(() => {
		setName(initialName)
	}, [initialName])

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		try {
			const response = await fetch('/api/user/name', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name }),
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || 'Error to save name')
			}
			onSuccess(name)
		} catch {
			onError('Error to save name')
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Escribe tu nombre"
			/>
			<button type="submit">Guardar</button>
		</form>
	)
}
