import { Component, OnInit } from '@angular/core';
declare var flowplayer: any;
@Component({
  selector: 'app-flowplayer',
  templateUrl: './flowplayer.component.html',
  styleUrls: ['./flowplayer.component.css']
})
export class FlowplayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    flowplayer('#player_container', {
      src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
      token: ' eyJraWQiOiJVcGgxcmRETVVHak4iLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6MjIsXCJpZFwiOlwiVXBoMXJkRE1VR2pOXCJ9IiwiaXNzIjoiRmxvd3BsYXllciJ9.ajvmHAcbsXUXPoU-chEPkocNVHs4XzlFs7UBUI6C2RB0KyACY8LJWNZoQtuTLlhdHRm7-xNDlIQW0hiEdimrGQ',
      style: 'position: relative',
      width: '50%',
    })

  }

}
