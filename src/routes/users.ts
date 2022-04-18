import { Request, Response, Router } from 'express';

export function registerUserRoutes(router: Router) {
  router.use('/users', router);
  router.get('/', (req: Request, res: Response) => {
    res.send('Hello there');
  });
}
