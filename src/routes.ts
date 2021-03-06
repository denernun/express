import { Router } from 'express';
import ProdutoRouter from './app/modules/produtos/router';

class Routes {
  static define(router: Router): Router {
    router.use('/produtos', ProdutoRouter);
    return router;
  }
}

export default Routes.define(Router());
