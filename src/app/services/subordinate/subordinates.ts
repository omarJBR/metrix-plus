export interface SubordinatesApiResponse {
    code: number;
    message: string;
    data: SubordinatesData[];
}

export interface SubordinatesData {
    ID: number;
    name: string;
    responsibleName: string;
    responsibleImage: string;
    subordinates: number;
}
