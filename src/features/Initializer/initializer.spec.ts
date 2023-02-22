import { configureStore, isAsyncThunkAction } from '@reduxjs/toolkit';
import randomReducer, { randomAsync } from './initializer.Slice';

describe('initializer reducer', () => {
  it('should hanldle initial state', () => {
    expect(randomReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle loading status', () => {
    const loading = randomReducer(undefined, randomAsync.pending);
    expect(loading.status).toEqual('loading');
  });

  it('should handle failed status', () => {
    const loading = randomReducer(undefined, randomAsync.rejected);
    expect(loading.status).toEqual('failed');
  });

  it('should handle idle status', () => {
    const loading = randomReducer(undefined, randomAsync.fulfilled);
    expect(loading.status).toEqual('idle');
  });
});
