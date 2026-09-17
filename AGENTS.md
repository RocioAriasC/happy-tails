# AGENTS.md

## Purpose

This repository supports a thoughtful gifting brand for real estate professionals.
The app helps agents choose meaningful presents and gift collections that make
their clients feel special and celebrated, while introducing those clients to
the brand's web app.

The product should feel personal, warm, dependable, and easy to use. Every
feature should support at least one of these goals:

- Help a real estate professional select an appropriate gift.
- Make personalization and thoughtful client details easy to manage.
- Present gift collections clearly and attractively.
- Create a memorable client experience without adding unnecessary complexity.
- Build trust in the brand through polished, accessible, and reliable UX.

## 1. Core Workflow

- **Plan first:** Before editing code or data, briefly identify the user
  problem, affected files, expected behavior, and how the change will be
  validated.
- **Read local documentation:** Review the relevant `READ.ME`, `readme.md`, or
  requirements file before changing an area of the repository.
- **Keep changes focused:** Do not modify unrelated customer, inventory,
  order, product, supplier, or marketing content.
- **Preserve traceability:** Keep product, order, inventory, and customer
  information consistent across related files.
- **Use real project data:** Do not invent customer history, testimonials,
  product claims, prices, supplier details, or business results. Use explicitly
  provided data or clearly mark information as a placeholder.
- **Confirm behavior:** After a change, inspect the affected files and run the
  smallest applicable validation command. If no automated checks exist,
  document the manual check that was performed.

## 2. Repository Areas

Use the existing folders according to their domain:

- `Customers/`: Client and recipient information, preferences, and important
  dates.
- `Inventory/`: Available quantities and inventory-related records.
- `Orders/` and `Orders1/`: Order information and order documentation.
- `products/`: Gift products, collections, descriptions, and product details.
- `suppliers/`: Supplier information and sourcing records.
- `marketing/`: Brand messaging, campaign ideas, and customer-facing content.

When a change crosses domains, update the relevant documentation consistently
and explain the relationship in the change description.

## 3. Technical Environment

- Treat the current repository as a documentation and data-first project.
- Inspect the repository before assuming a framework, build tool, database, or
  deployment platform exists.
- Do not add a framework, dependency, or build process unless the project
  requirements explicitly call for it.
- Prefer clear, portable formats and simple file structures.
- If an application layer is added later, document its setup, development,
  build, test, and deployment commands in this file.
- Use ASCII for ordinary source and documentation edits unless existing content
  or the brand requires another character.

## 4. Brand and Content Guidelines

- Lead with thoughtfulness, celebration, and genuine client care.
- Use warm, concise, human language rather than generic sales copy.
- Describe gifts in terms of the experience they create, not only their
  features.
- Avoid assumptions about a client's culture, family, identity, budget, or
  preferences.
- Support personalization without making the experience feel intrusive.
- Avoid exaggerated claims such as "guaranteed," "perfect for everyone," or
  unsupported sustainability and quality claims.
- Keep names, prices, quantities, dates, and product details accurate.
- Customer-facing content should make the next step clear: browse, personalize,
  save, or order.

## 5. UX, Accessibility, and Privacy

- Design for busy real estate professionals who need to act quickly.
- Prefer clear labels, predictable navigation, readable content, and helpful
  empty states.
- Keep the experience responsive on mobile and desktop.
- Use sufficient color contrast and do not communicate meaning through color
  alone.
- Provide descriptive labels for controls and meaningful alternative text for
  important images.
- Treat customer names, addresses, preferences, notes, and important dates as
  private business data.
- Never commit secrets, credentials, payment information, or unnecessary
  personally identifiable information.
- Use the minimum customer data needed to support the gifting experience.

## 6. Data Quality Rules

- Use one consistent naming convention for products, collections, customers,
  suppliers, and order statuses.
- Keep order status values explicit and consistent, such as `Pending`,
  `Processing`, `Shipped`, `Delivered`, and `Cancelled`.
- Record quantities and prices with unambiguous units and currency.
- Do not silently overwrite conflicting data; call out the conflict and resolve
  it using the most authoritative source.
- Preserve existing history when adding updates. Prefer an additional dated
  record over destructive replacement when history matters.
- Validate references between orders, customers, products, inventory, and
  suppliers before considering a cross-domain change complete.

## 7. Change Quality Checklist

Before completing work, verify:

- The change supports a meaningful gifting or client-experience goal.
- Relevant local documentation was reviewed and remains accurate.
- No unrelated files or records were changed.
- Customer and business data is consistent and privacy-conscious.
- Customer-facing wording matches the warm, thoughtful brand voice.
- The result is accessible, understandable, and usable on small screens where
  applicable.
- Existing behavior and data formats were preserved unless the change
  intentionally updates them.
- The validation steps and any remaining assumptions are clear.
