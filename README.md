# Shopify Store Setup: Theme and Extensions

This repository contains the code for the Shopify store, including the customized theme and the "Order Help" Customer Account UI Extension.

## folder Structure

- **`customer_ui_extension/`**: Contains the source code for the Customer Account UI Extension.
  - Adds a "Need help with this order?" button to the Order Status page.
  - Includes `src/`, `locales/`, and configuration files.
- **`shopify_theme/`**: Contains the Liquid theme files and assets downloaded from the store (`horizon-ank`).

## Customer UI Extension

### Features

- **Help Button**: Displays on the Order Status page.
- **Support Modal**: informational modal with a "Contact Support" mailto link.
- **Dynamic Data**: Fetches and displays the current Order Name.

### Setup & Development

1. Navigate to the directory:
   ```bash
   cd customer_ui_extension
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Shopify Theme

The `shopify_theme` directory contains the theme's Liquid templates, JSON config, and assets.

- **Modifications**: Check `layout/`, `templates/`, and `sections/` for any custom code.
- **Deployment**:
  ```bash
  cd shopify_theme
  shopify theme push
  ```

## Submission Details

- **Theme Changes**: Included in `shopify_theme/`.
- **Extension Code**: Included in `customer_ui_extension/`.
- **Proof of Functionality**: (Please refer to attached screenshots/video if applicable).
