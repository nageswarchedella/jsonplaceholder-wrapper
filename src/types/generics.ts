export interface ResponseType<T> {
  status: number,
  data?: T[] | T | null,
  error?: string | Error | unknown
}
