import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { FunctionObservableComponent } from './components/function-observable/function-observable.component';
import { CancellingObservableComponent } from './components/cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
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
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { DistinctOperatorComponent } from './pages/distinct-operator/distinct-operator.component';
import { DistinctUntilChangedOperatorComponent } from './pages/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { DistinctUntilKeyChangedComponent } from './pages/distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { SampleOperatorComponent } from './pages/sample-operator/sample-operator.component';
import { AuditOperatorComponent } from './pages/audit-operator/audit-operator.component';
import { ThrottleOperatorComponent } from './pages/throttle-operator/throttle-operator.component';
import { FirstOperatorComponent } from './pages/first-operator/first-operator.component';
import { LastOperatorComponent } from './pages/last-operator/last-operator.component';
import { DebounceOperatorComponent } from './pages/debounce-operator/debounce-operator.component';
import { ElementAtOperatorComponent } from './pages/element-at-operator/element-at-operator.component';
import { IgnoreElementsOperatorComponent } from './pages/ignore-elements-operator/ignore-elements-operator.component';
import { SingleOperatorComponent } from './pages/single-operator/single-operator.component';
import { MapOperatorComponent } from './pages/map-operator/map-operator.component';
import { MapToOperatorComponent } from './pages/map-to-operator/map-to-operator.component';
import { AjaxOperatorComponent } from './pages/ajax-operator/ajax-operator.component';
import { MergeMapOperatorComponent } from './pages/merge-map-operator/merge-map-operator.component';
import { MergeMapToOperatorComponent } from './pages/merge-map-to-operator/merge-map-to-operator.component';
import { ConcatMapOperatorComponent } from './pages/concat-map-operator/concat-map-operator.component';
import { ConcatMapToOperatorComponent } from './pages/concat-map-to-operator/concat-map-to-operator.component';
import { ExhaustMapOperatorComponent } from './pages/exhaust-map-operator/exhaust-map-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
    OperatorsComponent,
    BufferOperatorComponent,
    BufferCountOperatorComponent,
    BufferTimeOperatorComponent,
    BufferToggleOperatorComponent,
    BufferWhenOperatorComponent,
    TakeOperatorComponent,
    TakeLastOperatorComponent,
    TakeUntilOperatorComponent,
    TakeWhileOperatorComponent,
    SkipLastOperatorComponent,
    SkipUntilOperatorComponent,
    SkipWhileOperatorComponent,
    DistinctOperatorComponent,
    DistinctUntilChangedOperatorComponent,
    DistinctUntilKeyChangedComponent,
    FilterOperatorComponent,
    SampleOperatorComponent,
    AuditOperatorComponent,
    ThrottleOperatorComponent,
    FirstOperatorComponent,
    LastOperatorComponent,
    DebounceOperatorComponent,
    ElementAtOperatorComponent,
    IgnoreElementsOperatorComponent,
    SingleOperatorComponent,
    MapOperatorComponent,
    MapToOperatorComponent,
    AjaxOperatorComponent,
    MergeMapOperatorComponent,
    MergeMapToOperatorComponent,
    ConcatMapOperatorComponent,
    ConcatMapToOperatorComponent,
    ExhaustMapOperatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
