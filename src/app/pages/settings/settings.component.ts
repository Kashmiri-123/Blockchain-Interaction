import { BlockchainService } from './../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public blockchain;

  constructor(private BlockchainService: BlockchainService) {
     this.blockchain = BlockchainService.blockchainInstance;
   }

  ngOnInit() {
  }

}
