/** @type {import('next').NextConfig} */
// #region agent log
const fs = require('fs');
const path = require('path');
const logPath = path.join(__dirname, '.cursor', 'debug.log');
const configStartTime = Date.now();
const os = require('os');

// Only enable static export for production builds (next build), not dev server (next dev)
// Next.js sets NODE_ENV='production' automatically during 'next build'
// During 'next dev', NODE_ENV is undefined or 'development'
const isProductionBuild = process.env.NODE_ENV === 'production';

// Log compilation environment
const logData = {
  location: 'next.config.js:config-start',
  message: 'Next.js config evaluation started',
  data: {
    nodeEnv: process.env.NODE_ENV,
    isProductionBuild: isProductionBuild,
    timestamp: configStartTime,
    nodeVersion: process.version,
    platform: os.platform(),
    cpus: os.cpus().length,
    totalMemory: Math.round(os.totalmem() / 1024 / 1024 / 1024) + 'GB',
    freeMemory: Math.round(os.freemem() / 1024 / 1024 / 1024) + 'GB'
  },
  timestamp: configStartTime,
  sessionId: 'debug-session',
  runId: 'run1',
  hypothesisId: 'H1'
};
try {
  fs.appendFileSync(logPath, JSON.stringify(logData) + '\n');
} catch (e) {}

// Check for .next directory and its size (cache)
try {
  const nextDir = path.join(__dirname, '.next');
  if (fs.existsSync(nextDir)) {
    const stats = fs.statSync(nextDir);
    const logCacheData = {
      location: 'next.config.js:cache-check',
      message: '.next cache directory exists',
      data: {
        cacheExists: true,
        cacheSize: stats.isDirectory() ? 'directory' : stats.size,
        cacheModified: stats.mtime.toISOString()
      },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'run1',
      hypothesisId: 'H6'
    };
    fs.appendFileSync(logPath, JSON.stringify(logCacheData) + '\n');
  }
} catch (e) {}

// Check package.json for heavy dependencies
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  const heavyDeps = ['framer-motion', 'gsap', 'mathjs', 'ogl'].filter(dep => packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]);
  
  const logDepsData = {
    location: 'next.config.js:dependencies',
    message: 'Heavy dependencies detected',
    data: {
      heavyDependencies: heavyDeps,
      totalDeps: Object.keys(packageJson.dependencies || {}).length,
      totalDevDeps: Object.keys(packageJson.devDependencies || {}).length
    },
    timestamp: Date.now(),
    sessionId: 'debug-session',
    runId: 'run1',
    hypothesisId: 'H3'
  };
  fs.appendFileSync(logPath, JSON.stringify(logDepsData) + '\n');
} catch (e) {}

const configEndTime = Date.now();
const configDuration = configEndTime - configStartTime;
const logConfigData = {
  location: 'next.config.js:config-end',
  message: 'Next.js config evaluated',
  data: {
    nodeEnv: process.env.NODE_ENV,
    isProductionBuild: isProductionBuild,
    outputExportEnabled: isProductionBuild,
    configEvaluationTime: configDuration + 'ms'
  },
  timestamp: configEndTime,
  sessionId: 'debug-session',
  runId: 'run1',
  hypothesisId: 'H1'
};
try {
  fs.appendFileSync(logPath, JSON.stringify(logConfigData) + '\n');
} catch (e) {}
// #endregion

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // Only enable static export for production builds, not dev server
  // Dev server cannot work with output: 'export' - it causes 404s for CSS/JS assets
  ...(isProductionBuild && { output: 'export' }),
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  // Suppress Pages Router warnings in dev mode
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Optimize compilation performance
  typescript: {
    // Skip type checking during build (faster compilation)
    // Type errors will still show in IDE and on-demand
    ignoreBuildErrors: false,
  },
  // Experimental optimizations for faster compilation
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
  // #region agent log
  webpack: (config, { dev, isServer, webpack }) => {
    const webpackStartTime = Date.now();
    const logWebpackData = {
      location: 'next.config.js:webpack-config',
      message: 'Webpack config being generated',
      data: {
        isDev: dev,
        isServer,
        mode: config.mode,
        optimizationMinimize: config.optimization?.minimize,
        cacheEnabled: !!config.cache,
        resolveModules: config.resolve?.modules?.length || 0,
        resolveExtensions: config.resolve?.extensions?.length || 0
      },
      timestamp: webpackStartTime,
      sessionId: 'debug-session',
      runId: 'run1',
      hypothesisId: 'H7'
    };
    try {
      fs.appendFileSync(logPath, JSON.stringify(logWebpackData) + '\n');
    } catch (e) {}
    
    // Optimize module resolution for faster compilation
    if (dev && !isServer) {
      // Add alias to speed up resolution of heavy dependencies
      if (!config.resolve) config.resolve = {};
      if (!config.resolve.alias) config.resolve.alias = {};
      
      // Enable faster module resolution
      config.resolve.modules = ['node_modules', ...(config.resolve.modules || [])];
    }
    
    return config;
  },
  // #endregion
}

module.exports = nextConfig

