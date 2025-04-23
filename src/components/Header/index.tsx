import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const fav = useSelector((state: RootReducer) => state.favorito.itens)

  //FUNÇÃO PARA SOMAR O VALOR TOTAL. USA O REDUCE PARA REDUZIR O ARRAY A UM VALOR SÓ
  //ACC = ACUMULADOR, OU SEJA, SOMA O VALOR DO ITEM AO TOTAL ACUMULADO
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
    //INICIA COM O VALOR 0
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{fav.length} favoritos</span>
        <img src={cesta} />
        <span>
          {/* PEGA A FUNÇÃO DE TRANSFORMAR EM REAL E ADICONA O VALOR EM REAL */}
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
