const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// Customer reducer
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        faullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

// Action creators
export function createCustomer(fullName, nationalID, createdAt) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
    return {type:'customer/updateName', payload: fullName}
}
