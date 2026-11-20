const { test, expect } = require('@playwright/test')

test('homepage renders and navigates to projects', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Hi, I am Leandro Sanchez' })).toBeVisible()

  await page.getByRole('link', { name: 'Projects' }).click()

  await expect(page).toHaveURL(/\/projects$/)
  await expect(page.getByRole('heading', { name: 'My personal projects' })).toBeVisible()
})
