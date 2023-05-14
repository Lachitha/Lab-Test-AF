import { createSlice } from "@reduxjs/toolkit";
import equipmentList from "../Data/EquipmentData";


const equipmentSlice = createSlice({
    name: "equipment",
    initialState: equipmentList,
    reducers: {
        deleteEquip: (state, action) => {
            const{id}=action.payload;
            const uu =state.find(user=>user.id==id);
            if(uu)
            {
            return state.filter(user=>user.id!=id);
            }
         },
         updateEquip: (state, action) => {
            const{id,name,available}=action.payload;
            const uu =state.find(user=>user.id==id);
            if(uu){
                uu.name=name;
                 uu.available=available;
            }
          },
    }
})

export default equipmentSlice.reducer;
export const {deleteEquip,updateEquip} = equipmentSlice.actions;

