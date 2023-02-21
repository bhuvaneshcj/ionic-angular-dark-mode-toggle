import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  darkModeActivated: boolean = false;
  colorList: any = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger',
    'dark',
    'medium',
  ];

  constructor() {}

  ionViewWillEnter() {
    const checkIsDarkMode = localStorage.getItem('darkModeActivated');
    checkIsDarkMode == 'true'
      ? (this.darkModeActivated = true)
      : (this.darkModeActivated = false);
  }

  toggleDarkMode(ev: any) {
    const toggleChecked = ev.detail.checked;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (systemDark.matches) {
      if (toggleChecked) {
        localStorage.setItem('darkModeActivated', 'true');
        document.body.setAttribute('data-theme', 'dark');
      } else {
        localStorage.setItem('darkModeActivated', 'false');
        document.body.setAttribute('data-theme', 'light');
      }
    } else {
      this.darkModeActivated = false;
      console.log('Dark mode not supported for this device');
    }
  }
}
