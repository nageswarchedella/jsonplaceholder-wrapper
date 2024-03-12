export interface PostType {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface CommentType {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface AlbumType {
  userId: number,
  id: number,
  title: string
}

export interface PhotoType {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export interface TodoType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface UserType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: AddressType
  phone: string,
  website: string,
  company: CompanyType
}

export interface CompanyType {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface AddressType {
  street:string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoType
}

export interface GeoType {
  lat: string,
  lng: string
}

export interface ResponseType<T> {
  status: number,
  data?: T[] | T | null,
  error?: string | Error | unknown
}
