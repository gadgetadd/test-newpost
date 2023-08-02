import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";


const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

export const getStatus = createAsyncThunk(
  'tracking/getStatus',
  async (DocumentNumber, thunkAPI) => {
    console.log(REACT_APP_BASE_URL);
    const fetchParams = {
      apiKey: REACT_APP_API_KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber,
          },
        ],
      },
    };

    try {
      const { data } = await axios.post(REACT_APP_BASE_URL, fetchParams);
      if (!data.success) {
        return thunkAPI.rejectWithValue(data.errors[0]);
      }

      return data.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
