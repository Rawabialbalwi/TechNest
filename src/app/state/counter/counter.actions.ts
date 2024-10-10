import { createAction, props } from "@ngrx/store";

export const incre = createAction("Incre", props<{ quantity: number }>());
export const reset = createAction("Reset");

