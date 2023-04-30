import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages/index'

describe('Render home page', () => {
  it('Should have a heading', () => {
    render(<Home coins={null} />)

    const heading = screen.getByRole('heading', {
      name: 'Exchange rate calculator',
    })

    expect(heading).toBeInTheDocument()
  })

  it('Should have a submit button', () => {
    render(<Home coins={null} />)

    const button = screen.getByRole('button', {
      name: 'Convert',
    })

    expect(button).toBeInTheDocument()
  })
})

describe('Render homepage', () => {
  it('Should render homepage', () => {
    const { container } = render(<Home coins={null}/>)
    expect(container).toMatchSnapshot()
  })
})