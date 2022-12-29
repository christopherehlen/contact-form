export default function (toml, env) {
    toml.vars.ALLOW_ORIGIN = env.ALLOW_ORIGIN;
    toml.vars.NOTION_TOKEN = env.NOTION_TOKEN;
    toml.vars.NOTION_VERSION = env.NOTION_VERSION;
    toml.vars.PAGE_NAME = env.PAGE_NAME
    toml.vars.DATABASE_NAME = env.DATABASE_NAME;
    return toml;
};