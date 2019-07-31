import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VideoPlayer, VideoOptions} from '@ionic-native/video-player'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {

  videoOptions: VideoOptions
  videoUrl: string;

  constructor(private videoPlayer= VideoPlayer, public navCtrl: NavController) { }

stopVideo() {
  this.videoPlayer.close
  console.log("The video has stopped")
}

  async playVideo () {
    try {
      this.videoOptions = {
        volume: 0.7
      }
      this.videoUrl = "https://www.youtube.com/watch?v=J6vIS8jb6Fs"
      setTimeout (() =>{
        this.stopVideo();
      }, 3000)
      await this.videoPlayer.play(this.videoUrl, this.videoOptions)
      console.log("Video Has COmpleted")
    }
    catch(e){
      console.error(e);
    }
  }

  ngOnInit() {
  }

}
