import { BlockchainService } from '../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'savjeecoin';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionsComponent implements OnInit {

  public newTx;
  public walletKey;

  constructor(private blockchainService: BlockchainService) {
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
    this.newTx = new Transaction()
  }

  createTransaction(){
      this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);

    this.newTx =  new Transaction();
  }

}