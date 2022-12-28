import { env } from 'process';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import * as path from 'path';
import fg from 'fast-glob';
import envPlugin from "@christopherehlen/atomic/env-plugin";
import assetPlugin from "@christopherehlen/atomic/asset-plugin";
import configPlugin from "@christopherehlen/atomic/config-plugin";
import modelPlugin from "@christopherehlen/atomic/model-plugin";
import viewPlugin from "@christopherehlen/atomic/view-plugin";
import controllerPlugin from "@christopherehlen/atomic/controller-plugin";
import stylePlugin from "@christopherehlen/atomic/style-plugin";
import organismPlugin from "@christopherehlen/atomic/organism-plugin";
import { browserWidgetPlugin, browserPreviewPlugin, browserOrganismJsPlugin } from "@christopherehlen/atomic/browser-plugin";
import workerPlugin from "@christopherehlen/atomic/worker-plugin";

require('dotenv-flow').config();
export default [{
    input: path.resolve(__dirname, 'generated', 'env.js'),
    output: {
        file: path.resolve(__dirname, 'generated', 'env.cjs'),
        format: 'cjs'
    },
    watch: {
        exclude: 'generated/**/*'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        envPlugin()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'cloudflare', 'worker', 'router.js'),
    output: {
        file: path.resolve(__dirname, 'cloudflare', 'worker', `${env.ORGANISM_NAME.replace(/[s]/g, '-')}.mjs`),
        format: 'es'
    },
    watch: {
        exclude: ['generated/cloudflare/**/*']
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        workerPlugin(),
        {
            name: 'watch-external',
            async buildStart() {
                (await fg('src/cloudflare/worker/**/*')).forEach(file => this.addWatchFile(path.resolve(__dirname, file)));
            }
        }
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'cloudflare', 'worker', 'service.js'),
    output: {
        file: path.resolve(__dirname, 'dist', 'cloudflare-service.mjs'),
        format: 'es'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'cloudflare', 'client.js'),
    output: {
        name: `${env.ORGANISM_NAME.replace(/[s-]/g, '_')}_api`,
        file: path.resolve(__dirname, 'public_html', 'organisms', `${env.ORGANISM_NAME.replace(/[s]/g, '-')}-client.js`),
        format: 'iife'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'assets', 'assets.js'),
    output: {
        file: path.resolve(__dirname, 'generated', 'assets.mjs'),
        format: 'es'
    },
    watch: {
        exclude: 'generated/**/*'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        assetPlugin(),
        {
            name: 'watch-external',
            async buildStart() {
                (await fg('src/assets/**/*')).forEach(file => this.addWatchFile(path.resolve(__dirname, file)));
            }
        }
    ]
}, {
    input: path.resolve(__dirname, 'src', 'config.js'),
    output: {
        file: path.resolve(__dirname, 'generated', 'config.cjs'),
        format: 'cjs',
        exports: 'auto'
    },
    watch: {
        exclude: 'generated/**/*'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        configPlugin()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'models.js'),
    output: {
        file: path.resolve(__dirname, 'dist', 'models.mjs'),
        format: 'es'
    },
    watch: {
        exclude: 'generated/**/*'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        modelPlugin(),
        {
            name: 'watch-external',
            async buildStart() {
                (await fg('src/models/**/*')).forEach(file => this.addWatchFile(path.resolve(__dirname, file)));
            }
        }
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'view.js'),
    output: {
        name: 'view',
        file: path.resolve(__dirname, 'public_html', 'organisms', env.ORGANISM_NAME, 'view.js'),
        format: 'iife'
    },
    watch: {
        exclude: ['generated/**/*', 'public_html/**/*']
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        viewPlugin(),
        {
            name: 'watch-external',
            async buildStart() {
                (await fg('src/views/**/*')).forEach(file => this.addWatchFile(path.resolve(__dirname, file)));
            }
        }
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'controller.js'),
    output: {
        name: 'controller',
        file: path.resolve(__dirname, 'public_html', 'organisms', env.ORGANISM_NAME, 'controller.js'),
        format: 'iife'
    },
    watch: {
        exclude: ['generated/**/*', 'public_html/**/*']
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        controllerPlugin(),
        {
            name: 'watch-external',
            async buildStart() {
                (await fg('src/controllers/**/*')).forEach(file => this.addWatchFile(path.resolve(__dirname, file)));
            }
        }
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'styles.js'),
    output: {
        file: path.resolve(__dirname, 'generated', 'styles', 'styles.cjs'),
        format: 'cjs',
        exports: 'auto'
    },
    watch: {
        exclude: 'generated/**/*'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        stylePlugin(),
        {
            name: 'watch-external',
            async buildStart() {
                (await fg('src/styles/**/*')).forEach(file => this.addWatchFile(path.resolve(__dirname, file)));
            }
        }
    ]
}, {
    input: path.resolve(__dirname, 'index.js'),
    output: {
        file: path.resolve(__dirname, 'dist', `${env.ORGANISM_NAME.replace(/[s]/g, '-')}.mjs`),
        format: 'es'
    },
    watch: {
        include: ['src/config.js', 'generated/views/*','generated/controller.js', 'generated/styles/*']
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        organismPlugin()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'browser-widget.js'),
    output: {
        name: `${env.ORGANISM_NAME.replace(/[s-]/g, '_')}`,
        file: path.resolve(__dirname, 'public_html', 'organisms', `${env.ORGANISM_NAME.replace(/[s]/g, '-')}.js`),
        format: 'iife'
    },
    watch: {
        include: 'generated/organism.js'
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        browserWidgetPlugin()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'browser-preview.js'),
    output: {
        file: path.resolve(__dirname, 'public_html', 'organisms', `${env.ORGANISM_NAME.replace(/[s]/g, '-')}.preview.js`),
        format: 'iife'
    },
    watch: {
        include: ['generated/organism.js', 'src/preview.js']
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        browserPreviewPlugin()
    ]
}, {
    input: path.resolve(__dirname, 'generated', 'organismJS.js'),
    output: {
        name: 'organismJS',
        file: path.resolve(__dirname, 'public_html', 'scripts', 'organism.js'),
        format: 'iife'
    },
    watch: {
        exclude: ['generated/**/*', 'public_html/**/*']
    },
    plugins: [
        commonjs(),
        resolve(),
        terser(),
        browserOrganismJsPlugin()
    ]
}];