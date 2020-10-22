import { Component } from '@angular/core';
import { DownloadFileService } from './download-file.service';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  images:any=[];
  allfiles:any=[];
  p:any=1;
  dfile:any=[];
  filter:string;
  delarray:any=[];
  checks=false;
 
  constructor(private service:DownloadFileService){

 }
 fileuploads(event){
  const files=event.target.files;
  console.log(files);
  if(files){
    for(let i=0;i<files.length;i++){
      const image={name:'',type:'',size:'',dated:'', url:''};
      this.allfiles.push(files[i]);
      image.name=files[i].name;
      image.type=files[i].type;
      image.size=files[i].size;
      image.dated=new Date()+'';
      const reader=new FileReader();
      reader.onload = (filedata)=>{
        image.url=reader.result + '';
        this.images.push(image);
      };
      reader.readAsDataURL(files[i]);
    }
  }
  event.srcElement.value=null;
 }

 deleteImage(image:any){
  const index= this.images.indexOf(image);
  this.images.splice(index,1);
  this.allfiles.splice(index,1);
 }

 downFile(image:any){
   //const index1=this.images.indexOf(image);
  this.service.downloadfile(image.url).subscribe(response => {
    let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    //window.open(url);
    //window.location.href = response.url;
    fileSaver.saveAs(blob, image.name);
  }), error => console.log('Error downloading the file'),
               () => console.info('File downloaded successfully');

 }
//  downloadFile(image:any){
//   this.dfile.push(image);
//   console.log(this.dfile);
//  }


 bulkselect(event){  
    if(event.target.checked==true){
      this.checks=true;
    }
    else{
      this.checks=false
    }

 }

 deleteAll(){
  console.log(this.allfiles)
  if(this.allfiles){
    for(let k=0;k<this.allfiles.length;k++){
      this.allfiles.splice(k)
    }
  }else{
    console.log("empty")
  }
}
  // const delfile=event.target.value;
  // console.log(delfile);
  // if(delfile){
  //   for(let i=0;i<delfile.length;i++){
  //     this.delarray.push(delfile[i]);
  //   }
  // }console.log(delfile);console.log(this.delarray);
  // if(this.bulkselect){
  //   for(let i=0;i<this.delarray.length;i++){
  //     this.delarray.pop();
  //   }
  // }console.log(this.delarray);
  

 //sorting
 key: string = 'name'; //set default
 reverse: boolean = false;
 sort(key){
   this.key = key;
   this.reverse = !this.reverse;
 }
 save(){

 }
}
