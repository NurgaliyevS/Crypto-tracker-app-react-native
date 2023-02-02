import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        records: [],
        loading: false,
        record: {},
        isOpenModal: false
    },
    reducers: {
        setRecords(state, action) {
            state.records = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setRecord(state, action) {
            state.record = action.payload
        },
        setIsOpenModal(state, action){
            state.showModal = action.payload
        }
    }
})

export const { setRecords, setLoading, setRecord, setIsOpenModal } = homeSlice.actions;
export default homeSlice.reducer;