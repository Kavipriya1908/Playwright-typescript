import { test, expect } from '@playwright/test';

test('API PUT test', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Raghav',
      job: 'Teacher'
    }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.text();
  expect(responseBody).toContain('Raghav');
  console.log(await response.json());
});
