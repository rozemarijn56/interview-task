export class UnknownApiError extends Error {
  constructor(message = 'Unknown API error') {
    super(message);
    this.name = 'UnknownApiError';
  }
}