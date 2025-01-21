import { Suspense } from 'react'
import { getAllItems } from '@/contexts/items/application/get-all-items.application'
import { ItemsList } from '../items-list/ItemsList'
import { Loading } from '@/app/_shared/components/molecules/loading/Loading'

async function ItemsContent() {
	const items = await getAllItems()
	return <ItemsList initialItems={items} />
}

export default function Content() {
	return (
		<Suspense fallback={<Loading />}>
			<ItemsContent />
		</Suspense>
	)
}
