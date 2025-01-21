import { saveName } from '@/contexts/user/application/save-name.application'
import { getName } from '@/contexts/user/application/get-name.application'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const name = await getName()
		return NextResponse.json({ name }, { status: 200 })
	} catch {
		return NextResponse.json({ status: 500 })
	}
}

export async function PUT(request: Request) {
	try {
		const { name } = await request.json()

		if (!name || typeof name !== 'string') {
			return NextResponse.json(
				{ error: 'name is required and must be a string' },
				{ status: 400 },
			)
		}

		await saveName(name)

		return NextResponse.json({ status: 200 })
	} catch {
		return NextResponse.json({ status: 500 })
	}
}
