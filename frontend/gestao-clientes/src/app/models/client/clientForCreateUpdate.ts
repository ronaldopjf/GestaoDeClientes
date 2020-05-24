import { Address } from '../address/address';

export class ClientForCreateUpdate {
    id: number;
    name: string;
    socialSecurityNumber: number;
    dateOfBirth: Date;
    sex: string = 'Feminino';
    idAddress: number;
    address: Address = new Address();
    idOccupation: number;
    active: boolean;
}