import { group } from '@angular/animations';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, Subscription, merge, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];
  form!: FormGroup;
  selected: string[] = [];
  private notifier = new Subject();

  get selectAll(): FormControl {
    return this.form.get('selectall') as FormControl;
  }
  get options(): FormGroup {
    return this.form.get('options') as FormGroup;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectall: false,
      options: this.fb.group(
        this.itemlist.reduce((acc: { [key: string]: boolean }, ele: string) => {
          // return {...acc, [ele]: false};
          acc[ele] = false;
          return acc;
        }, {})
      ),
    });
    this.trackallitem();
    this.handleSelectAll();

    // this.selectAll.valueChanges.subscribe((val) => {
    //   console.log(val);
    // });
  }
  ngOnDestroy(): void {
    this.stopObs();
  }

  private trackallitem() {
    const inputObervableArr = this.itemlist.map((title) => {
      return this.options.get(title)?.valueChanges.pipe(
        tap((val) => {
          if (val && !this.selected.includes(title)) {
            this.selected.push(title);
          } else {
            this.selected = this.selected.filter((str) => title !== str);
          }

          this.selectAll.setValue(
            this.itemlist.length === this.selected.length,
            { emitEvent: false }
          );
        })
        // takeUntil(this.notifier)
      );
    });
    merge(...inputObervableArr)
      .pipe(takeUntil(this.notifier))
      .subscribe();
  }
  private handleSelectAll() {
    this.selectAll.valueChanges
      .pipe(
        tap((val) => {
          this.setAllItemsValue(val);
        }),
        takeUntil(this.notifier)
      )
      .subscribe();
  }
  private setAllItemsValue(boo: boolean) {
    Object.values(this.options.controls).forEach(
      (control: AbstractControl<any>) => {
        control.setValue(boo);
      }
    );
  }
  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
