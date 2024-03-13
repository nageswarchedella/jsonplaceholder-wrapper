export interface CommentType {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}


export interface CommentCreatePayload extends Omit<CommentType, 'id'> {}
export interface CommentUpdatePayload extends Partial<Pick<CommentType, 'name' | 'body'>> {}