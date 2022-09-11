import { Component, OnInit } from '@angular/core';
declare const bitmovin: any;

@Component({
  selector: 'app-bitmovin',
  templateUrl: './bitmovin.component.html',
  styleUrls: ['./bitmovin.component.css']
})
export class BitmovinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var playerConfig = {
      "key": "cf820da2-ab0a-47dc-b742-10b261ade1e6",
      "playback": {
        "muted": true,
        "autoplay": false
      },
      "style": {
        "width": '50%',
        "aspectratio": '16:9',
      }
    }
    var container = document.getElementById('my-player');
    var player = new bitmovin.player.Player(container, playerConfig);
    var sourceConfig = {
      "title": "Test Video",
      "description": "Bitmovin",
      "hls": "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      "poster": "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
    }
    player.load(sourceConfig).then(function () {
      console.log('Successfully loaded Source Config!');
    }).catch(function (reason: any) {
      console.log('Error while loading source:', reason);
    }
    );
  }

}
