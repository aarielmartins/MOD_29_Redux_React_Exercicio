import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorite = action.payload
      if (state.itens.find((p) => p.id === favorite.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== favorite.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(favorite)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
