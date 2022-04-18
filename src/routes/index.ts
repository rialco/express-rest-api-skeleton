import { Router } from 'express';
import { registerUserRoutes } from './users';

export function registerRoutes(router: Router) {
  registerUserRoutes(router);
}
