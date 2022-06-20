import { reducer, RootState } from './reducers/rootReducer';
import { Context, createWrapper } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
