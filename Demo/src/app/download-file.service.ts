import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpResponse, HttpParams } from '@angular/common/http';
//import {Http, ResponseContentType} from '@angular/http';
//import {HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  
  constructor(private http:HttpClient) { }
  downloadfile(f:any):Observable<any>{
    const url='http://localhost:4200/#'+f;
    const param=new HttpParams().set("file",f.value)
    const options=param;
    return this.http.get(url, {...options,responseType: 'blob'});
  }
   //{responseType: 'blob'}
  }
//   downloadFile(id): Observable<Blob> {
//     let options = new RequestOptions({responseType: ResponseContentType.Blob });
//     return this.http.get(this._baseUrl + '/' + id, options)
//         .map(res => res.blob())
//         .catch(this.handleError)
// }



