import { Address } from '../address/address';
import { Occupation } from '../occupation/occupation';

export class ClientForList {
    id: number;
    name: string;
    socialSecurityNumber: string;
    dateOfBirth: Date;
    sex: string;
    email: string;
    password: string;
    address: Address;
    occupation: Occupation;
    active: boolean;
}