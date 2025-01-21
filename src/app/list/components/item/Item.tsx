import styles from './Item.module.scss'

interface ItemProps {
	title: string
	description: string
}

export function Item({ title, description }: ItemProps) {
	return (
		<article className={styles.item}>
			<header>
				<h3>{title}</h3>
			</header>
			<p>{description}</p>
		</article>
	)
}
