import { atom } from 'recoil';

export const todos = atom({
  key: 'todos',
  default: [
    {
      text: 'Talk about Recoil',
      isCompleted: false,
    },
  ],
});
