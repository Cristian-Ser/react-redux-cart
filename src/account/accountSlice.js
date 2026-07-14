import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loanPurpose = "";
      state.loan = 0;
    },
  },
});

console.log(accountSlice);

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

console.log(requestLoan(1000, "buy car"));

export default accountSlice.reducer;

/*
// Reducer
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload, isLoading: false };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.loan,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.loan,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    case "account/convertingCurrency":
      return {...state, isLoading: true}
    default:
      return state;
  }
}

// Action Creators
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    // API call
    dispatch({type: "account/convertingCurrency"})

    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?=base=${currency}&symbols=USD`,
    );

    const data = await res.json();
    const rate = data.rates.USD
    const convertedAmount = Number((amount * rate).toFixed(2))
    console.log(data)

    // return action
    dispatch({type: "account/deposit", payload: convertedAmount})
  };
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
*/
