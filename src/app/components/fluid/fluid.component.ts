import { Component, OnInit } from '@angular/core';
declare const fluidPlayer: any;
@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.component.html',
  styleUrls: ['./fluid.component.css']
})
export class FluidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myFP = fluidPlayer(
      'video-id', {
      "layoutControls": {
        "controlBar": {
          "autoHideTimeout": 3,
          "animated": true,
          "autoHide": true
        },
        "theatreSettings": {
          "width": '60%', // Default '100%'
          "height": '400px', // Default '60%'
          "marginTop": 50, // Default 0
          "horizontalAlign": 'center' // 'left', 'right' or 'center'
        },
        "htmlOnPauseBlock": {
          "html": null,
          "width": 640,
          "height": 480,
          "horizontalAlign": 'center'
        },
        "autoPlay": false,
        "mute": false,
        "allowTheatre": true,
        "playPauseAnimation": true,
        "playbackRateEnabled": true,
        "allowDownload": true,
        "playButtonShowing": true,
        "fillToContainer": true,
        "aspectRatio": "16:9",
        "posterImage": ""

      },
      "vastOptions": {
        "adList": [],
        "adCTAText": false,
        "adCTATextPosition": ""
      }
    });
  }

}
