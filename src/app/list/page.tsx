import { getName } from '@/contexts/user/application/get-name.application'
import Content from './components/content/Content'
import { Suspense } from 'react'
import { Loading } from '@/app/_shared/components/molecules/loading/Loading'

export default async function List() {
	return (
		<>
			<section>
				<header>
					<Suspense fallback={<Loading />}>
						<NameHeader />
					</Suspense>
				</header>
				<Content />
			</section>
		</>
	)
}

async function NameHeader() {
	const name = await getName()
	return <h2>List of {name}</h2>
}
