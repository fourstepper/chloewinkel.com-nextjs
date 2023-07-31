run: build start

vercel: vercel-build vercel-deploy-prebuilt

dev:
    npx next dev

build:
    npx next build

start:
    npx next start

vercel-build:
    vercel build

vercel-deploy-prebuilt:
    vercel deploy --prebuilt
