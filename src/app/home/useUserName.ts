import { useState } from 'react'

export function useUserName() {
	const [name, setName] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const updateName = async (name: string) => {
		setName(name)
		setError('')
		setIsLoading(false)
	}

	const hasError = (error: string) => {
		setName('')
		setError(error)
		setIsLoading(false)
	}

	return { name, error, isLoading, updateName, hasError }
}
