import { Request, Response, Router } from 'express';

const route = Router();

export function registerUserRoutes(router: Router) {
  router.use('/users', route);
  route.get('/', (req: Request, res: Response) => {
    res.json('Hello there');
  });
}
