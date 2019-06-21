[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

# Ocean Token Bridge UI

> Transfer OCEAN Tokens between Ethereum's Main network, and Ocean's Pacific network.

[![Build Status](https://travis-ci.com/oceanprotocol/token-bridge-ui.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/token-bridge-ui)

_Originally forked from [`poanetwork/bridge-ui:v2.1.1`](https://github.com/poanetwork/bridge-ui/releases/tag/2.1.1) ([`0342e0a`](https://github.com/oceanprotocol/token-bridge-ui/commit/0342e0ae89afd51860064f8c882c55c62777582c)), which is running against [`poanetwork/poa-bridge-contracts:v2.3.1`](https://github.com/poanetwork/poa-bridge-contracts/releases/tag/2.3.1)._

- [Development](#Development)
  - [Activate Theme](#Activate-Theme)
- [Testing](#Testing)
- [Production build](#Production-build)
- [Releases](#Releases)
- [Deployment](#Deployment)
- [Original Readme](#Original-Readme)
- [License](#License)

## Development

To start development you need to:

```bash
npm i
npm start
```

### Activate Theme

Use environment variable `APP_STYLES` to activate the oceanprotocol theme:

```bash
APP_STYLES=oceanprotocol
```

## Testing

To run unit tests:

```bash
npm test
```

You can run the same tests, but with coverage reports generated:

```bash
npm run coverage
```

## Production build

To create a production build:

```bash
npm run build
```

## Releases

From a clean `master` branch you can run any release task doing the following:

- bumps the project version in `package.json`, `package-lock.json`
- auto-generates and updates the CHANGELOG.md file from commit messages
- creates a Git tag
- commits and pushes everything
- creates a GitHub release with commit messages as description

You can execute the script using arguments to bump the version accordingly:

- To bump a patch version: `npm run release`
- To bump a minor version: `npm run release minor`
- To bump a major version: `npm run release major`

For the GitHub releases steps a GitHub personal access token, exported as `GITHUB_TOKEN` is required. [Setup](https://github.com/release-it/release-it#github-releases)

## Deployment

_Pending..._

## Original Readme

https://github.com/poanetwork/bridge-ui/blob/master/README.md

## License

[![License: LGPL v3.0](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

This project is licensed under the GNU Lesser General Public License v3.0. See the [LICENSE](LICENSE) file for details.
