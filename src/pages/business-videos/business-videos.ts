import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@IonicPage()
@Component({
  selector: 'page-business-videos',
  templateUrl: 'business-videos.html',
})
export class BusinessVideosPage {

    videos : any[] = [
    {
      title: "ATJOIN",
      video: "https://www.youtube.com/embed/622NeSptxsE"
    },
    {
      title: "ATJOIN",
      video: "https://www.youtube.com/embed/w8fy1nEkiYQ"
    },
    {
      title: "ATJOIN",
      video: "https://www.youtube.com/embed/PSrZJWtT5c8"
    },
    {
      title: "ATJOIN",
      video: "https://www.youtube.com/embed/HUGm5MWI2po"
    },
    {
      title: "ATJOIN",
      video: "https://www.youtube.com/embed/ry_z4gjBRH8"
    },
    {
      title: "ATJOIN",
      video: "https://www.youtube.com/embed/PSrZJWtT5c8"
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public sanitizer: DomSanitizer
              // private youtube: YoutubeVideoPlayer
            ) {
  }

  // VideoPlay(videoId) {
  //   this.youtube.openVideo(videoId);
  // }

}
