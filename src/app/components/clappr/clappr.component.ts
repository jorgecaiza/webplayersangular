import { Component, OnInit } from '@angular/core';
declare const Clappr: any;

@Component({
  selector: 'app-clappr',
  templateUrl: './clappr.component.html',
  styleUrls: ['./clappr.component.css']
})
export class ClapprComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var player = new Clappr.Player({ source: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4", parentId: "#player" });

  }

}
