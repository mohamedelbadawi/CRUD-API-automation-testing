import { APIRequestContext } from "@playwright/test";

import { defineConfig } from "@playwright/test";
const BASE_RESOURCE = "users";

export class UserAPI {
    constructor(private request: APIRequestContext) { }
    async getUsers() {
        return this.request.get(BASE_RESOURCE, {
           
        });
    }
    async createUser(data: { email: string; password: string }) {
        return this.request.post('register', {
            data: data,
           
        })
    }
    async getUser(id: string) {
        return this.request.get(`${BASE_RESOURCE}/${id}`, {
           
        });
    }
}