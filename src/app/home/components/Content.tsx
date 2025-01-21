'use client'

import { useEffect } from 'react'
import { NameForm } from './name-form'
import { Loading } from '@/app/_shared/components/molecules/loading/Loading'
import { useUserName } from '../useUserName'

export default function Content() {
	const { name, error, isLoading, updateName, hasError } = useUserName()

	useEffect(() => {
		const fetchName = async () => {
			try {
				const response = await fetch('/api/user/name')
				if (!response.ok) throw new Error('Error to get name')

				const data = await response.json()
				if (data?.name !== undefined) updateName(data.name)
			} catch {
				hasError('Error to get name')
			}
		}
		fetchName()
	}, [])

	const handleChangeName = (name: string) => {
		console.log('caca')
		updateName(name)
	}
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<p>Welcome {name}</p>
					<NameForm
						initialName={name}
						onSuccess={handleChangeName}
						onError={hasError}
					/>
					{error && <p>{error}</p>}
				</>
			)}
		</>
	)
}
