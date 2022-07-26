import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{

  slideOpt = {
    initialSlide: 0, //slide inicial
    slidesPerView: 1, //slide por vista
    centeredSlides: true, //que las slides esten centradas
    speed: 400 //velocidad de transicion de casa slide en milisegundo
  }

  slides = [
    {
      title: "Youtube",
      subtitle: "Youtube Music",
      icon: "musical-notes-outline",
      img: "assets/images/youtubemusic.jpg",
      description: "YouTube Music es un servicio de retransmisión de música desarrollado por YouTube. En su versión gratuita permite ver vídeos musicales entre los que se insertan vídeos publicitarios"
    },
    {
      title: "VLC",
      subtitle: "VLC Media Player",
      icon: "musical-note-outline",
      img: "assets/images/vlcmedia.jpg",
      description: "VLC media player es un reproductor y framework multimedia, libre y de código abierto desarrollado por el proyecto VideoLAN"
    },
    {
      title: "Grovee",
      subtitle: "Grovee Music ",
      icon: "play-outline",
      img: "assets/images/groveemusic.jpg",
      description: "Groove Música es un reproductor de música digital desarrollado por Microsoft integrado en los ordenadores de escritorio y tabletas con sistema operativo Windows 10 o posterior y en los teléfonos con sistema operativo Windows 10 Mobile."
    },
    {
      title: "MP3",
      subtitle: "Mp3 Media Player",
      icon: "play-outline",
      img: "assets/images/Slide4.jpg",
      description: "El reproductor de música de Android admite entonces formato MP3 y una vez que tengas el archivos descargado en la memoria de tu dispositivo simplemente debes pulsar sobre él y dicha música se podrá reproducir sin inconveniente"
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  ngOnInit(): void {
  }

  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login");
  }

}
