export const $ = {
  one: (...selectors) => document.querySelector(...selectors),
  all: (...selectors) => document.querySelectorAll(...selectors),
}
