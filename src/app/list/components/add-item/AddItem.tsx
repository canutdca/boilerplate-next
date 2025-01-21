import styles from './AddItem.module.scss'

interface AddItemProps {
	onClick: () => void
}

export const AddItem = ({ onClick }: AddItemProps) => {
	return (
		<article className={styles.item} onClick={onClick}>
			Add
		</article>
	)
}
