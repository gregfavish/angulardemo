import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './authentication.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isLoggedIn();
  }
}