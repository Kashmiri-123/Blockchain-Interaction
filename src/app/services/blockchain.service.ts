import { Injectable } from '@angular/core';
import { BlockChain } from 'BlockChain-Transaction/src/blockChain';
import EC from 'elliptic';
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchainInstance = new BlockChain();
  public walletkeys = [];

  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransaction('my-wallet-address');
    this.generateWalletKeys();
  }

  getBlocks()
  {
    return this.blockchainInstance.chain;
  }

  generateWalletKeys()
  {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeypair();

    this.walletkeys.push({
      keyObj : key,
      publicKey: key.getPublic('hex'),
      privatekey: key.getPrivate('hex'),
    });
  }
}
