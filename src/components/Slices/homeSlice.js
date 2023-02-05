import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    records: {},
    loading: false,
    record: {},
    isOpenModal: false,
  },
  reducers: {
    setRecords(state, action) {
      state.records = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setRecord(state, action) {
      state.record = action.payload;
    },
    updatePriceRecord(state, action) {
      if ((state.record.id = action.payload.id)) {
        state.record.desiredPrice = action.payload.text;
        const record = Object.values(state.records).filter(
          (element) => element.id === action.payload.id
        );
        record[0].desiredPrice = action.payload.text;
      }
    },
    setIsOpenModal(state, action) {
      state.isOpenModal = action.payload;
    },
  },
});

export const {
  setRecords,
  setLoading,
  setRecord,
  setIsOpenModal,
  updatePriceRecord,
  deleteRecord,
} = homeSlice.actions;
export default homeSlice.reducer;
