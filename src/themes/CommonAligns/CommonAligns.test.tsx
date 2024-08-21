import { render } from '@testing-library/react';
import {
  RowStart,
  RowAround,
  RowBetween,
  RowBetweenStart,
  RowEnd,
  ColumnStart,
  ColumnAround,
  ColumnBetween,
  ColumnBetweenStart,
  ColumnEnd,
} from './CommonAligns';

describe('CommonAligns styled components', () => {
  it('RowStart should have correct styles', () => {
    const Component = RowStart('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
  });

  it('RowAround should have correct styles', () => {
    const Component = RowAround('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-around',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('RowBetween should have correct styles', () => {
    const Component = RowBetween('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-between',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('RowBetweenStart should have correct styles', () => {
    const Component = RowBetweenStart('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-between',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
  });

  it('RowEnd should have correct styles', () => {
    const Component = RowEnd('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-end');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('ColumnStart should have correct styles', () => {
    const Component = ColumnStart('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
  });

  it('ColumnAround should have correct styles', () => {
    const Component = ColumnAround('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-around',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('ColumnBetween should have correct styles', () => {
    const Component = ColumnBetween('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-between',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });

  it('ColumnBetweenStart should have correct styles', () => {
    const Component = ColumnBetweenStart('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-between',
    );
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
  });

  it('ColumnEnd should have correct styles', () => {
    const Component = ColumnEnd('div');
    const { container } = render(<Component />);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-end');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
  });
});
