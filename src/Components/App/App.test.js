import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './Index.js';
import { faqs, navLinks, testimonials } from '../../content.js';

test('renders the hero headline and primary call to action', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/out-think every table/i);
    expect(screen.getByRole('link', { name: /book your next session/i })).toHaveAttribute('href', '#contact');
});

test('every nav link points at a section that exists', () => {
    const { container } = render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    navLinks.forEach(({ id, label }) => {
        expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`);
        expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    });
    expect(container.querySelector('#contact')).toBeInTheDocument();
});

test('mobile menu toggles open and closed', async () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible();

    await userEvent.click(within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', { name: 'FAQ' }));
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false');
});

test('testimonial tabs switch the featured quote', async () => {
    render(<App />);
    const last = testimonials[testimonials.length - 1];
    await userEvent.click(screen.getByRole('button', { name: new RegExp(last.name) }));
    expect(screen.getByText(last.quote)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: new RegExp(last.name) })).toHaveAttribute('aria-pressed', 'true');
});

test('FAQ accordion opens one answer at a time', async () => {
    render(<App />);
    const first = screen.getByRole('button', { name: faqs[0].q });
    const second = screen.getByRole('button', { name: faqs[1].q });
    expect(first).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');
});

test('contact form has the required fields', () => {
    render(<App />);
    expect(screen.getByLabelText(/your name/i)).toBeRequired();
    expect(screen.getByLabelText(/email address/i)).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText(/your goals/i)).toBeRequired();
    expect(screen.getByRole('button', { name: /reserve your spot/i })).toBeEnabled();
});
