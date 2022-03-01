export const initialState = {
    prices: [],
    products: []
}

export const AppReducer = (state = initialState, action) => {
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
        case "load_items": {
            return {
                ...state,
                prices: action.value.prices,
                products: action.value.products
            }
        }
        case "set_prices": {
            return {
                ...state,
                prices: action.value
            }
        }
        default:
            return state
    }
}