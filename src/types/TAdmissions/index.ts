export type TAdmissions = Array<TAdmission>;

export type TAdmission = {
    id?: number;
    admissionDate: string;
    email: string;
    employeeName: string;
    status: string;
    cpf: string;
}
