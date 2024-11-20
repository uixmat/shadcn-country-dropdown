export const example = `
\`\`\`tsx
<CurrencySelect
  onValueChange={() => void}
  onCurrencySelect={() => void}
  name="currency"
  placeholder="Select currency"
  currencies="all"
  variant="default"
/>
\`\`\`
`;

export const installation = `
\`\`\`bash
# Install dependencies
pnpm add country-data-list

# Install shadcn components
npx shadcn@latest add select
\`\`\`
`;
