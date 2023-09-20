FROM alpine
ENV part=3030
WORKDIR /app
COPY ["./index.js","./package.json","./"]
RUN apk add --update nodejs npm && \
    npm i pnpm -g && \
    npm i pm2 -g && \
    pnpm i 
EXPOSE ${part}
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:3030/ || exit 1
CMD ["pm2-runtime","index.js"]