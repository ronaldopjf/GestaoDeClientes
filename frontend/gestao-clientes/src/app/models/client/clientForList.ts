import { Address } from '../address/address';
import { Occupation } from '../occupation/occupation';

export class ClientForList {
    id: number;
    name: string;
    socialSecurityNumber: number;
    dateOfBirth: Date;
    sex: string;
    address: Address;
    occupation: Occupation;
    active: boolean;
}