export class User {
  name: string
  email: string
  password: any
  nickname?: string

  constructor( name: string, email: string, password: any, nickname: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.nickname = nickname
  }
}
