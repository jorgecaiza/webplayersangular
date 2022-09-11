import { Component, OnInit } from '@angular/core';
declare const $bp: any;
@Component({
  selector: 'app-brid',
  templateUrl: './brid.component.html',
  styleUrls: ['./brid.component.css']
})
export class BridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $bp("DIV_ID", { "id": "PLAYER_ID", "width": "480", "height": "270", "video": "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4" });

  }

}
