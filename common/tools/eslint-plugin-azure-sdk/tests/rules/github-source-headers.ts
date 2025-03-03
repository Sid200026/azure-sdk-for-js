// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createRuleTester } from "../ruleTester";
import rule from "../../src/rules/github-source-headers.js";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = createRuleTester();

const goodHeader = `// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

`;

const valid = `// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

console.log("hello")`;

const invalid1 = `// Module
console.log("hello")`;

const invalid2 = `/*
 * Module description
 * 
 */

console.log("hello")`;

const configError = `the file does not have a correct copyright header`;

ruleTester.run("github-source-headers", rule, {
  valid: [
    {
      // only the fields we care about
      code: valid,
      filename: "file.ts",
    },
    {
      // only the fields we care about
      code: valid,
      filename: "file-browser.mts",
    },
    {
      // incorrect format but in a file we don't care about
      code: 'console.log("hello")',
      filename: "test.js",
    },
  ],
  invalid: [
    {
      // no comments
      code: 'console.log("hello")',
      filename: "file.ts",
      errors: [
        {
          message: configError,
        },
      ],
      output: valid,
    },
    {
      // no comments .mts
      code: 'console.log("hello")',
      filename: "file-browser.mts",
      errors: [
        {
          message: configError,
        },
      ],
      output: valid,
    },
    // wrong headers
    {
      code: invalid1,
      filename: "file.ts",
      errors: [
        {
          message: configError,
        },
      ],
      output: goodHeader + invalid1,
    },
    {
      code: invalid2,
      filename: "file.ts",
      errors: [
        {
          message: configError,
        },
      ],
      output: goodHeader + invalid2,
    },
  ],
});
