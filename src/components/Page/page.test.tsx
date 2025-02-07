
import "@testing-library/jest-dom";
import Page from './index';
import { render } from "@testing-library/react";

describe('Page Component', () => {
  it('renders the title and children correctly', () => {
    const title = 'Test Title';
    const children = 'Test Children'

    const { getByText } = render(<Page title={title}>{children}</Page>);
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});