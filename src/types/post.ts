export interface PostType {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostCreatePaylod extends Omit<PostType, 'id'> {}
export interface PostUpdatePaylod extends Partial<Pick<PostType, 'title' | 'body'>> {}