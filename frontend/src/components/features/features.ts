import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  public items = [
    {
      icon: 'bolt',
      title: 'Blazing RPC',
      desc: 'Smart revalidation & caching for near-instant reads.',
    },
    {
      icon: 'security',
      title: 'Non-custodial',
      desc: 'Connect wallets directly; you keep the keys.',
    },
    { icon: 'token', title: 'Token Gating', desc: 'Gate pages & features by token/NFT ownership.' },
    { icon: 'hub', title: 'Multi-Chain', desc: 'Base, Ethereum, Polygon & more via adapters.' },
    { icon: 'speed', title: 'Gas Optimized', desc: 'Batch writes & simulate before sending.' },
    {
      icon: 'design_services',
      title: 'Headless UI',
      desc: 'Material + CSS. Bring your own brand.',
    },
  ];
}
