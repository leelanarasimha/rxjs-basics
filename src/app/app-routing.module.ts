import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { DistinctOperatorComponent } from './pages/distinct-operator/distinct-operator.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertime', component: BufferTimeOperatorComponent },
      { path: 'buffertoggle', component: BufferToggleOperatorComponent },
      { path: 'bufferwhen', component: BufferWhenOperatorComponent },
      { path: 'take', component: TakeOperatorComponent },
      { path: 'takelast', component: TakeLastOperatorComponent },
      { path: 'takeuntil', component: TakeUntilOperatorComponent },
      { path: 'takewhile', component: TakeWhileOperatorComponent },
      { path: 'skip', component: SkipOperatorComponent },
      { path: 'skiplast', component: SkipLastOperatorComponent },
      { path: 'skipuntil', component: SkipUntilOperatorComponent },
      { path: 'skipwhile', component: SkipWhileOperatorComponent },
      { path: 'distinct', component: DistinctOperatorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
