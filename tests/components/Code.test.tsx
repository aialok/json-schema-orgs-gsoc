import Code from '../../components/Code';
import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Code Component', () => {
  beforeAll(() => {
    render(<Code>JSON-SCHEMA-ORGS</Code>);
  });

  it('renders code with correct tags', () => {
    const code = screen.getByText('JSON-SCHEMA-ORGS');
    expect(code).toBeInTheDocument();
  });
});
