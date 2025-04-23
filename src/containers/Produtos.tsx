import { Produto as ProdutoType } from '../App'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'
//IMPORTAÇÃO DO PRODUTOCOMPONENT, COM A RENDERIZAÇÃO DE CADA PRODUTO
//POIS É O ARQUIVO DEFAULT DO COMPONENTE
import Produto from '../components/Produto'

import * as S from './styles'

//ESSE COMPONENTE MOSTRA A LISTA DE TODOS OS PRODUTOS JUNTOS

const ProdutosComponent = () => {
  const { data: products } = useGetProdutosQuery()
  const fav = useSelector((state: RootReducer) => state.favorito.itens)

  //FUNÇÃO PARA VERIFICAR SE O PRODUTO JA ESTA NOS FAVORITOS
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    //CRIA UM ARRAY COM OS IDS E DEPOIS SÓ COM OS FAVORITOS
    const produtoId = produto.id
    const IdsDosFavoritos = fav.map((f) => f.id)
    //RETORNA UM VERDADEIRO OU FALSO SE ESTIVER OU NÃO
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {/* O MAP PERCORRE O ARRAY DE PRODUTOS DA API E RENDERIZA CADA UM */}
        {products?.map((produto) => (
          // O PRODUTO INDIVIDUALMENTE
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
