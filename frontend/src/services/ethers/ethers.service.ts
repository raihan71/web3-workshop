import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../../configs/constant';

@Injectable({
  providedIn: 'root',
})
export class Ethers {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.Signer | null = null;
  private contract: ethers.Contract | null = null;

  private contractABI = contractABI;
  private contractAddress = contractAddress;

  constructor() {
    this.initializeEthers();
  }

  private async initializeEthers() {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.provider = new ethers.BrowserProvider((window as any).ethereum);
      this.signer = await this.provider.getSigner();
      this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.signer);
    } else {
      console.error('MetaMask is not installed!');
    }
  }

  public getContract(): ethers.Contract | null {
    return this.contract;
  }

  public async connectWallet(): Promise<string | null> {
    if (!this.provider) {
      console.error('Provider is not initialized.');
      return null;
    }
    try {
      const accounts = await this.provider.send('eth_requestAccounts', []);
      return accounts[0];
    } catch (error) {
      console.error('User rejected the request:', error);
      return null;
    }
  }

  public async getCurrentAccount(): Promise<string | null> {
    if (!this.provider) {
      console.error('Provider is not initialized.');
      return null;
    }
    try {
      const accounts = await this.provider.listAccounts();
      return accounts.length > 0 ? await accounts[0].getAddress() : null;
    } catch (error) {
      console.error('Error fetching accounts:', error);
      return null;
    }
  }

  public async sendTransaction(
    to: string,
    amount: string,
    message: string,
    keyword: string
  ): Promise<ethers.TransactionResponse | null> {
    if (!this.contract || !this.signer) {
      console.error('Contract or signer is not initialized.');
      return null;
    }
    try {
      const parsedAmount = ethers.parseEther(amount);
      const transactionParameters = {
        to,
        value: parsedAmount,
      };

      const txResponse = await this.signer.sendTransaction(transactionParameters);
      await txResponse.wait();

      const txHash = txResponse.hash;
      const contractTx = await this.contract['addToBlockchain'](to, parsedAmount, message, keyword);
      await contractTx.wait();

      return txResponse;
    } catch (error) {
      console.error('Error sending transaction:', error);
      return null;
    }
  }
}
