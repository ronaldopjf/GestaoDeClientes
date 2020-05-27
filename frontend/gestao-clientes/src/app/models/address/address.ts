export class Address {
    id?: number;
    postalCode: string;
    publicPlace: string;
    number: number;
    complement?: string;
    neighborhood: string;
    locality: string;
    state: string;
    active?: boolean;
}