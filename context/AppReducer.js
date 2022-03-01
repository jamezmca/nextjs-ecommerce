export const initialState = {
    prices: [],
    products: []
}

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "add_product": {
            return {
                ...state,
                products: [...state.products, action.value]
            }
        }
        case "remove_product": {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.value)
            }
        }
        case "load_prices": {
            return {
                ...state,
                prices: action.value
            }
        }
    }
}