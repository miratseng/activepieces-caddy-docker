import { BaseModel } from '../common/base-model'
import { ApId } from '../common/id-generator'

export type FlagId = ApId

export type Flag = {
    value: unknown
} & BaseModel<FlagId>

export enum ApEnvironment {
    PRODUCTION = 'prod',
    DEVELOPMENT = 'dev',
    TESTING = 'test',
}

export enum ApEdition {
    COMMUNITY = 'ce',
    ENTERPRISE = 'ee',
    CLOUD = 'cloud',
}

export enum ApFlagId {
    SHOW_PLATFORM_DEMO = 'SHOW_PLATFORM_DEMO',
    SHOW_POWERED_BY_IN_FORM = 'SHOW_POWERED_BY_IN_FORM',
    CLOUD_AUTH_ENABLED = 'CLOUD_AUTH_ENABLED',
    PROJECT_LIMITS_ENABLED = 'PROJECT_LIMITS_ENABLED',
    CURRENT_VERSION = 'CURRENT_VERSION',
    EDITION = 'EDITION',
    EMAIL_AUTH_ENABLED = 'EMAIL_AUTH_ENABLED',
    EXECUTION_DATA_RETENTION_DAYS = 'EXECUTION_DATA_RETENTION_DAYS',
    ENVIRONMENT = 'ENVIRONMENT',
    FRONTEND_URL = 'FRONTEND_URL',
    LATEST_VERSION = 'LATEST_VERSION',
    OWN_AUTH2_ENABLED = 'OWN_AUTH2_ENABLED',
    PRIVACY_POLICY_URL = 'PRIVACY_POLICY_URL',
    PIECES_SYNC_MODE = 'PIECES_SYNC_MODE',
    PRIVATE_PIECES_ENABLED = 'PRIVATE_PIECES_ENABLED',
    FLOW_RUN_MEMORY_LIMIT_KB = 'FLOW_RUN_MEMORY_LIMIT_KB',
    FLOW_RUN_TIME_SECONDS = 'FLOW_RUN_TIME_SECONDS',
    SHOW_BILLING = 'SHOW_BILLING',
    SHOW_COMMUNITY = 'SHOW_COMMUNITY',
    SHOW_DOCS = 'SHOW_DOCS',
    SUPPORTED_APP_WEBHOOKS = 'SUPPORTED_APP_WEBHOOKS',
    TELEMETRY_ENABLED = 'TELEMETRY_ENABLED',
    TEMPLATES_PROJECT_ID = 'TEMPLATES_PROJECT_ID',
    TERMS_OF_SERVICE_URL = 'TERMS_OF_SERVICE_URL',
    THEME = 'THEME',
    THIRD_PARTY_AUTH_PROVIDER_REDIRECT_URL = 'THIRD_PARTY_AUTH_PROVIDER_REDIRECT_URL',
    THIRD_PARTY_AUTH_PROVIDERS_TO_SHOW_MAP = 'THIRD_PARTY_AUTH_PROVIDERS_TO_SHOW_MAP',
    SAML_AUTH_ACS_URL = 'SAML_AUTH_ACS_URL',
    USER_CREATED = 'USER_CREATED',
    WEBHOOK_URL_PREFIX = 'WEBHOOK_URL_PREFIX',
    ALLOW_NPM_PACKAGES_IN_CODE_STEP = 'ALLOW_NPM_PACKAGES_IN_CODE_STEP',
    PAUSED_FLOW_TIMEOUT_DAYS = 'PAUSED_FLOW_TIMEOUT_DAYS',
    WEBHOOK_TIMEOUT_SECONDS = 'WEBHOOK_TIMEOUT_SECONDS',
}
