const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock("fs");

describe("All the styles should be applied", () => {
  const ols = document.querySelectorAll("ol");
  const uls = document.querySelectorAll("ul");

  test("There should be two <ol> tags", () => {
    expect(ols.length).toBe(2)
  });
  test("There should be two <ul> tags", () => {
    expect(uls.length).toBe(2)
  });
  test("The first Ol must have a list-style-type = lower-alpha ", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let firstOl = window.getComputedStyle(ols[0]);
    expect(firstOl["list-style-type"]).toBe("lower-alpha");
  });
  test("The second Ol must have a list-style-type = square ", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let secondOl = window.getComputedStyle(ols[1]);
    expect(secondOl["list-style-type"]).toBe("square");
  });
  test("The first Ul must have a list-style-type = armenian ", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let firstUl = window.getComputedStyle(uls[0]);
    expect(firstUl["list-style-type"]).toBe("armenian");
  });
  test("The second Ul must have a list-style-type = none ", () => {
    document.querySelector(
      "head"
    ).innerHTML = `<style>${css.toString()}</style>`;
    let secondUl = window.getComputedStyle(uls[1]);
    expect(secondUl["list-style-type"]).toBe("none");
    expect(secondUl["margin"]).toBe("0px");
    expect(secondUl["padding"]).toBe("0px");
  });
})
