# Shopify Order Help Extension

This repository contains a Shopify Customer Account UI Extension that adds a "Need help with this order?" feature to the Order Status page.

## Features

- **Help Button**: A clearly visible button on the Order Status page.
- **Support Modal**: text explaining how to contact support.
- **Dynamic Content**: Displays the current Order Name/ID dynamically.
- **Email Integration**: specific "Email Support" button that opens the user's default email client with a pre-filled subject line including the order number.

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Development Server**:

   ```bash
   npm run dev
   ```

3. **Preview**:
   - Open the URL provided in the terminal (usually your Partner Dashboard preview link).
   - Navigate to an **Order Status** page simulation to see the extension in action.

## Project Structure

- `extensions/customer-account-ui/`: Contains the extension logic and configuration.
  - `src/OrderStatusBlock.jsx`: Main React/Preact component for the UI extension.
  - `shopify.extension.toml`: Extension configuration.

## API Usage

This extension uses the Shopify UI Extensions API for Customer Account (`@shopify/ui-extensions/customer-account`).

- **Target**: `customer-account.order-status.block.render`
- **Components Used**:
  - `BlockStack`: For vertical layout.
  - `Banner`: For displaying the help prompt and status messages.
  - `Button`: For interactive elements (opening modal, sending email).
- **APIs**:
  - `useApi()` (via props): To access the `order` object for retrieving dynamic order details (`order.name` or `order.id`).

## Known Limitations / TODOs

- **Hardcoded Email**: The support email is currently hardcoded (`support@example.com`). This should be made configurable in the future.
- **Styling**: Uses standard Shopify UI components (`Banner`, `Button`) for consistency, custom CSS is minimal/inline via component props.

## Theme Changes

This is an "Extension-only" app. No direct modification of the Shopify Theme Liquid files is required as it injects into the predefined extension targets.
