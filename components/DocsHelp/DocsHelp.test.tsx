import { render, screen } from '@testing-library/react';
import { expect, describe, it, beforeAll } from 'vitest';
import { DocsHelp } from './DocsHelp';
import React from 'react';

describe('DocsHelp Component', () => {
  beforeAll(() => {
    render(<DocsHelp />);
  });

  it('should render the component DocsHelp with the heading', () => {
    const needHelpHeading = screen.getByTestId('First-Heading');
    expect(needHelpHeading).toBeDefined();

    const docsHelpfulHeading = screen.findByText('/docs helpful?/');
    expect(docsHelpfulHeading).toBeDefined();
  });
});
