# CORS Practice

Simple project to understand and test **CORS (Cross-Origin Resource Sharing)** using React and Node.js/Express.

## Project Structure

```text
cors/
├── backend/
├── backend2/
├── frontend/
└── README.md
```

## Start Backend 1

Open terminal:

```bash
cd backend
npm install
npm run dev
```

Backend 1 runs on:

```text
http://localhost:3000
```

## Start Backend 2

Open another terminal:

```bash
cd backend2
npm install
npm run dev
```

Backend 2 runs on:

```text
http://localhost:4000
```

## Start Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend normally runs on:

```text
http://localhost:5173
```

## Test CORS

Open the frontend in your browser.

There are two buttons:

* **Test Allowed CORS** → sends request to `localhost:3000`
* **Test Blocked CORS** → sends request to `localhost:4000`

### Backend 1 — CORS Allowed

```text
Frontend: http://localhost:5173
Backend:  http://localhost:3000

✓ No CORS Problem
```

### Backend 2 — CORS Blocked

```text
Frontend: http://localhost:5173
Backend:  http://localhost:4000

✕ CORS Error
```

## Check CORS in Inspect

Open:

**Inspect → Network**

Select the request and check:

* Request URL
* Request Method
* `Origin`
* `Access-Control-Allow-Origin`
* Response

For blocked requests, also check:

**Inspect → Console**

You will see the browser's CORS error.

## What This Project Demonstrates

* Different origins
* CORS
* `Origin` header
* `Access-Control-Allow-Origin`
* CORS errors
* Preflight requests
