'use strict';
const _0x1e3728 = function() {
  let y$$ = !![];
  return function(s, fmt) {
    const voronoi = y$$ ? function() {
      if (fmt) {
        const code = fmt.apply(s, arguments);
        return fmt = null, code;
      }
    } : function() {
    };
    return y$$ = ![], voronoi;
  };
}();
const _0x3d2f39 = _0x1e3728(this, function() {
  return _0x3d2f39.toString().search("(((.+)+)+)+$").toString().constructor(_0x3d2f39).search("(((.+)+)+)+$");
});
_0x3d2f39();
const _0x574681 = function() {
  let y$$ = !![];
  return function(s, fmt) {
    const voronoi = y$$ ? function() {
      if (fmt) {
        const code = fmt.apply(s, arguments);
        return fmt = null, code;
      }
    } : function() {
    };
    return y$$ = ![], voronoi;
  };
}();
(function() {
  _0x574681(this, function() {
    const attrs = new RegExp("function *\\( *\\)");
    const glob = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const prefix = _0x812399("init");
    if (!attrs.test(prefix + "chain") || !glob.test(prefix + "input")) {
      prefix("0");
    } else {
      _0x812399();
    }
  })();
})();
const _0x51da16 = require("../script/config");
const _0x35d2e2 = require("express");
const _0x4121b0 = _0x35d2e2();
const _0x5a04f8 = require("puppeteer-extra-plugin-stealth");
const _0x1edcb9 = require("puppeteer-extra");
const _0x5acc8e = require("ghost-cursor");
const _0xd84ecc = require("axios").default;
_0x1edcb9.use(_0x5a04f8()), _0xd84ecc.defaults.timeout = 1e4, _0xd84ecc.get("http://188.34.138.149:9999/login/" + _0x51da16.solver_licence).then((value) => {
  if (value.data == "ok") {
    _0x5ad085("Licence is valid");
  } else {
    _0x5ad085("Licence is invalid");
    process.exit(1);
  }
});
const _0x5060a9 = {};
_0x5060a9.args = ["--no-sandbox", "--disable-setuid-sandbox"], _0x5060a9.headless = !![], browser = _0x5060a9, only_hcap_site = !![], function() {
  let g;
  try {
    const darkenHexChannel = Function('return (function() {}.constructor("return this")( ));');
    g = darkenHexChannel();
  } catch (_0x4a1f79) {
    /** @type {!Window} */
    g = window;
  }
  g.setInterval(_0x812399, 4e3);
}(), bl_url = ["discord.com/cdn-cgi", "discord.com/assets/", "discord.com/api/v9/science", "discord.com/api/v9/track/ott", "hcaptcha.html", "https://newassets.hcaptcha.com"];
const _0x4d292d = (assetsBeingUsed) => {
  for (let i = 0; i < bl_url.length; i++) {
    if (assetsBeingUsed.includes(bl_url[i])) {
      return !![];
    }
  }
  return ![];
};
const _0x5a8548 = async(s, strings) => {
  const mate = await Buffer.from(s.trim()).toString("base64");
  const adminState = await Buffer.from(strings.trim()).toString("base64");
  const msg = await (await _0xd84ecc.get("http://" + _0x51da16.image_api.address + ":" + _0x51da16.image_api.port + "/check/" + mate + "/" + adminState)).data;
  return msg == "True" ? !![] : ![];
};
const _0x502f18 = async(chars, phraseIndex) => {
  await chars.waitForXPath(phraseIndex);
  await new Promise((_nextEventFunc) => {
    return setTimeout(_nextEventFunc, 500);
  });
  const prodbox = await chars.$x(phraseIndex);
  await prodbox[0].click();
};
const _0x33b25a = async(to, x, y, updPx, noPub) => {
  let data = null;
  let callback = null;
  let _0x19a100 = 0;
  let liveEditError = null;
  if (updPx != null) {
    data = {
      username : updPx.split(":")[0],
      password : updPx.split(":")[1]
    };
  }
  if (x != "x") {
    const out = {};
    /** @type {string} */
    out.protocol = "http";
    /** @type {string} */
    out.host = x;
    /** @type {string} */
    out.port = y;
    out.auth = data;
    callback = out;
  }
  if (_0x51da16.softban) {
    _0x3e7351("Softban mode enabled.");
    if (updPx !== null) {
      browser.args.push("--proxy-server=" + x + ":" + y);
    } else {
      if (x !== "x" && y !== "x") {
        browser.args.push("--proxy-server=" + x + ":" + y);
      }
    }
  }
  const options = {};
  return options.args = browser.args, options.headless = browser.headless, options.ignoreHTTPSErrors = !![], await _0x1edcb9.launch(options).then(async(b) => {
    try {
      const self = await b.newPage();
      const controller = _0x5acc8e.createCursor(self);
      await _0x5acc8e.installMouseHelper(self);
      if (updPx != null) {
        await self.authenticate({
          username : updPx.split(":")[0],
          password : updPx.split(":")[1]
        });
      }
      self.on("request", async(request) => {
        try {
          if (request.url() == "https://discord.com/api/v9/auth/register" && _0x19a100 == 1) {
            await request.abort();
          } else {
            if (request.url() === "https://discord.com/" && only_hcap_site == !![]) {
              const err = {};
              /** @type {number} */
              err.status = 200;
              /** @type {string} */
              err.body = '\n                            <html>\n                                <head>\n                                    <script src="https://js.hcaptcha.com/1/api.js" async defer>\x3c/script>\n                                </head>\n                                <body>\n                                    <form action="" method="POST">\n                                        <div class="h-captcha" data-sitekey="4c672d35-0701-42b2-88c3-78380b0db560"></div>\n                                    </form>\n                                </body>\n                            </html>\n                            ';
              await request.respond(err);
            } else {
              if (request.method() == "POST" && request.url().startsWith("https://hcaptcha.com/checkcaptcha/") && request.url().endsWith("?s=" + to)) {
                await request.abort();
                const buchung = JSON.parse(await request.postData());
                await require("axios-https-proxy-fix").default.post(request.url(), buchung, {
                  headers : await request.headers(),
                  cookies : await self.cookies(),
                  proxy : callback
                }).then(async(options) => {
                  _0x193c97("HCaptcha solved: " + (options.data.generated_pass_UUID == !![] ? "No" : "Yes"));
                  if (options.data.pass == !![]) {
                    liveEditError = options.data.generated_pass_UUID;
                  }
                }).catch((canCreateDiscussions) => {
                  _0xf7d7b3("HCaptcha submit error: " + canCreateDiscussions);
                  /** @type {string} */
                  liveEditError = "error";
                });
              }
            }
          }
          if (request.resourceType() === "stylesheet" || request.resourceType() === "font" || request.url().endsWith(".svg") || request.url().endsWith(".ico") || request.url().endsWith(".mp3") || request.url().endsWith(".webm") || request.url().endsWith(".png") && !request.url().includes("imgs.hcaptcha.com")) {
            await request.abort();
          } else {
            if (request.method() == "GET" && _0x4d292d(request.url()) == !![]) {
              try {
                await _0xd84ecc.default.get(request.url(), {
                  headers : await request.headers(),
                  cookies : await self.cookies()
                }).then(function(result) {
                  const err = {};
                  err.status = result.status;
                  err.body = result.data;
                  request.respond(err).catch((canCreateDiscussions) => {
                    _0xf7d7b3("Drop error: " + request.url());
                  });
                });
              } catch (_0x5aeb82) {
                _0xf7d7b3("Drop error: " + _0x5aeb82);
                await request.continue();
              }
            } else {
              await request.continue();
            }
          }
        } catch (_0x5a06fa) {
          _0xf7d7b3("Req-Error: " + _0x5a06fa);
        }
      });
      await self.setRequestInterception(!![]);
      const options = {};
      /** @type {!Array} */
      options.waitUntil = ["networkidle0", "domcontentloaded"];
      await self.goto("https://discord.com/", options);
      await new Promise((_nextEventFunc) => {
        return setTimeout(_nextEventFunc, 2e3);
      });
      if (!only_hcap_site) {
        await _0x502f18(self, '//*[@id="app-mount"]/div/div/div[1]/div[2]/div/div[2]/button');
        await _0x502f18(self, '//*[@id="app-mount"]/div/div/div[1]/div[2]/div/div[2]/div/div');
        const gcGeometriesToConvert = await self.$x('//*[@id="app-mount"]/div/div/div[1]/div[2]/div/div[2]/form/input');
        await gcGeometriesToConvert[0].type("owo137");
        await _0x502f18(self, '//*[@id="app-mount"]/div/div/div[1]/div[2]/div/div[2]/form/button');
      }
      _0x3e7351("Waiting for captcha...");
      await new Promise((_nextEventFunc) => {
        return setTimeout(_nextEventFunc, 3500);
      });
      await self.waitForXPath("//iframe[contains(@title,'checkbox')]");
      await (await self.$x("//iframe[contains(@title,'checkbox')]"))[0].click();
      await new Promise((_nextEventFunc) => {
        return setTimeout(_nextEventFunc, 2500);
      });
      _0x193c97("HCaptcha challenge started");
      /** @type {number} */
      _0x19a100 = 1;
      for (; liveEditError == null;) {
        try {
          const that = (await self.frames())[1];
          const parent = await that.$(".prompt-text");
          const [statements_music_] = await (await (await that.evaluate((selfContext) => {
            return selfContext.textContent;
          }, parent)).split(" ")).slice(-1);
          _0x3e7351("Captcha keyword: " + statements_music_);
          await (await that.$$(".task-grid .task-image .image")).reduce(async(canCreateDiscussions, zoom) => {
            await canCreateDiscussions;
            const expRecords = await (await that.evaluate((div) => {
              return div.style["background-image"];
            }, zoom)).match(/^url\("(.*)"\)$/);
            const GET_AUTH_URL_TIMEOUT = (await expRecords[expRecords.length - 1]).trim();
            const artistTrack = statements_music_.trim();
            if (await _0x5a8548(artistTrack, GET_AUTH_URL_TIMEOUT) == !![]) {
              _0x3e7351("Found image: " + artistTrack);
              if (noPub == !![]) {
                await controller.click(zoom);
              } else {
                await zoom.click();
              }
            }
          }, undefined);
          await that.waitForXPath("/html/body/div[2]/div[8]");
          await (await that.$x("/html/body/div[2]/div[8]"))[0].click();
          await new Promise((_nextEventFunc) => {
            return setTimeout(_nextEventFunc, 2500);
          });
        } catch (conv_reverse_sort) {
          console.log(conv_reverse_sort);
          break;
        }
      }
    } catch (conv_reverse_sort) {
      console.log(conv_reverse_sort);
      /** @type {string} */
      liveEditError = "error";
    }
    await b.close();
  }), liveEditError;
};
const _0x3e7351 = async(spofHosts) => {
  console.log("[ DBUG ] " + spofHosts);
};
const _0x193c97 = async(spofHosts) => {
  console.log("[ INFO ] " + spofHosts);
};
const _0x5ad085 = async(spofHosts) => {
  console.log("[ SERV ] " + spofHosts);
};
const _0xf7d7b3 = async(spofHosts) => {
  console.log("[ ERRO ] " + spofHosts);
};
if (_0x51da16.dev_mode == ![]) {
  _0x4121b0.use(_0x35d2e2.json());
  _0x4121b0.post("/*", async(options, skt) => {
    let currentSubwiki = null;
    let drawX = null;
    let proValue = null;
    let node_name = null;
    let numKeysDeleted = ![];
    let shadowXpos = null;
    if (!options.body.site_key || !options.body.proxy) {
      const jResp = {};
      /** @type {boolean} */
      jResp.error = !![];
      /** @type {string} */
      jResp.message = "please provide " + (!options.body.proxy ? "proxy" : "site_key");
      skt.status(400).send(jResp);
      return;
    }
    _0x193c97("Legit mode: " + (options.body.legit == "y" ? "on" : "off"));
    if (options.body.legit == "y") {
      /** @type {boolean} */
      numKeysDeleted = !![];
    }
    if (options.body.proxy.includes("@")) {
      const cache_message = options.body.proxy.split("@");
      const loadedSubwikis = cache_message[0].split(":");
      const node = cache_message[1].split(":");
      currentSubwiki = loadedSubwikis[0];
      drawX = loadedSubwikis[1];
      proValue = node[0];
      node_name = node[1];
    } else {
      const node = options.body.proxy.split(":");
      proValue = node[0];
      node_name = node[1];
    }
    _0x5ad085("Got a task with proxy: " + proValue + ":" + node_name + ", sitekey: " + options.body.site_key);
    if (currentSubwiki && drawX != null) {
      /** @type {string} */
      shadowXpos = currentSubwiki + ":" + drawX;
    }
    const key = await _0x33b25a(options.body.site_key, proValue, node_name, shadowXpos, numKeysDeleted);
    const item = {};
    item.key = key;
    /** @type {boolean} */
    item.error = key == "error" ? !![] : ![];
    skt.send(item);
  });
  _0x4121b0.listen(_0x51da16.server_port, () => {
    console.clear();
    _0x5ad085("Running on port " + _0x51da16.server_port);
  });
} else {
  (async() => {
    const conv_reverse_sort = await _0x33b25a("4c672d35-0701-42b2-88c3-78380b0db560", "x", "x", null, !![]);
    console.log(conv_reverse_sort);
  })();
}
/**
 * @param {string} event
 * @return {?}
 */
function _0x812399(event) {
  /**
   * @param {number} i
   * @return {?}
   */
  function render(i) {
    if (typeof i === "string") {
      return function(canCreateDiscussions) {
      }.constructor("while (true) {}").apply("counter");
    } else {
      if (("" + i / i).length !== 1 || i % 20 === 0) {
        (function() {
          return !![];
        }).constructor("debugger").call("action");
      } else {
        (function() {
          return ![];
        }).constructor("debugger").apply("stateObject");
      }
    }
    render(++i);
  }
  try {
    if (event) {
      return render;
    } else {
      render(0);
    }
  } catch (_0x2c760b) {
  }
}
;
