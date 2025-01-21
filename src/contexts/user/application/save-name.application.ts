import { UserRepository } from '../infrastructure/user.repository'

export function saveName(name: string): Promise<void> {
	return UserRepository.getInstance().saveName(name)
}
