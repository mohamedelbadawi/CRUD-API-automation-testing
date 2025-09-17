import test, { expect } from "@playwright/test";
import { AuthAPI } from "../api/AuthAPI";
import { getAuthToken } from "../utils/AuthHelper";

test.describe("Auth API test", () => {
    test("check get auth success response with valid credentials",
        async ({ request }) => {
            const authAPI = new AuthAPI(request);
            const response = await authAPI.login("eve.holt@reqres.in", "cityslicka");
            const data = await response.json();
            expect(response.status()).toBe(200);
            expect(data).toHaveProperty("token");
            expect(data.token).not.toBeNull();
            const token = await getAuthToken(request);
            console.log("Retrieved Token:", token);
        });

    test("check validation with invvalid credentials", async ({ request }) => {
        const authAPI = new AuthAPI(request);
        const response = await authAPI.login("mohamed@test.com", "test123");
        const data = await response.json();
        expect(response.status()).toBe(400);
        expect(data).toHaveProperty("error");
        expect(data.error).toBe("user not found");
    });

});