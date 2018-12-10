import React, { Component } from 'react';
import RootRouter from "./Page/RootRouter";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RootRouter />
				</PersistGate>
			</Provider>
    );
  }
}

export default App;
