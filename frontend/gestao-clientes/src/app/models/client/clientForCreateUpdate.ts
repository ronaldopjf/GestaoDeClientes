import { Address } from '../address/address';

export class ClientForCreateUpdate {
    id: number;
    name: string;
    socialSecurityNumber: string;
    dateOfBirth: Date;
    sex: string = 'Feminino';
    email: string;
    password: string;
    idAddress: number;
    address: Address = new Address();
    idOccupation: number;
    active: boolean;
}