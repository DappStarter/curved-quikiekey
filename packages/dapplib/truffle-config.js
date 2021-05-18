require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift reward stick coin harvest clip sun video'; 
let testAccounts = [
"0x0b940fa971245f31fea78fed87dd80b0d8c79c7e4d585f72858c35d9fc71b964",
"0x1d30e494051544968a85b54a2ba4afc894be08589b7d738932923311a5ccf028",
"0xf92d73a847231287b7309f42df80d4fb12aeccaa23cd63f83c8d4186e1740beb",
"0xd9fead63c301c4a325c50dabb681d4eae494275b1978db13e406232ba8402c6b",
"0x8881a3f6244927729f184967aa30fb357a706ea0a77082af5d0de49a8cd3e87b",
"0xa3061d5f74b91c754426c20a4c3f5d75966f901cc020508c8cd43617f2e1df3a",
"0xba3e78a817d0ffb5f4b3f7e77196c83c19159a7e754de5945ce1e670c917a88f",
"0x2ae322b25c5f14d8eb463d5f01fd7365463eb99f927a778667711c100d0ce99c",
"0x86c02d7231a8d6ded66b886f65bf5d230f905ee3073ffaf4f18bc43cb3d1a4be",
"0x457690da9de868aee31081a0baddaed68a4a1a9f8b61f5f25e57c247a65cf1a5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
