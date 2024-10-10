import { createReducer, on } from "@ngrx/store";
import { incre, reset } from "../state/counter/counter.actions";


export const initialstate = 0;

export const CounterReducer = createReducer(
  initialstate,
  // زيادة العدد بمقدار الكمية المختارة
  on(incre, (state, { quantity }) => state + quantity),
  // إعادة التعيين إلى صفر
  on(reset, (state) => 0)
);
