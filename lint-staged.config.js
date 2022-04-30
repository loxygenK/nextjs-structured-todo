const path = require("path");

module.exports = {
  "./src/**/*.{js,jsx,ts,tsx}": [
    (names) => {
      const relativeNames = names
        .map((n) => path.relative(process.cwd(), n))
        .join(" --file ")

      return `next lint --fix --file ${relativeNames}`
    },
    "prettier -cw"
  ]
}
