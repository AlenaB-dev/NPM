/**
 * MOMENT NPM
 * */

// const moment = require("moment");

// const a = 10;
// const day = moment().format("dddd");
// console.log(day);

/**
 * SEMVER NPM
 *
 */

const semver = require("semver");

// console.log(semver.valid("1.5.2")); // 1.5.2 // if version is valid
// console.log(semver.valid("15.2")); // null // if version is invalid
// console.log(semver.valid("1.5.2-beta.10")); // 1.5.2-beta.10

// console.log(semver.gt("1.2.3", "2.2.1")); // false // check if first version is greater than second

// console.log(semver.coerce("v3")); /**SemVer {
//   options: {},
//   loose: false,
//   includePrerelease: false,
//   raw: '3.0.0',
//   major: 3,
//   minor: 0,
//   patch: 0,
//   prerelease: [],
//   build: [],
//   version: '3.0.0'
// } */

// console.log(semver.coerce("v3").raw); // 3.0.0

// // creating range

const range = semver.Range("^2.22.2");
console.log(range);
