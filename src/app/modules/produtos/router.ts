import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    id: 'id',
    descricao: 'descricao',
    preco: 1.0,
  });
});

export default router;
