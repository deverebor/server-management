import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const mockedServerStatus = Math.random();
      if (mockedServerStatus < 0.5) {
        this.currentStatus = 'online';
      } else if (mockedServerStatus < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('After View Init');
  }
}
