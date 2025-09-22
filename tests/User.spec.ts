import { test, expect } from "@playwright/test";
import { UserAPI } from "../api/userAPI";
import z from "zod";
import { creationSchema, userSchema } from "../schemas/UserSchema";

test.describe("Users API test", () => {
    test("check get users success response and user object structure", async ({ request }) => {
        let userAPi = new UserAPI(request);
        const response = await userAPi.getUsers();
        const result = await response.json();
        expect(response.status()).toBe(200);

        expect(result.page).toBe(1);
        expect(result.total / result.per_page).toBeLessThanOrEqual(2);
        if (response.status() == 200) {
            expect(result).toHaveProperty("data");
            expect(Array.isArray(result.data)).toBe(true);
            const res = z.array(userSchema).safeParse(result.data);
            expect(res.success).toBe(true);
        }
    });


    test("check get single user success response and user object structure", async ({ request }) => {
        let userAPi = new UserAPI(request);
        const response = await userAPi.getUser("2");
        const result = await response.json();
        expect(response.status()).toBe(200);

        if (response.status() == 200) {
            expect(result).toHaveProperty("data");
            expect(typeof result.data).toBe("object");
            const res = userSchema.safeParse(result.data);
            expect(res.success).toBe(true);
        }
    });

    test("check get single user not found response", async ({ request }) => {
        let userAPi = new UserAPI(request);
        const response = await userAPi.getUser("23");
        expect(response.status()).toBe(404);
    });

});