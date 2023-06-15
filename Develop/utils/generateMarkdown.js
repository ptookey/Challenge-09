// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
"BSD License","MIT License","GNU GPL License","Apache License 2.0","ISC License","No License"
function renderLicenseBadge(license) {
  if (license==='BSD License'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license==="MIT License"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license==='GNU GPL License'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license==='Apache License 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license==='ISC License'){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license==='No License'){
    return ''
  }
}

module.exports = renderLicenseBadge;
