/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import MoviesList, { TextInput } from '../../src/components/SearchBar';

describe('MoviesList component', () => {
    it('should verify text in placeholder');
    const { getByPlaceholderText } = render(<TextInput />);
});
