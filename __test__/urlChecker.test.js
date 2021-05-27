import { urlChecker } from "../src/client/js/urlChecker";

describe("testing a valid url", () => {
    test("testing urlChecker", () => {
        expect(urlChecker("https://www.theguardian.com/politics/2021/may/26/ministers-braced-for-dominic-cummings-testimony-on-covid-crisis")).toBe(true);
    });
    test("testing urlChecker", () => {
        expect(urlChecker("https://www.bbc.com/future/article/20210510-could-the-perseverance-rover-have-carried-life-to-mars")).toBe(true);
    });
    test("testing urlChecker", () => {
        expect(urlChecker("https://www.pcgamer.com/days-gone-did-well-on-pc-but-not-as-well-as-horizon-zero-dawn/")).toBe(true);
    });
    test("testing urlChecker", () => {
        expect(urlChecker("https://www.videogameschronicle.com/news/metro-exodus-is-the-first-pc-game-to-utilise-ps5s-dualsense-features/")).toBe(true);
    });
    test("testing urlChecker", () => {
        expect(urlChecker("invalid url")).toBe(false);
    });
});