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

export interface UserCreatePaylod extends Omit<UserType, 'id'> {}
export interface UserUpdatePaylod extends Partial<Omit<UserType, 'id' | 'username' | 'email'>> {}