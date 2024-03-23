export type User = {
    document: string;
    documentNumber: string;
    cellphone: string;
    planUser: string;
    planType: string;
}
export type InfoUser= User &{
    name:string;
    lastName:string;
    birthdate:string;
}