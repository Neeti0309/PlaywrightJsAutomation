const { test, expect } =require ('@playwright/test');
import { request } from "http";

// Get
test("Get User", async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

// Create
test("Create User", async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data: { "name": "neeti", "job": "engineer" },
            headers: { "Accept": "application/json" }
        });
    console.log(await response.json())
    expect(response.status()).toBe(204)

    var res = await response.json()
    userid = res.id
})

// Put
test("Update User", async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/' + userid,
        {
            data: { "name": "neeti", "job": "doctor" },
            headers: { "Accept": "application/json" }
        });
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

//Delete
test("Delete User", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userid)
    expect(response.status()).toBe(204)
})