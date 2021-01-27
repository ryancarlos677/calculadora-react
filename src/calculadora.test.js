import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';
import {rende, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('calculadora', () => {

it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('deve limpar o campo de numeros', () => {
  const { getByTestId, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('C'));
  expect(getByTestId('txtNumeros')).toHaveValue('0')

});

it('deve soma 1 + 3 e obter 5', () => {
  const { getById, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('TextNumeros')).toHaveValue('5');
});
it('deve subtrair 5 - 3 e obter 2', () => {
  const { getById, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('TextNumeros')).toHaveValue('2');

});
it('deve dividir 6 / 3 e obter 2', () => {
  const { getById, getByText } = render(<Calculadora />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('TextNumeros')).toHaveValue('6');
  });


    });
