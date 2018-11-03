# scatter-eos-sample

### 麦子钱包 Scatter API 开发示例

#### sample01

基于 Scatter 接口的 EOS 基础操作示例

测试地址：

http://developer.mathwallet.org/sample01/

https://developer.mathwallet.org/sample01/

#### sample02

基于 Scatter 接口的 EOS 原力 基础操作示例

EOS 原力与 EOS 的唯一区别是在 network 中需要将参数 blockchain:'eos' 改为 blockchain:'eosforce'

测试地址：

http://developer.mathwallet.org/sample02/

https://developer.mathwallet.org/sample02/

### 测试方法

在钱包的 DAPP 中找到【麦子 DAPP 浏览器】应用，粘贴地址即可进行测试，该方式目前只支持主网环境。

### 如何切换 EOS 测试网络

1 在代码中更换 network 参数为测试网络

2 Jungle Testnet 信息

RPC URL: http://jungle.cryptolions.io/#apiendpoints

chainId: 038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca

创建测试账号&申请测试Token：http://jungle.cryptolions.io/

3 使用 Scatter 插件，添加【网络】和【密钥】，然后新建身份，在Chrome中进行debug。