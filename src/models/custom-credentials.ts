import {Credentials} from '@loopback/authentication-jwt';

export interface CustomCredentials extends Partial<Credentials> {
  username: string;
  password: string;
}
