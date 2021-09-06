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
import { SwitchMapOperatorComponent } from './pages/switch-map-operator/switch-map-operator.component';
import { SwitchMapToOperatorComponent } from './pages/switch-map-to-operator/switch-map-to-operator.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { ColdObservableComponent } from './pages/cold-observable/cold-observable.component';
import { MulticastOperatorComponent } from './pages/multicast-operator/multicast-operator.component';
import { ShareOperatorComponent } from './pages/share-operator/share-operator.component';
import { BehaviorSubjectComponent } from './pages/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './pages/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './pages/async-subject/async-subject.component';
import { VoidSubjectComponent } from './pages/void-subject/void-subject.component';
import { PublishBehaviorOperatorComponent } from './pages/publish-behavior-operator/publish-behavior-operator.component';
import { PublishLastOperatorComponent } from './pages/publish-last-operator/publish-last-operator.component';
import { PublishReplayOperatorComponent } from './pages/publish-replay-operator/publish-replay-operator.component';
import { CatchErrorOperatorComponent } from './pages/catch-error-operator/catch-error-operator.component';
import { RetryOperatorComponent } from './pages/retry-operator/retry-operator.component';
import { RetryWhenOperatorComponent } from './pages/retry-when-operator/retry-when-operator.component';
import { CombineLatestOperatorComponent } from './pages/combine-latest-operator/combine-latest-operator.component';
import { ConcatOperatorComponent } from './pages/concat-operator/concat-operator.component';
import { ForkJoinOperatorComponent } from './pages/fork-join-operator/fork-join-operator.component';
import { MergeOperatorComponent } from './pages/merge-operator/merge-operator.component';
import { PartitionOperatorComponent } from './pages/partition-operator/partition-operator.component';
import { RaceOperatorComponent } from './pages/race-operator/race-operator.component';
import { ZipOperatorComponent } from './pages/zip-operator/zip-operator.component';
import { SchedulersComponent } from './pages/schedulers/schedulers.component';
import { DeferOperatorComponent } from './pages/defer-operator/defer-operator.component';
import { RangeOperatorComponent } from './pages/range-operator/range-operator.component';
import { GenerateOperatorComponent } from './pages/generate-operator/generate-operator.component';
import { TimerOperatorComponent } from './pages/timer-operator/timer-operator.component';
import { ScanOperatorComponent } from './pages/scan-operator/scan-operator.component';
import { CountOperatorComponent } from './pages/count-operator/count-operator.component';
import { MaxOperatorComponent } from './pages/max-operator/max-operator.component';
import { MinOperatorComponent } from './pages/min-operator/min-operator.component';
import { ReduceOperatorComponent } from './pages/reduce-operator/reduce-operator.component';
import { IsEmptyOperatorComponent } from './pages/is-empty-operator/is-empty-operator.component';
import { FindIndexOperatorComponent } from './pages/find-index-operator/find-index-operator.component';
import { FindOperatorComponent } from './pages/find-operator/find-operator.component';

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
    SwitchMapOperatorComponent,
    SwitchMapToOperatorComponent,
    SubjectComponent,
    ColdObservableComponent,
    MulticastOperatorComponent,
    ShareOperatorComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    VoidSubjectComponent,
    PublishBehaviorOperatorComponent,
    PublishLastOperatorComponent,
    PublishReplayOperatorComponent,
    CatchErrorOperatorComponent,
    RetryOperatorComponent,
    RetryWhenOperatorComponent,
    CombineLatestOperatorComponent,
    ConcatOperatorComponent,
    ForkJoinOperatorComponent,
    MergeOperatorComponent,
    PartitionOperatorComponent,
    RaceOperatorComponent,
    ZipOperatorComponent,
    SchedulersComponent,
    DeferOperatorComponent,
    RangeOperatorComponent,
    GenerateOperatorComponent,
    TimerOperatorComponent,
    ScanOperatorComponent,
    CountOperatorComponent,
    MaxOperatorComponent,
    MinOperatorComponent,
    ReduceOperatorComponent,
    IsEmptyOperatorComponent,
    FindIndexOperatorComponent,
    FindOperatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
