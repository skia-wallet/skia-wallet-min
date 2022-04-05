# Skia Wallet mini
 A web based starknet wallet that works on any device
## Usage
To connect your dapp with skia wallet, install the `skia-wallet` npm package
```
npm i skia-wallet
# or
yarn add skia-wallet
```

### import the package
```javascript
import {execute, call} from 'skia-wallet';
```

### Invoke
To invoke a method on a smart contract, use the `execute()` function. This will prompt the user to confirm the transaction.
Args:
```
@contractAddress: the smart contract address
@method: the method name
@args: a stringify array of the arguments
@callbackUrl: Where user should be redirected after confirming transaction or cancelling.
```


### Call 
To call a method from a smart contract, use the `call()` function. This will not prompt the user to confirm the transaction.
```
@contractAddress: the smart contract address
@method: the method name
@args: a stringify array of the arguments
```
### Demo dap
[Code](https://github.com/skia-wallet/ExampleDapp) | [demo](https://example-dapp.vercel.app/)