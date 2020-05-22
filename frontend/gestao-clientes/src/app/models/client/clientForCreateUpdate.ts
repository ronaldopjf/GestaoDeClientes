import { Address } from '../address/address';

export class ClientForCreateUpdate {
    id: number;
    name: string;
    socialSecurityNumber: number;
    dateOfBirth: Date;
    sex: string = 'Feminino';
    address: Address = new Address();
    idOccupation: number;
}