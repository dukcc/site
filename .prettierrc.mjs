// .prettierrc.mjs
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    tabWidth: 4,
    tailwindStylesheet: "./src/styles/base.css",
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
