
      // EOS RPC 网络设置
      var network = {
        blockchain:'eos',
        protocol:'https',
        host:'mainnet.eoscannon.io',
        port:443,
        chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
      };
      var currentAccount = null;

      // 连接
      function connect(){
        scatter.connect('MY_GAME_NAME').then(connected => {
          if(connected){
            alert('connect success');
          }else{
            alert('connect fail');
          }
        });
      }

      // 登录，获取 EOS 账户
      function login(){
        // scatter.forgetIdentity();
        scatter.getIdentity({accounts:[network]}).then(result => {
          currentAccount =  result.accounts[0];
          alert('account:'+JSON.stringify(currentAccount));
        }).catch(error => {
          alert('error:'+JSON.stringify(error));
        });
      }

      // 转账
      function transfer(){
        if (currentAccount == null) {
            alert('请先获取 EOS 账户');
        }
        // alert(network.protocol+'://'+network.host);
        var eos = scatter.eos(network, Eos);

        eos.transfer(currentAccount.name, 'giveeostoken', '0.0001 EOS', 'scatter 转账测试 2').then(result => {
          alert('result:'+JSON.stringify(result));
        }).catch(error => {
          alert('error:'+JSON.stringify(error));
        });

      }