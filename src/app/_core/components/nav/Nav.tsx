import Link from 'next/link'
import { ROUTES } from '@/app/routes.constants'
import styles from './Nav.module.scss'

export function Nav() {
	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<Link className={styles.link} href={ROUTES.HOME}>
						Home
					</Link>
				</li>
				<li>
					<Link className={styles.link} href={ROUTES.LIST}>
						List
					</Link>
				</li>
			</ul>
		</nav>
	)
}
