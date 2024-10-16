import { systemKey, test } from './baseFixtures.js';
import { baseUrl } from './defaults.js';
import { doQuickLogin } from './login.js';

test('Quick Command', async ({ page }) => {
  await doQuickLogin(page);

  // Open Spotlight with Keyboard Shortcut
  await page.locator('body').press(`${systemKey}+k`);
  await page.waitForTimeout(200);
  await page
    .getByRole('button', { name: 'Go to the InvenTree dashboard' })
    .click();
  await page.locator('p').filter({ hasText: 'Dashboard' }).waitFor();
  await page.waitForURL('**/platform/dashboard');

  // Open Spotlight with Button
  await page.getByLabel('open-spotlight').click();
  await page.getByRole('button', { name: 'Home Go to the home page' }).click();
  await page
    .getByRole('heading', { name: 'Welcome to your Dashboard,' })
    .click();
  await page.waitForURL('**/platform');

  // Open Spotlight with Keyboard Shortcut and Search
  await page.locator('body').press(`${systemKey}+k`);
  await page.waitForTimeout(200);
  await page.getByPlaceholder('Search...').fill('Dashboard');
  await page.getByPlaceholder('Search...').press('Tab');
  await page.getByPlaceholder('Search...').press('Enter');
  await page.waitForURL('**/platform/dashboard');
});

test('Quick Command - No Keys', async ({ page }) => {
  await doQuickLogin(page);

  // Open Spotlight with Button
  await page.getByLabel('open-spotlight').click();
  await page.getByRole('button', { name: 'Home Go to the home page' }).click();
  await page
    .getByRole('heading', { name: 'Welcome to your Dashboard,' })
    .click();
  await page.waitForURL('**/platform');

  // Use navigation menu
  await page.getByLabel('open-spotlight').click();
  await page
    .getByRole('button', { name: 'Open Navigation Open the main' })
    .click();
  // assert the nav headers are visible
  await page.getByRole('heading', { name: 'Navigation' }).waitFor();
  await page.getByRole('heading', { name: 'Pages' }).waitFor();
  await page.getByRole('heading', { name: 'Documentation' }).waitFor();
  await page.getByRole('heading', { name: 'About' }).waitFor();

  await page.keyboard.press('Escape');

  // use server info
  await page.getByLabel('open-spotlight').click();
  await page
    .getByRole('button', {
      name: 'Server Information About this Inventree instance'
    })
    .click();
  await page.getByRole('cell', { name: 'Instance Name' }).waitFor();
  await page.getByRole('button', { name: 'Dismiss' }).click();

  await page.waitForURL('**/platform');

  // use license info
  await page.getByLabel('open-spotlight').click();
  await page
    .getByRole('button', {
      name: 'License Information Licenses for dependencies of the service'
    })
    .click();
  await page.getByText('License Information').first().waitFor();
  await page.getByRole('tab', { name: 'backend Packages' }).waitFor();

  await page.getByLabel('License Information').getByRole('button').click();

  // use about
  await page.getByLabel('open-spotlight').click();
  await page
    .getByRole('button', { name: 'About InvenTree About the InvenTree org' })
    .click();
  await page.getByText('This information is only').waitFor();

  await page.getByLabel('About InvenTree').getByRole('button').click();

  // use documentation
  await page.getByLabel('open-spotlight').click();
  await page
    .getByRole('button', {
      name: 'Documentation Visit the documentation to learn more about InvenTree'
    })
    .click();
  await page.waitForURL('https://docs.inventree.org/**');

  // TODO: Test addition of new actions
});
