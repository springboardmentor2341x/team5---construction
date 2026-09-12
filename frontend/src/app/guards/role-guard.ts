import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard = (
  allowedRoles: string[]
): CanActivateFn => {

  return () => {

    const router = inject(Router);

    const token = localStorage.getItem('access_token');
    const role = localStorage.getItem('role');

    // User is not logged in
    if (!token) {
      return router.createUrlTree(['/login']);
    }

    // User is logged in but doesn't have permission
    if (!role || !allowedRoles.includes(role)) {
      return router.createUrlTree(['/login']);
    }

    return true;
  };
};