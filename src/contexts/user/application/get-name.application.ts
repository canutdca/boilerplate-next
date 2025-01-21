import { UserRepository } from '../infrastructure/user.repository'

export function getName(): Promise<string> {
	return UserRepository.getInstance().getName()
}
