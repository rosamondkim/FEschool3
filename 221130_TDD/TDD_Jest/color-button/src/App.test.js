import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('버튼이 제대로 동작하고 있습니다', () => {
  render(<App />);
  //button의 역할을 하는 요소 검색하며, 요소 안의 텍스트는 changetoblue
  const button = screen.getByRole('button',{name:'change to blue'})
  // button요소의 배경색이 red 이길 기대합니다
  expect(button).toHaveStyle({backgroundColor:'red'});

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor:'blue'})

  expect(button.textContent).toBe('change to red')
});
