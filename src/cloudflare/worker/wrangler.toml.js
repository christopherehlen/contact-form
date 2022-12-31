export default function (toml, env) {
    toml.vars._ALLOW_ORIGIN = env._ALLOW_ORIGIN;
    toml.vars._NOTION_TOKEN = env._NOTION_TOKEN;
    toml.vars._NOTION_VERSION = env._NOTION_VERSION;
    toml.vars._PAGE_NAME = env._PAGE_NAME
    toml.vars._DATABASE_NAME = env._DATABASE_NAME;
    return toml;
};