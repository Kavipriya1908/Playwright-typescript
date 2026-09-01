import { test ,expect} from '@playwright/test';

test('API Delete test', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
     
})
