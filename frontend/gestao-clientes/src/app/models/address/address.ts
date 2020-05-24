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

    // cep: string;
    // logradouro: string;
    // complemento: string;
    // bairro: string;
    // localidade: string;
    // uf: string;
    // unidade?: string;
    // ibge?: string;
    // gia?: string;
}