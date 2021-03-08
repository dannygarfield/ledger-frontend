import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';

import EntryForm from './EntryForm'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without props', () => {
  act(() => {
    render(<EntryForm />, container);
  });
  let form = container.querySelector('form');
  expect(form.childElementCount).toBe(13);
  let h2 = container.querySelector('h2');
  expect(h2.textContent).toBe('Insert a budget entry');

  act(() => {
    render(<EntryForm api='localhost:8080' />, container);
  });
  form = container.querySelector('form');
  expect(form.childElementCount).toBe(13);
  h2 = container.querySelector('h2');
  expect(h2.textContent).toBe('Insert a budget entry');
});

it('changing input changes value', () => {
  const setEntryDate = jest.fn();
  act(() => {
    render(<EntryForm />, container);
  });

  // get ahold of the button element, and change value
  const entryDate = document.querySelector('input');
  expect(entryDate.value).toBe('');
  act(() => {
    fireEvent.change(entryDate, { target: { value: '2021-03-08' } });
  });
  expect(entryDate.value).toBe('2021-03-08');

});
