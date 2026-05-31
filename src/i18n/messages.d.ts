import type ptMessages from './messages/pt.json';

type Messages = typeof ptMessages;

declare global {
  type IntlMessages = Messages;
}

export {};
