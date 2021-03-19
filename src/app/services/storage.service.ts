import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {
private StrgValue:string[] = this.getFromLocalStorage('v');

  
ngOnInit():void {
  
}
GetValue(): string[] {
  return this.StrgValue;
}
saveToLocalStorage(value:string[]):void {
  console.log('saving to local storage...' + value)
  localStorage.setItem('v', JSON.stringify(value));
}
getFromLocalStorage(key: string){
  return localStorage.getItem(key) !== null ? this.GetString(key) : [''];
  
}
GetString(str: string){
  return JSON.parse(localStorage.getItem(str)!);
}

AddValue(entry: any):void {
  this.StrgValue.push(entry);
  this.saveToLocalStorage(this.StrgValue);
}
Remove(index: number){
  this.StrgValue.splice(index,1);
  localStorage.setItem('v',JSON.stringify(this.StrgValue))
}
}

//StorageService