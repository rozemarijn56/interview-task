
export class TimeoutError extends Error {
  constructor(message?: string) {
    super(message || 'Request timed out');
    this.name = 'TimeoutError';
  }
}