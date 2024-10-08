# Release History

## 1.0.0-beta.4 (Unreleased)

### Features Added

### Breaking Changes

### Bugs Fixed

### Other Changes

## 1.0.0-beta.3 (2024-09-16)

This release provides better error messaging and error handling by improving logging.

### Bugs Fixed

- Optimized test result publishing by reusing the Sas uri till it's expiry.
- Fixed unexpected process termination by improving error handling of API used to publish test results.

## 1.0.0-beta.2 (2024-09-12)

This release updates the Microsoft Playwright Testing library documentation and improves error messages.

### Bugs Fixed

- Improved handling of Entra ID token expiry so that test runs don't fail intermittently.
- Optimized retries if reporting API fails with 5xx error

## 1.0.0-beta.1 (2024-09-09)

### Features Added

- Added authentication using Entra ID for the service.
- Added reporting capabilities for the service. You can now publish the reports and artifacts generated by Playwright OSS to the service.
