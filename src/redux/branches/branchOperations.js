import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";


const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const getWarehouses = createAsyncThunk(
  'branches/getWarehouses',
  async (CityName, thunkAPI) => {
    const fetchParams = {
      apiKey: REACT_APP_API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName,
        Page: 1,
        Limit: 100,
      },
    };

    try {
      const { data } = await axios.post(REACT_APP_BASE_URL, fetchParams);
      if (!data.success) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }

      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);

    }
  }
);

export const getSettlements = createAsyncThunk(
  'branches/getSettlements',
  async (FindByString, thunkAPI) => {
    const fetchParams = {
      apiKey: REACT_APP_API_KEY,
      modelName: 'Address',
      calledMethod: 'getSettlements',
      methodProperties: {
        FindByString,
        Page: 1,
        Limit: 100,
      },
    };

    try {
      const { data } = await axios.post(REACT_APP_BASE_URL, fetchParams);
      if (!data.success) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }

      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);

    }
  }
);