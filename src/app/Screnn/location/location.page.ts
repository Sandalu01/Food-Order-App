import { MapType } from '@angular/compiler';
import { Component, OnInit,NgZone,ElementRef,ViewChild, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var google: any;


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  @ViewChild('container', { static: false }) mapContainer!: ElementRef;

  locationdata:any ;
  map:any; 

  constructor(private ngzone:NgZone,private render:Renderer2,private elementref:ElementRef) { }

  ngAfterViewInit():void{
    this.loadmap();

  }


  ngOnInit() {


 
    
  }

  loadmap(){
    this.ngzone.run(() => {
      this.map = new google.maps.Maps.LatLng(0,0);
      const option={
        center:this.locationdata,
        zoom:10,
        MapTypeId:google.maps.MapTypeId.ROADMAP
      }

      this.map=new google.maps.Map(this.elementref.nativeElement.querySelector(".map-Container"),option);
      
    })

  }

  getcurrentloacation(){
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.locationdata=new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        this.map.setcenter(this.locationdata);

        new google.maps.Marker({
          position:this.locationdata,
          map:this.map,
          Title:"Google Maps Location"
        })


      }
      
    ,)}
  }

}
