# Kubeflow Interactive Tutorial POC

## Development Environment Setup

Install the latest LTS for Node.js (if not already installed): [Download Node.js](https://github.com/nodesource/distributions#debinstall). Make sure to choose the LTS version.

Install dependencies for the frontend:

```bash
cd frontend
npm install
```

Install dependencies for the backend:

```bash
cd backend
npm install
```

## Running Development Servers

Run the frontend server:

```bash
cd frontend
npm start
```

Run the backend server:

```bash
cd backend
npm start
```

Open your web browser and visit: http://localhost:3000.

## Building, Install & Run snap locally

### Build

Install snapcraft

Init lxd: `lxd init --auto`

Run the snap build:

```bash
snapcraft
```

### Install

After the snap is built, from within the snap directory:

```bash
sudo snap install kubeflow-interactive-tutorial_1.0_amd64.snap --dangerous
```

### Run

kubeflow-interactive-tutorial.frontend