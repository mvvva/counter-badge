import React, { createContext, useReducer, ReactNode } from 'react';

type State = {
  count: number;
};

type Action = 
  | { type: 'INCREMENT'; payload?: number }
  | { type: 'DECREMENT'; payload?: number }
  | { type: 'RESET' };

const initialState: State = {
  count: 0,
};

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + (action.payload ?? 1),
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - (action.payload ?? 1),
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

type CounterContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
