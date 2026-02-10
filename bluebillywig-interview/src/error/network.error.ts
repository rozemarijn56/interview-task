export class NetworkError extends Error {
    constructor() {
        super('Failed to fetch due to network error');
    }
}