# Maki Portfolio — Vercel Export

This is a static HTML, CSS, and JavaScript website. No build step is required.

## Deploy through GitHub
1. Upload all files in this folder to a GitHub repository (index.html should be at the repository root).
2. In Vercel, choose Add New → Project and import the repository.
3. Choose Other as the framework. Leave the build command empty and use . as the output directory.
4. Deploy.

## Deploy with the CLI
With Node.js installed, open a terminal in this folder and run:
npx vercel
Follow the sign-in and project prompts. Then publish to production with:
npx vercel --prod

Local assets are included. Cloudinary videos and graphics still load from their original URLs.
Facebook video cards open the original videos on Facebook.
This export does not include ChatGPT Sites access controls. Configure Vercel access separately if needed.
