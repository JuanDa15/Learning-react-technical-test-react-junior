// @ts-check
import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
const LOCALHOST_URL = 'http://localhost:5173/';

test('app show random fact animal', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const fact = page.getByTestId('fact');
  const img = page.getByTestId('img');
  
  const textContent = await fact.textContent();
  const imgSrc = await img.getAttribute('src');
  
  expect(textContent?.length).toBeGreaterThan(0);
  expect(imgSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});

test('should update fact when click btn', async ({page}) => {
  await page.goto(LOCALHOST_URL);

  const btn = page.getByTestId('btn');
  const fact = page.getByTestId('fact');
  const img = page.getByTestId('img');
  const firstTextContent = await fact.textContent();
  const firstImgSrc = await img.getAttribute('src');
  

  await btn.dispatchEvent('click', new Event('click'));
  await page.waitForTimeout(1000);
  const fact2 = page.getByTestId('fact');
  const img2 = page.getByTestId('img');
  const secondTextContent = await fact2.textContent();
  const secondImgSrc = await img2.getAttribute('src');

  expect(firstTextContent).not.toBe(secondTextContent);
  expect(firstImgSrc).not.toBe(secondImgSrc);
});