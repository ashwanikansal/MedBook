const networkConfig = {
    // 4: {
    //     name: "rinkeby",
    //     waitConfirmations: 6,
    // },
    31337: {
        name: "hardhat",
        waitConfirmations: 1,
    },
    5: {
        name: "goerli",
        waitConfirmations: 6,
    }
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains
}