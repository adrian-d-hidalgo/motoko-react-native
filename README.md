# ICP starter project with Motoko, Next.js and React Native

## How to use for local development

### Initial setup

```bash
npm install
```

Start a local ICP replica

```bash
dfx start --clean --background
```

Create all canisters

```bash
dfx canister create --all
```

Build test canister declaration files

```bash
dfx generate test
```

### Start a tunnel

```bash
npm run tunnel:start
```

Results will be displayed as follows:

```bash
> motoko-nextjs-react-native@0.1.0 tunnel:start
> npx tsx ./scripts/tunnel/src/index.ts

https://breezy-bats-watch.loca.lt
```

### Set Internet Identity Middleware

Clone the `.env-example` file and rename it to `.env`:

```bash
cp frontend/internet-identity-middleware/.env-example frontend/internet-identity-middleware/.env
```

Obtain your Internet Identity Canister ID:

```bash
dfx canister id internet-identity
```

Replace `.env` values:

```
# Replace YOUR_LOCALTUNNEL_URL with the URL obtained by the command npm run tunnel:start
# for example, https://abcdefgjhij.localtunnel.me
# Replace YOUR_INTERNET_IDENTITY_CANISTER_ID with the value from above step
REACT_APP_INTERNET_IDENTITY_URL=YOUR_LOCALTUNNEL_URL?canisterId=YOUR_INTERNET_IDENTITY_CANISTER_ID
```

### Set Mobileapp

Clone the `.env-example` file and name it `.env`:

```bash
cp frontend/mobileapp/.env-example frontend/mobileapp/.env
```

Obtain your Internet Identity Middleware Canister ID:

```bash
dfx canister id internet-identity-middleware
```

Replace `.env` values:

```
# Replace with your APP_LINK if needed
EXPO_PUBLIC_APP_LINK='exp://192.168.0.125:8081'

# Replace YOUR_LOCALTUNNEL_URL with your localtunnel URL
# for example, https://abcdefgjhij.localtunnel.me
EXPO_PUBLIC_IC_HOST_URL='YOUR_LOCALTUNNEL_URL'

# Replace YOUR_LOCALTUNNEL_URL with your localtunnel URL
# and also replace YOUR_MIDDLEWARE_CANISTER_ID with your middleware canister ID
EXPO_PUBLIC_INTERNET_IDENTITY_MIDDLEWARE_URL='YOUR_LOCALTUNNEL_URL?canisterId=YOUR_MIDDLEWARE_CANISTER_ID'
```

### Deploy all canisters and start the mobile app

Deploy all canisters

```bash
dfx deploy
```

Start mobile app in developer mode

```bash
cd frontend/mobileapp
npm run dev
```
