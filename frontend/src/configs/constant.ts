import abi from './Transactions.json';

export const contractABI = abi.abi;

export const contractAddress = import.meta.env['NG_APP_CONTRACT_ADDRESS'];
