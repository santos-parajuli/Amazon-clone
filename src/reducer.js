export const initialState ={
    basket:[],
    user:null,
}
export const basketTotalPrice = (basket) =>{
    return basket?.reduce((amount,item) =>  item.price.value+amount,0);
    
}
const reducer = (state,action) =>{
    switch (action.type) {
			case "ADD_TO_BASKET":
				return {
					...state,
					basket: [...state.basket, action.item],
				};
			case "REMOVE_FROM_BASKET":
				const index = state.basket.findIndex(
					(basketItem) => basketItem.title === action.item
				);
				let newBasket = [...state.basket];
				if (index >= 0) {
					newBasket.splice(index, 1);
				} else {
					console.warn("Cant remove");
				}
				return { ...state, basket: newBasket };
			case "SET_USER": {
				return { ...state, user: action.user };
			}
			case "REMOVE_USER": {
				return { ...state, user: null };
			}
			default:
				return;
		}
} 
export default reducer;