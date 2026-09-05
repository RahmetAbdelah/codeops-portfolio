export const initialState = {
  items: []
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1
        };
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case 'REMOVE_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex === -1) return state;

      const existingItem = state.items[existingIndex];
      if (existingItem.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id)
        };
      }

      const updatedItems = [...state.items];
      updatedItems[existingIndex] = {
        ...existingItem,
        quantity: existingItem.quantity - 1
      };
      return { ...state, items: updatedItems };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}