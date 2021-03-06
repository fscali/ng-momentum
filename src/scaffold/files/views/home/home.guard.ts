import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
/**
 * Home View guard for view access and data preloading.
 */
export class HomeGuard implements CanActivate {

    /**
     * Method to determine if we can activate the view based on custom logic.
     * @param {ActivatedRouteSnapshot} next
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean> | Promise<boolean> | boolean}
     */
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
