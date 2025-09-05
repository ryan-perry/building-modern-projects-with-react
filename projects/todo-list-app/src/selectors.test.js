import { getCompletedTodos } from './selectors.js';

function testSelectors() {
  const fakeState = {
    todos: {
      value: [
        {
          text: '1',
          isCompleted: false,
        },
        {
          text: '2',
          isCompleted: true,
        },
      ],
    },
  };

  const result = getCompletedTodos(fakeState);

  if (result.length === 1 && result[0].text === '2') {
    console.log('Nailed it - getCompletedTodos works!');
  } else {
    throw new Error('no dice bro - getCompletedTodos failed');
  }
}

testSelectors();
