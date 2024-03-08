import { Remember } from '../../components/Remember';
import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Remember Component', () => {
  beforeAll(() => {
    render(<Remember />);
  });

  it('renders headings and links with correct tags', () => {
    // Headings

    const RememberHeading = screen.getByText('Remember');
    expect(RememberHeading).toBeInTheDocument();

    const contributeHeading = screen.getByText(
      'Contribute to the JSON Schema Docs',
    );
    expect(contributeHeading).toBeInTheDocument();

    const contributeGuideLink = screen.getByText('Contribution Guide');
    expect(contributeGuideLink).toBeInTheDocument();

    const codeOfConductLink = screen.getByText('Code of Conduct');
    expect(codeOfConductLink).toBeInTheDocument();

    const getStartedHeading = screen.getByText(
      'To get started as a Docs contributor:',
    );
    expect(getStartedHeading).toBeInTheDocument();

    const docsBoardLink = screen.getByText('JSON Schema Docs Board');
    expect(docsBoardLink).toBeInTheDocument();

    const questionsHeading = screen.getByText('Docs contributor questions?');
    expect(questionsHeading).toBeInTheDocument();

    // Links

    const contributeGuideLinkHref = screen.getByRole('link', {
      name: 'Contribution Guide',
    });
    expect(contributeGuideLinkHref).toHaveAttribute(
      'href',
      'https://github.com/json-schema-org/community/blob/main/CONTRIBUTING.md',
    );

    const codeOfConductLinkHref = screen.getByRole('link', {
      name: 'Code of Conduct',
    });

    expect(codeOfConductLinkHref).toHaveAttribute(
      'href',
      'https://github.com/json-schema-org/.github/blob/main/CODE_OF_CONDUCT.md',
    );

    const docsBoardLinkHref = screen.getByRole('link', {
      name: 'JSON Schema Docs Board',
    });
    expect(docsBoardLinkHref).toHaveAttribute(
      'href',
      'https://github.com/orgs/json-schema-org/projects/16',
    );
  });

  it('renders a list of steps to get started as a Docs contributor', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });
});
