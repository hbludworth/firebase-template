import { Request, Response, NextFunction } from 'express';
import { HttpInternalError, HttpForbidden } from '@/exceptions';
import authenticatedRoute from '@/middleware/router/authenticatedRoute';

async function adminRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const navigateAdmin = (err?: any) => {
      if (err) {
        next(err);
        return;
      }

      const { user } = req;

      if (user && user.isAdmin) {
        next();
        return;
      } else {
        next(
          new HttpForbidden('You are not authenticated to access this route')
        );
        return;
      }
    };

    authenticatedRoute(req, res, navigateAdmin);
  } catch (err) {
    next(new HttpInternalError(err as string));
  }
}

export default adminRoute;
