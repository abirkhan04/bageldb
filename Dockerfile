# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the remaining application files
COPY . .

# Build the React application
RUN npm run build

# Expose port 3005
EXPOSE 3005

# Specify the startup command
CMD ["npm", "start"]
