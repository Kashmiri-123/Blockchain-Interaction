import { BlockchainService } from 'src/app/services/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.css']
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;

  constructor(private BlockchainService : BlockchainService) {
    this.blocks = BlockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
  }
  ngOnInit() {
  }

  showTransactions(block){
    this.selectedBlock = block;
  }

}
