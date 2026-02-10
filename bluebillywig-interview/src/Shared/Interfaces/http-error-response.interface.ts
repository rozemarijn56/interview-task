export interface HttpErrorResponse {
  status: number;
  body: {
    error: string;
    message: string;
  };
}