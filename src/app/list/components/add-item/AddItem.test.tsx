import { render, screen, fireEvent } from '@testing-library/react'
import { AddItem } from './AddItem'

test('calls onClick function when clicked', () => {
	const handleClick = jest.fn()
	render(<AddItem onClick={handleClick} />)

	const button = screen.getByText('Add')
	fireEvent.click(button)

	expect(handleClick).toHaveBeenCalledTimes(1)
})
