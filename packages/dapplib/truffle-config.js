require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind hub include clinic fringe slice'; 
let testAccounts = [
"0xf09a4c26a41dd271eb757dc4cdec092d931cf1a4fd951dc0eea3cce6d26480f6",
"0x3770a124abe3c6ce24e00269a0e4c9cc85cd573367850b1f773e3611ff991629",
"0x3a70cf48191728eafe027d97b6259d3f0c478d6fffd674b781285672240a273b",
"0xaca7145282e6a352dc304d9381d8913ac4e8d1037dd993328f6d1b54e52def39",
"0x0375218f0da6a3415661556317b20e4de46fdfe47b53cc5a324b1f9462d95063",
"0x73154e87071357bd0caed1e1f30d93cf2a04a252f7b679b64942b6dc6bad8231",
"0x0ed5635fce893794591296dca32db1e800cebaad367f54ff7d635abc68c9841a",
"0x48bf6937d0dd026954184ba35e018c38697488c5feebe23b131d645a92434e53",
"0xac01eab66eb28946dd1ca772ba4cc7c83b93aac12f7a1219524e6c8b58cacbf1",
"0x48055d70099b814f7480288262737b5f18749911d5d4683d5b42a6313e096621"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

