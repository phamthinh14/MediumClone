import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../auth/types/register.interface';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);
