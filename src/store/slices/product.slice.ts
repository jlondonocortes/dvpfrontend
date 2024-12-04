import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/ProductInterfaces'

interface WishlistState {
    items: Product[];
}

const initialState: WishlistState = {
    items: []
};

const wishlistSlice = createSlice({
    name: 'Wishlist',
    initialState,
    reducers: {
        addWishlist: (state, action: PayloadAction<Product>) => {
            const existProduct = state.items.find(item => item.id === action.payload.id);
            if(!existProduct) {
                state.items.push({
                    ...action.payload,
                    addedAt: new Date().toISOString()
                });
            }
        },
        removeWishlist: (state,action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        sortWishlist: (state,action: PayloadAction<'name' | 'price'| 'addedAt'>) => {
            switch (action.payload) {
                case 'name':
                    state.items.sort((a,b) => a.title.localeCompare(b.title));
                    break;
                case 'price':
                    state.items.sort((a,b) => a.price - b.price);
                    break;
                case 'addedAt':
                    state.items.sort((a,b) => new Date(b.addedAt!).getTime() - new Date(a.addedAt!).getTime())
            }
        }
    }   
});

export const {
    addWishlist,
    removeWishlist,
    sortWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;