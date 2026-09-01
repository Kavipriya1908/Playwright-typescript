import { test, expect } from '@playwright/test';

test('API POST test', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Raghav',
      job: 'Teacher'
    }
  });

  expect(response.status()).toBe(201);
  const responseBody = await response.text();
  expect(responseBody).toContain('Raghav');
  console.log(await response.json());
});
