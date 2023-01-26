FROM node:14-alpine
ENV NODE_ENV production
ARG REACT_APP_BACKEND_API
ARG REACT_APP_DEMO_MODE
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent
# Copy app files
COPY . .
# Build the app
RUN npm run build -- --prod
