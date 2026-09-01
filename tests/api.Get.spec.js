import { test ,expect} from '@playwright/test';

test('API Get test', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    expect(responseBody).toContain('Janet');
    console.log(await response.json()); 
})
