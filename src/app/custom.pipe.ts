import { PipeTransform,Pipe } from '@angular/core';


@Pipe({
name:"gender"
})
export class CustomPipe implements PipeTransform{
transform(value:any,gender:string){
if(gender.toLowerCase()==='male')
{
    return 'mr'+value;
}else{
    return 'miss'+value;
}
}
}