import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let element = document.querySelector('#nav') as HTMLElement;
    if (window.scrollY > element.clientHeight*2) {
      element.classList.add('bg-black');
    } else {
      element.classList.remove('bg-black');
    }
  }
  ngOnInit(): void {
  }

  goLanding() {
    this.router.navigate(['/landing']);
    }

  goHome() {
    this.router.navigate(['/home']);
    }

  goContact() {
    this.router.navigate(['/contact']);
    }
  goProducts() {
    this.router.navigate(['/products']);
    }


}
