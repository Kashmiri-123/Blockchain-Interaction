import { CreateTransactionsComponent } from './pages/create-transaction/create-transaction.component' ;
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';


const routes: Routes = [
  {path:'', component: BlockchainViewerComponent },
  {path:'settings', component: SettingsComponent },
  {path:'new/transactions', component: CreateTransactionsComponent },
  {path:'new/transactions/pending', component: PendingTransactionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
