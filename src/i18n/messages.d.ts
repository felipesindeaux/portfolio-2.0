import type ptMessages from './messages/pt.json';

type Messages = typeof ptMessages;

declare global {
  interface IntlMessages extends Messages {}
}

export {};
