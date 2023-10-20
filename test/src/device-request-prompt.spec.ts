/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import expect from 'expect';
import {TimeoutError} from 'puppeteer';

import {launch} from './mocha-utils.js';

describe('device request prompt', function () {
  this.timeout(1_000);
  let state: Awaited<ReturnType<typeof launch>>;

  before(async function () {
    this.timeout(10_000);
    state = await launch(
      {
        args: ['--enable-features=WebBluetoothNewPermissionsBackend'],
        ignoreHTTPSErrors: true,
      },
      {
        after: 'all',
      }
    );
  });

  after(async () => {
    await state.close();
  });

  beforeEach(async () => {
    state.context = await state.browser.createIncognitoBrowserContext();
    state.page = await state.context.newPage();
  });

  afterEach(async () => {
    await state.context.close();
  });

  describe('waitForDevicePrompt', async function () {
    // Bug: #11072
    it('does not crash', async function () {
      const {page, httpsServer} = state;

      await page.goto(httpsServer.EMPTY_PAGE);

      await expect(
        page.waitForDevicePrompt({
          timeout: 10,
        })
      ).rejects.toThrow(TimeoutError);
    });

    it('can be opened', async function () {
      const {page, httpsServer} = state;

      await page.goto(httpsServer.PREFIX + '/device-request.html');

      await expect(
        Promise.all([page.waitForDevicePrompt(), page.click('#bluetooth')])
      ).resolves.toBeTruthy();
    });

    it('can be cancelled', async function () {
      const {page, httpsServer} = state;

      await page.goto(httpsServer.PREFIX + '/device-request.html');

      const [devicePrompt] = await Promise.all([
        page.waitForDevicePrompt(),
        page.click('#bluetooth'),
      ]);
      expect(devicePrompt).toBeTruthy();
      await expect(devicePrompt.cancel()).resolves.not.toThrow();
    });
  });

  describe('waitForDevice', function () {
    it('does not crash', async function () {
      const {page, httpsServer} = state;

      await page.goto(httpsServer.PREFIX + '/device-request.html');

      const [devicePrompt] = await Promise.all([
        page.waitForDevicePrompt(),
        page.click('#bluetooth'),
      ]);
      await expect(
        devicePrompt.waitForDevice(
          () => {
            return false;
          },
          {timeout: 10}
        )
      ).rejects.toThrow(TimeoutError);
    });
  });
});
