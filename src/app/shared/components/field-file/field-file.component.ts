import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-field-file',
  templateUrl: './field-file.component.html',
  styleUrls: ['./field-file.component.scss'],
})
export class FieldFileComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() showValidationErrorMessage = true;

  value: string;
  isDisabled = false;

  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  // FORM CONTROL FUNCTIONS
  setValue(files) {
    this.value = files.item(0);
    this.updateChanges();
  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}
