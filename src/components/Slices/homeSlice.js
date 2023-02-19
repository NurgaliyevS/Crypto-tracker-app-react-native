import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    records: {},
    loading: false,
    record: {},
    isOpenModal: false,
    isMarketOpenModal: false,
    isCryptoAsset: true,
    newRecord: {}
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
    createRecord(state, action) {
      state.newRecord = action.payload
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
    setIsMarketOpenModal(state, action){
      state.isMarketOpenModal = action.payload
    },
    setIsCryptoAsset(state, action){
      state.isCryptoAsset = action.payload;
    }
  },
});

export const {
  setRecords,
  setLoading,
  setRecord,
  setIsOpenModal,
  updatePriceRecord,
  deleteRecord,
  setIsCryptoAsset,
  setIsMarketOpenModal,
  createRecord
} = homeSlice.actions;
export default homeSlice.reducer;
