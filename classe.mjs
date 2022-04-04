class produtos{
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preço, estoque,quantidade){
    this.nome = nome;
    this.preco = preço;
    this.emEstoque = estoque;
    this.quantidade = quantidade;
    }
}

class pedidos {
    numeroPedido;
    nomeCliente;
    dataPedido;
    estaPago;
    listaProdutos;
    

    constructor(numero_Pedido, nome_Cliente,){
    this.numeroPedido = numero_Pedido;
    this.dataPedido = (new Date().toLocaleDateString());
    this.estaPago = false;
    this.listaProdutos = [];
    this.nomeCliente = nome_Cliente;
    }

   
    adicionarProdutos(item){
       if (item instanceof produtos){
             this.listaProdutos.push({...item})
         }
    }

    calcularTotal(){
     let valorTotal = 0
       this.listaProdutos.map((produto)=> {
       valorTotal += (produto.quantidade * produto.preco)
    })
    return (`Total da compra Foi de R$ ${valorTotal.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} `)
  }
   exibirCompra(){
    console.log (`Pedido: ${this.numeroPedido} - Cliente: ${this.nomeCliente}`)
    this.listaProdutos.map((itens) => {
      console.log(`Qt: ${itens.quantidade} | Produtos: ${itens.nome} | Valor un.:  ${itens.preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} |  Valor Total: R$ ${(itens.quantidade * itens.preco).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} `)
       })
      console.log(this.calcularTotal())
      }
    
    
}


const produto1 = new produtos ("Danone",5, true,10)
const pedido1 = new pedidos (20220001,"Dayane")
pedido1.adicionarProdutos(produto1)


const produto2 = new produtos ("Arroz",15, true,5)
const pedido2 = new pedidos (20220002,"Gustavo")
pedido2.adicionarProdutos(produto2)


const produto3 = new produtos ("Salgadinho",5, true,5)
pedido1.adicionarProdutos(produto3)

const produto4 = new produtos ("Bolacha",10, true,3)
pedido1.adicionarProdutos(produto4)

const produto5 = new produtos ("feijão",10, true,5)
pedido2.adicionarProdutos(produto5)


pedido1.exibirCompra()
console.log(`-----------------------------------------------------------------------`)
pedido2.exibirCompra()
//console.log(pedido1)
//console.log(pedido2)