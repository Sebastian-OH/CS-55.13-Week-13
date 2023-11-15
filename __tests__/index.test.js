import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a footer', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: /Pokemon Cards/i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})
