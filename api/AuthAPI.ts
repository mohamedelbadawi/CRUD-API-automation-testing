import { APIRequestContext } from "@playwright/test";
const BASE_RESOURCE = "login";
export class AuthAPI {
    constructor(private request: APIRequestContext) { }
    async login(email: string, password: string) {
        return this.request.post(BASE_RESOURCE, {
            data: { email: email, password: password },
           
        });
    }

}