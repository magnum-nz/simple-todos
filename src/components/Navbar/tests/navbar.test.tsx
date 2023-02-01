import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Navbar } from '../Navbar';
import userEvent from '@testing-library/user-event';

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
});

test('Clicked navbar element is set as active', async () => {
    //arrange
    render(<Navbar />);
    //act
    const navOptionThree = screen.queryByText('Done')?.parentElement;
    navOptionThree &&  await userEvent.click(navOptionThree);
    //assert
    expect(navOptionThree).toHaveClass('ant-menu-item-selected')
});