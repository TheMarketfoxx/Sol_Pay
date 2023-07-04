# GitHub Readme

This repository contains the code for a React application that serves as an NFT store. The application utilizes the Solana blockchain and allows users to connect their wallets, view and purchase NFT products. The code is written in JavaScript.

## Usage

To use this application, follow the steps below:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Prerequisites

Before running the application, make sure you have the following:

- Node.js installed on your machine
- A Solana wallet

## Installation

To install the required dependencies, run the following command:

```
npm install
```

## Running the Application

To start the development server, run the following command:

```
npm start
```

The application will be accessible at `http://localhost:3000`.

## Code Structure

The code is organized into the following files and directories:

- `CreateProduct.js`: Component for creating new products.
- `Product.js`: Component for displaying individual products.
- `Head.js`: Component for the head section of the application.
- `App.js`: Main component that renders the application.

## Noteworthy Updates

- The application now uses the `@solana/wallet-adapter-react` package for interacting with Solana wallets.
- The `WalletMultiButton` component from `@solana/wallet-adapter-react-ui` is used to display the wallet connection button.
- The application now fetches product data from the server API using the `fetch` function.
- The `useEffect` hook is used to fetch product data when the `publicKey` state variable changes.
- The `renderNotConnectedContainer` function renders a container for users who are not connected to a wallet.
- The `renderItemBuyContainer` function renders a container for displaying the available products.
- The application now displays a header, sub-text, and a footer containing a Twitter logo and a link to the developer's Twitter profile.

## Acknowledgements

This code was created by [@allegiancelife](https://twitter.com/allegiancelife).