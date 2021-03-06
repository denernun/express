class Produto {
  id = '';
  descricao = '';
  preco = 0;
}

class Repository implements IRepository<Produto> {
  create(data: Produto): Produto {
    return data;
  }
}

interface IRepository<T> {
  create(data: T): T;
}

interface IProdutoRepository extends IRepository<Produto> {
  create(data: Produto): Produto;
}

class ProdutoRepository implements IProdutoRepository {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }
}
