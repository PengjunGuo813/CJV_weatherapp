/**********************************************
Task # 2
Full Name : Pengjun Guo
Student ID#: 139448229
Email : pguo9@myseneca.ca
Section : NAA

Authenticity Declaration: 
I declare this submission is the result of my own work and has not been. shared with any other student or 3rd party 
content provider. This submitted. 
piece of work is entirely of my own creation. 
***********************************************************************************************
Date: Jun 27, 2023
**********************************************/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
