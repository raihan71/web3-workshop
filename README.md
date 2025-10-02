# Web3 Workshop

This project demonstrates a simple Web3 setup with a smart contract backend and an Angular frontend. QuickNode is used as the blockchain node provider.

## Prerequisites

- Node.js & npm
- Angular CLI
- MetaMask or compatible wallet

## Smart Contract Setup

1. **Write your smart contract** (e.g., in Solidity).
2. **Compile & deploy** using your preferred tool (e.g., Hardhat, Truffle).
3. **Connect to QuickNode:**

- Sign up at [QuickNode](https://www.quicknode.com/).
- Create an endpoint and copy your HTTP provider URL.
- Use your wallet to get the API key if required.

## Angular Frontend Setup

1. **Clone this repository:**

```bash
git clone <repo-url>
cd web3-workshop
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment:**

- Add your QuickNode endpoint and contract address to `src/environments/environment.ts`:
  ```typescript
  export const environment = {
    quicknodeUrl: '<YOUR_QUICKNODE_URL>',
    contractAddress: '<YOUR_CONTRACT_ADDRESS>',
  };
  ```

4. **Run the frontend:**

```bash
ng serve
```

## Usage

- Interact with the smart contract via the Angular UI.
- Ensure your wallet is connected to the same network as your QuickNode endpoint.

## Resources

- [QuickNode Docs](https://docs.quicknode.com/)
- [Angular](https://angular.io/)
- [Web3.js](https://web3js.readthedocs.io/)
