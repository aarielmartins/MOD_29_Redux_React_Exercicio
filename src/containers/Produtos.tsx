import { Produto as ProdutoType } from '../App'
//IMPORTAÇÃO DO PRODUTOCOMPONENT, COM A RENDERIZAÇÃO DE CADA PRODUTO
//POIS É O ARQUIVO DEFAULT DO COMPONENTE
import Produto from '../components/Produto'

import * as S from './styles'

//ESSE COMPONENTE MOSTRA A LISTA DE TODOS OS PRODUTOS JUNTOS

//RECEBE AS PROPS DO APP E REPASSA PARA OS CARDS
type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  //FUNÇÃO PARA VERIFICAR SE O PRODUTO JA ESTA NOS FAVORITOS
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    //CRIA UM ARRAY COM OS IDS E DEPOIS SÓ COM OS FAVORITOS
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    //RETORNA UM VERDADEIRO OU FALSO SE ESTIVER OU NÃO
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {/* O MAP PERCORRE O ARRAY DE PRODUTOS DA API E RENDERIZA CADA UM */}
        {produtos.map((produto) => (
          // O PRODUTO INDIVIDUALMENTE
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
