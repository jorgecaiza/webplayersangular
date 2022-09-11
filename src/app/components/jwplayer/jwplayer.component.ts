import { Component, OnInit } from '@angular/core';
declare var jwplayer: any;
@Component({
  selector: 'app-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.css']
})
export class JwplayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const playerJw = jwplayer('player').setup({
      title: 'THOR:Love and Thunder',
      file: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      // file: "../../../assets/podcast.mp4",
      width: "50%",
      aspectratio: '16:9',
      mute: false,
      stretching: "exactfit",
      image: "https://i.ytimg.com/vi/vKKu-Wt7O2Q/maxresdefault.jpg",
      autostart: true,
      primary: 'html5'
    });


  }

}
