import { cookies } from 'next/headers'

export class UserRepository {
	private static instance: UserRepository
	private static readonly COOKIE_NAME = 'user_name'

	private constructor() {}

	public static getInstance(): UserRepository {
		if (!UserRepository.instance) {
			UserRepository.instance = new UserRepository()
		}
		return UserRepository.instance
	}

	public async saveName(name: string): Promise<void> {
		const cookieStore = await cookies()
		cookieStore.set(UserRepository.COOKIE_NAME, name, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
		})
	}

	public async getName(): Promise<string> {
		const cookieStore = await cookies()
		return cookieStore.get(UserRepository.COOKIE_NAME)?.value || ''
	}
}
