import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Navbar } from '../Navbar';

test('Navbar is rendered', () => {
    //arrange
    render(<Navbar />);
    //act
    const navOptionOne = screen.queryByText('All todos');
    const navOptionTwo = screen.queryByText('Todo');
    const navOptionThree = screen.queryByText('Done');
    //assert
    expect(navOptionOne).toBeInTheDocument();
    expect(navOptionTwo).toBeInTheDocument();
    expect(navOptionThree).toBeInTheDocument();
})