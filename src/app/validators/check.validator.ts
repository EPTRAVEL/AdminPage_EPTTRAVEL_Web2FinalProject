import { AbstractControl, ValidatorFn } from "@angular/forms";
// import { Key } from "readline";

// export function customValidator(control: AbstractControl):{[Key_string]}

export function customValidator(regex: RegExp):ValidatorFn{
    return (control: AbstractControl): {[key:string]:any} | null =>{
        const check = regex.test(control.value)
        return check ? {nameNotMatch: {value: control.value}} : null
    }
}