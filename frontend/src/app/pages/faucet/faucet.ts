import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { Ethers } from '../../../services/ethers/ethers.service';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faucet',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatError,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './faucet.html',
  styleUrl: './faucet.css',
})
export class Faucet {
  private snackBar: MatSnackBar = inject(MatSnackBar);

  faucetForm: FormGroup;

  account: string = '';

  isConnected: boolean = false;

  isOwner: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,

    private ethersService: Ethers
  ) {
    this.faucetForm = this.fb.group({
      recipientAddress: ['', [Validators.required, Validators.pattern(/^0x[a-fA-F0-9]{40}$/)]],

      amount: ['', [Validators.required, Validators.min(0.0001)]],

      message: [''],

      keyword: [''],
    });
  }

  ngOnInit(): void {}

  async checkWalletConnection() {
    const account = await this.ethersService.getCurrentAccount();
    this.account = account ?? '';

    if (this.account) {
      this.isConnected = true;
    }
  }

  async connectWallet() {
    try {
      const account = await this.ethersService.connectWallet();
      this.account = account ?? '';

      this.isConnected = true;

      this.snackBar.open('Wallet connected successfully!', 'Close', { duration: 0 });
    } catch (error) {
      console.error('Failed to connect wallet:', error);

      this.snackBar.open('Failed to connect wallet.', 'Close', { duration: 0 });
    }
  }

  async sendTokens() {
    if (this.faucetForm.valid) {
      const { recipientAddress, amount, message, keyword } = this.faucetForm.value;
      this.isLoading = true;
      try {
        const resp = await this.ethersService.sendTransaction(
          recipientAddress,
          amount,
          message,
          keyword
        );
        if (!resp) {
          throw new Error('Transaction failed');
        } else {
          console.log('Transaction successful:', resp);
          this.snackBar.open('Tokens sent successfully!', 'Close', { duration: 0 });
        }

        this.faucetForm.reset();
        this.isLoading = false;
      } catch (error: any) {
        console.error('Error sending tokens:', error);

        this.snackBar.open(`Error: ${error.message || 'Failed to send tokens.'}`, 'Close', {
          duration: 7000,
        });
      }
    } else {
      this.snackBar.open('Please fill in all required fields correctly.', 'Close', {
        duration: 3000,
      });
    }
  }
}
