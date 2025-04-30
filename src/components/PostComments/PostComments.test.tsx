import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PostComments from './index'

describe('Teste para o componente PostComments', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComments />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  it('Deve permitir inserir dois comentários na lista', () => {
    render(<PostComments />)

    const input = screen.getByTestId('campo-comentario')
    const botao = screen.getByTestId('botao-comentar')

    // Primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(botao)

    // Segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(botao)

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})
