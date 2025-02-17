# NextAuth Prisma Boilerplate

This project is a boilerplate for creating a responsive dashboard using Next.js, NextAuth, Prisma, and Tailwind CSS. The dashboard includes a collapsible sidebar and is designed to be mobile-friendly.

## Features

- **Next.js**: React framework for server-side rendering and static site generation.
- **NextAuth**: Authentication for Next.js applications.
- **Prisma**: ORM for database management.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nextauth-prisma-boilerplate.git
    cd nextauth-prisma-boilerplate
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of your project and add the following:

    ```env
    NEXTAUTH_URL=http://localhost:3000
    DATABASE_URL=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

### Prisma Setup

1. Initialize Prisma:

    ```bash
    npx prisma init
    ```

2. Define your MongoDB schema in `prisma/schema.prisma`. Example:

    ```prisma
    datasource db {
      provider = "mongodb"
      url      = env("DATABASE_URL")
    }

    generator client {
      provider = "prisma-client-js"
    }

    model User {
      id    String  @id @default(auto()) @map("_id") @test.ObjectId
      email String  @unique
      name  String?
      password String?
    }
    ```

3. Push the schema to your database:

    ```bash
    npm run generate
    ```

### Running the Application

- **Development**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

- **Production Build**:

    ```bash
    npm run build
    # or
    yarn build
    ```

- **Start the Production Server**:

    ```bash
    npm start
    # or
    yarn start
    ```

- **Lint the Project**:

    ```bash
    npm run lint
    # or
    yarn lint
    ```

