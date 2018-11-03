let router = require("koa-router")()




let webController = require("../controllers/web")
let walletController = require("../controllers/wallet")
let accountController = require("../controllers/account")
let transactionController = require("../controllers/transaction")

router.get("/", async (ctx) => {
    await ctx.render("wallet.html")
})
//钱包
router.post("/wallet/create", walletController.walletCreate)
router.post("/wallet/open", walletController.walletOpen)
router.get("/wallet/list", walletController.walletList)
router.post("/wallet/unlock", walletController.walletUnlock)
router.post("/wallet/lock", walletController.walletLock)
router.post("/wallet/importkey", walletController.walletImportPrivatekey)
router.post("/wallet/keys", walletController.walletGetKeys)
router.post("/wallet/createkey", walletController.walletCreateKey)
router.post("/wallet/privatekey", walletController.walletPubkeyGetPrivatekey)




//账号
router.post("/account/listforwallet", accountController.accountListForWallet)
router.post("/account/create", accountController.accountCreate)
router.post("/account/balance", accountController.accountBalance)
router.post("/account/info", accountController.accountInfo)


//转账交易
router.post("/transaction/send", transactionController.transactionSend)

router.post("/transaction/testPing", transactionController.testPing)

router.get("/wallet.html", webController.getWalletHtml)
router.get("/account.html", webController.getAccountHtml)
router.get("/accountinfo.html", webController.getAccountInfoHtml)
router.get("/accountnew.html", webController.getAccountCreateHtml)
router.get("/transaction.html", webController.getTransactionHtml)


module.exports = router