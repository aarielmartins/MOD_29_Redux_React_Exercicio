import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

type Props = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  //FUNÇÃO PARA SOMAR O VALOR TOTAL. USA O REDUCE PARA REDUZIR O ARRAY A UM VALOR SÓ
  //ACC = ACUMULADOR, OU SEJA, SOMA O VALOR DO ITEM AO TOTAL ACUMULADO
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
    //INICIA COM O VALOR 0
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {/* PEGA A FUNÇÃO DE TRANSFORMAR EM REAL E ADICONA O VALOR EM REAL */}
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
