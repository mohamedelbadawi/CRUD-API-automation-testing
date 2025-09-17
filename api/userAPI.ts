import { APIRequestContext } from "@playwright/test";

import { defineConfig } from "@playwright/test";
const BASE_RESOURCE = "users";

export class UserAPI {
    constructor(private request: APIRequestContext) { }
    async getUsers() {
        return this.request.get(BASE_RESOURCE, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
    }
    async createUser(data: { email: string; password: string }) {
        return this.request.post('register', {
            data: data,
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
    }
    async getUser(id: string) {
        return this.request.get(`${BASE_RESOURCE}/${id}`, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
    }
}