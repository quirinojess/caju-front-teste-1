export type TAdmissions = Array<TAdmission>;

export type TAdmission = {
    id?: string;
    admissionDate: string;
    email: string;
    employeeName: string;
    status:  'REVIEW' | 'APROVED' | 'REPROVED';
    cpf: string;
}
