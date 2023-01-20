export interface LoginِApiResponse {
    code: number;
    message: string;
    data: LoginResponseData;
}

export interface LoginResponseData {
    userID: string;
    email: string;
    accessToken: string;
}
