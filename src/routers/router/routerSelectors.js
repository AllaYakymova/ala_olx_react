import { createSelector } from '@reduxjs/toolkit';

export const routerState = state => state.router;

export const getLocation = createSelector(
  routerState,
  router => router.location
);

export const getSearch = createSelector(
  routerState,
  router => router.location.search
);

export const getQuery = createSelector(
  routerState,
  router => router.location.query
);
