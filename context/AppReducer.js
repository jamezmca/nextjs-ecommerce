export const initialState = {
    prices: [],
    products: {} //[{id: {[size]: quantity}}]
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add_product": { //receives [[id], [size]]
            return {
                ...state,
                products: {
                    ...state.products,
                    ...(!(action.value[0] in state.products) ? {
                        [action.value[0]]: {
                            [action.value[1]]: 1
                        }
                    } : !(action.value[1] in state.products[action.value[0]]) ? {
                        [action.value[0]]: {
                            ...state.products[action.value[0]],
                            [action.value[1]]: 1
                        }
                    } : {
                        [action.value[0]]: {
                            ...state.products[action.value[0]],
                            [action.value[1]]: 1 + state.products[action.value[0]][action.value[1]]
                        }
                    })
                }
            }
        }
        case "remove_one": {
            return {
                ...state,

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