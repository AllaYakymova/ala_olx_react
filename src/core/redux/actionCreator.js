import { createAction } from '@reduxjs/toolkit';

export const actionCreator = (type) => ({
  request: createAction(type.REQUEST),
  start: createAction(type.START),
  success: createAction(type.SUCCESS),
  error: createAction(type.ERROR),
});
