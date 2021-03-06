/*
 * Copyright 2020 American Express Travel Related Services Company, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { FetchyeReduxProvider } from "fetchye-redux-provider";
import { SimpleCache } from "fetchye";
import Profile from "./Profile";
import "./styles.css";

const fetchyeCache = SimpleCache({
  // Need to tell Fetchye where the cache reducer will be located
  cacheSelector: (state) => state
});
const store = createStore(fetchyeCache.reducer);
export default function App() {
  return (
    <Provider store={store}>
      <FetchyeReduxProvider cache={fetchyeCache}>
        <Profile />
      </FetchyeReduxProvider>
    </Provider>
  );
}
