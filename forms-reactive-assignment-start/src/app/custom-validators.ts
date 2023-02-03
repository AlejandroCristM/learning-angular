import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
    static invalidProjName(control: FormControl): {[s:string]:boolean}{
        if(control.value==='Test'){
            return {'invalidProjName':true}
        }
        return null;
    }


    static invalidProjNameAsync(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise(
            (res, rej)=>{
                setTimeout(()=>{
                    if(control.value==='TestProject'){
                        res({'invalidProjName':true});
                    }else{
                        res(null);
                    }
                },1500);
            }
        );
        return promise;
    }

}