const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// Reducer
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.loan,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loanPurpose: action.payload.purpose,
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

// Action Creators
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(loan, purpose) {
  return { type: "account/requestLoan", payload: { loan, purpose } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
