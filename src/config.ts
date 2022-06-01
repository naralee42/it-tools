import { figue } from 'figue';

export const config = figue({
  app: {
    version: {
      doc: 'Application current version',
      format: 'string',
      default: '0.0.0',
      env: 'PACKAGE_VERSION',
    },
    lastCommitSha: {
      doc: 'Application last commit SHA version',
      format: 'string',
      default: '',
      env: 'VITE_VERCEL_GIT_COMMIT_SHA',
    },
    baseUrl: {
      doc: 'Application base url',
      format: 'string',
      default: '/',
      env: 'BASE_URL',
    },
    env: {
      doc: 'Application current env',
      format: 'enum',
      values: ['production', 'development', 'test'],
      default: 'development',
      env: 'MODE',
    },
  },
  plausible: {
    domain: {
      doc: 'Plausible current domain',
      format: 'string',
      default: '',
      env: 'VITE_PLAUSIBLE_DOMAIN',
    },
    apiHost: {
      doc: 'Plausible remote api host',
      format: 'string',
      default: '',
      env: 'VITE_PLAUSIBLE_API_HOST',
    },
    trackLocalhost: {
      doc: 'Enable or disable localhost tracking by plausible',
      format: 'boolean',
      default: false,
    },
  },
})
  .loadEnv({
    ...import.meta.env,
    // Because the string 'import.meta.env.PACKAGE_VERSION' is statically replaced during build time (see 'define' in vite.config.ts)
    PACKAGE_VERSION: import.meta.env.PACKAGE_VERSION 
  })
  .validate()
  .getConfig();