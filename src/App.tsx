import React, { useState } from "react";
import "./App.scss";
import { GoodsList } from "./GoodsList";

import { getAll, get5First, getRedGoods } from "./api/goods";
import { Good } from "./types/Good";
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoad = (callback: () => Promise<Good[]>) => {
    callback()
      .then(goods => setGoods(goods))
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button 
        type="button" 
        data-cy="all-button"
        onClick={() => {
          handleLoad(getAll);
        }}
      >
        Load all goods
      </button>

      <button 
        type="button" 
        data-cy="first-five-button"
        onClick={() => {
          handleLoad(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button 
        type="button" 
        data-cy="red-button"
        onClick={() => {
          handleLoad(getRedGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
