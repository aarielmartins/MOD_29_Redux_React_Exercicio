import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [carrinho, setCarrinho] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  //CHAMA A API E SALVA NO ESTADO PRODUTOS OS PRODUTOS QUE ESTÃO NA API
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  //FUNÇÃO DE ADICIONAR AO CARRINHO
  //VÊ SE O PRODUTO JA EXISTE NO CARRINHO. CASO EXISTA EMITE UM ALERTA
  //CASO NÃO ADICIONA AO CARRINHO
  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, produto])
    }
  }

  //FUNÇÃO DE FAVORITAR O PRODUTO
  //VÊ SE O PRODUTO JA EXISTE NOS FAVORITOS. CASO EXISTA CRIA UMA NOVA LISTA
  //APENAS COM OS ITENS DIFERENTES DO ITEM FAVORITADO E ALTERA O ESTADO PARA ESSA LISTA
  //CASO NÃO ELE ADICIONA AOS FAVORITOS ESSE PRODUTO
  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
