
const initialState = {
  cartItems: [],
  cartTotal: 0,
};

// Helper function to find index of item in cart
const findItemIndex = (cartItems, id) => cartItems.findIndex(item => item.id === id);

// Helper function to calculate cart total
const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0);
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART': {
        const itemIndex = findItemIndex(state.cartItems, payload.id);
        let updatedCartItems;
        if (itemIndex >= 0) {
          updatedCartItems = [...state.cartItems];
          updatedCartItems[itemIndex].quantity += 1; // Increment quantity
        } else {
          updatedCartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        }
        console.log(payload.id, updatedCartItems,calculateCartTotal(updatedCartItems))
        console.log("Cart items :" , state.cartItems)
        return {
          ...state,
          cartItems: updatedCartItems,
          cartTotal: calculateCartTotal(updatedCartItems),
        };
      }

    default:
      return state;
  }
};

export default reducer;
