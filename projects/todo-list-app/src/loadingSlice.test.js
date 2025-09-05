import { loadingSliceDefinition } from './loadingSlice.js';

function testLoadingSlice() {
  const fakeState = { value: { completed: true } };

  loadingSliceDefinition.reducers.loadingStarted(fakeState);

  if (fakeState.value.completed) {
    throw new Error('failed bro');
  } else {
    console.log('Congrats! - loadingStarted reducer works');
  }
}

testLoadingSlice();
