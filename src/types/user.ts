export type User = {
    document: string;
    documentNumber: string;
    cellphone: string;
}

export type PlanSelected = {
    planUser: string;
    planType: string;
    price: number;
}
export type InfoUser= {
    name:string;
    lastName:string;
    birthDay:string;
}

export type SummaryDataUser = User & PlanSelected & InfoUser;
