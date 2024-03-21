import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web-front-2023';

  ngOnInit(): void {
    // Swal.fire({
    //   imageUrl: '../../../assets/sorteo.webp',
    //   width: 350,
    //   imageWidth: '100%',
    //   imageHeight: '100%',

    //   allowOutsideClick: false,
    //   showCloseButton: true,
    //   showConfirmButton: false,
    //   background: '#e52678',
    //   html: '<div style="display:flex;justify-content:center;align-items:center"> <div style="position:absolute;padding-top:80px" > <a style="color:white;font-weight:700;background-color: #bfd647; text-decoration:none;padding:10px 10px; font-size: 12px; line-height: 3" href="https://app.perumoney.pe/auth/sing-up" target="_blank">Participar</a><br> <a href="../../../assets/terminosycondicionesdelsorteo.pdf" style="font-size: 12px; color: #fff; text-decoration: none;">Términos y Condiciones del sorteo</a></div></div>',
    // });
  }
}
