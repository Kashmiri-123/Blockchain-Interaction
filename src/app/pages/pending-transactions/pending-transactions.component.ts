import { BlockchainService } from '../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.css']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];
  constructor(private blockchainService: BlockchainService){
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit() {
  }
  
  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();
  }

}
