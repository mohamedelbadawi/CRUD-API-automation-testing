import { APIRequestContext } from "@playwright/test";
import { createUserData } from "../types/User";
import { defineConfig } from "@playwright/test";
const BASE_RESOURCE = "/users";

export class UserAPI {
    constructor(private request: APIRequestContext) { }
    async getUsers() {
        return this.request.get(BASE_RESOURCE);
    }
    async createUser(data: createUserData) {
        return this.request.post(BASE_RESOURCE, { data })
    }
    async getUser(id: string) {
        return this.request.get(`${BASE_RESOURCE}/${id}`);
    }
}