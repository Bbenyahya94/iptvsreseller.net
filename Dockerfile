# Minimal production image for the prebuilt static site.
FROM nginx:1.27-alpine

# Serve the generated static application, panel pages, sitemap and robots rules.
COPY dist/ /usr/share/nginx/html/

# Coolify routes traffic to this HTTP port.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
