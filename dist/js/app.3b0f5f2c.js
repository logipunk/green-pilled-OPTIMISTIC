(function(e){function t(t){for(var a,s,o=t[0],l=t[1],p=t[2],d=0,c=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&c.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(c.length)c.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},5152:function(e){e.exports=JSON.parse('[{"address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","decimals":18,"name":"ETH","symbol":"ETH"},{"address":"0xeb8f08a975ab53e34d8a0330e0d34de942c95926","decimals":6,"name":"USD Coin (rinkeby)","symbol":"USDC"}]')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"navbar",attrs:{align:"center",padding:"30px"}},[e._m(0),e._m(1),n("div",{staticClass:"nav-box"},[n("button",{staticClass:"button"},[n("span",[e._v(" # of minted Pills "+e._s(this.pillNum)+" ")])])]),n("div",{staticClass:"nav-box"}),e._m(2),e._m(3),n("div",{staticClass:"nav-box"},[null==e.ensName?n("button",{staticClass:"button",staticStyle:{"vertical-align":"middle"},on:{click:e.connectMetamask}},[n("span",[e._v(e._s(e.moded_walletAddress))])]):n("button",{staticClass:"button",staticStyle:{"vertical-align":"middle"},on:{click:e.connectMetamask}},[n("span",[e._v(e._s(e.ensName+"\n\n"+e.moded_walletAddress))])])])]),n("div",{staticClass:"main-box"},[n("p",{attrs:{fontSize:"58px","text-shadow":"5px 5px 5px green"}},[e._v("Get Your Green Pill")]),e._m(4),e.isWalletConnected?e.isWalletConnected&&!e.areYouPilled?n("p",[n("button",{staticClass:"button",staticStyle:{"vertical-align":"middle"},on:{click:e.mintYourPill}},[n("span",[e._v("Mint Your Pill")]),1==e.txStatus?n("span",[e._v("Sending tx...")]):2==e.txStatus?n("span",[e._v("Waiting until tx is committed...")]):3==e.txStatus?n("span",[e._v("Transaction completed...")]):e._e()])]):e.isWalletConnected&&e.areYouPilled?n("p",[e._v(" Looks like you have been already pilled. Here is your pill: "),n("br"),e._v(" Manifesto: "),n("br"),n("br"),e._v(" "+e._s(e.jsonManifest.name)),n("br"),e._v(" "+e._s(e.jsonManifest.description)),n("br"),n("img",{attrs:{src:e.greenPillIMG}})]):e._e():n("p",[e._v(" Connect your wallet and GET PILLED (note: this project is on Optimism network) ")])]),e._m(5),n("div",{staticClass:"footer",attrs:{align:"center",padding:"30px"}},[n("div",{staticClass:"nav-box"}),n("div",{staticClass:"nav-box"}),n("div",{staticClass:"nav-box"}),n("div",{staticClass:"nav-box"},[n("div",{staticClass:"tooltip"},[n("button",{staticClass:"button",on:{mouseover:e.myFunction,mouseout:e.outFunc}},[n("span",{staticClass:"tooltiptext",attrs:{id:"myTooltip"}},[e._v("Copy to clipboard")]),e._v(" Tip Da DeV"),n("br"),e._v("logipunk.eth ")])])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-box"},[n("button",{staticClass:"button",attrs:{onclick:"window.location.href='https://greenpill.party/';"}},[n("span",[e._v(" greenpill.party ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-box"},[n("button",{staticClass:"button",attrs:{onclick:"window.location.href='https://gitcoin.co/grants/explorer/?page=1&limit=12&me=false&sort_option=-metadata__upcoming&collection_id=false&network=mainnet&state=active&profile=false&sub_round_slug=false&collections_page=1&grant_regions=&grant_types=&grant_tags=&tenants=&idle=false&featured=true&round_type=false&tab=grants';"}},[n("span",[e._v(" Public Goods ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-box"},[n("button",{staticClass:"button",attrs:{onclick:"window.location.href='#About';"}},[n("span",[e._v(" About ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-box"},[a("a",{attrs:{href:"https://twitter.com/logipunk"}},[a("img",{attrs:{src:n("856d")}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{attrs:{fontSize:"30px",fontFamily:"VT323",textShadow:"0 2px 2px #000000"}},[e._v(" Welcome to pilled party where your appetate for some green goodnes will be fullfilled."),n("br"),n("br"),e._v(" One pill per address, just pay mint fee. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-box",attrs:{paddingTop:"200px",id:"About"}},[n("p",{attrs:{fontSize:"30px"}},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),e._v(' green pilled ..... this project was inspired by the "GREENPILLED" book of "How Crypto Can Regenerate The Worls" found at '),n("a",{attrs:{href:"https://GreenPill.Party/"}},[e._v("GreenPill.Party")]),e._v(" idea for this project is for the users to get green pilled.... and have a record to show for it green pill is just an SVG image that will store pilled number, date of pilled (D>O>P>) only cost assosiated with this project is a minting cost , mint contract is created on L2 (layer 2) "),n("a",{attrs:{href:"https://www.optimism.io/"}},[e._v("optimism.io")]),e._v(" network. Contract address is "),n("a",{attrs:{href:"https://optimistic.etherscan.io/address/0xc25e8598d8334e5cff2a5fb2beaf5954007719ca"}},[e._v("0xC25e8598d8....54007719CA")]),e._v(" if you really enjoy your pill and are having a great trip on it you can go crazy and #TipDaDev @ logipunk.eth"),n("br"),e._v(" have Fun ....peace...."),n("br"),n("br"),e._v(" this contract will only allow one pill per wallet address"),n("br"),e._v(" ~logipunk.eth~ ")])])}],s=n("1da1"),o=(n("e9c4"),n("96cf"),n("c030")),l="0xC25e8598d8334e5cff2a5fb2BeAf5954007719CA",p=n("9f1d"),u=n("5152"),d={name:"App",data:function(){return{greenPillIMG:"",ensName:"",moded_walletAddress:"Connect",newGreeting:"",greeting:"unknown",tokens:u,selectedToken:null,selectedTokenAddress:"",mainLoading:!0,provider:null,signer:null,contract:null,pre_provider:null,pre_contract:null,canSubmit:!0,txStatus:0,retreivingFee:!1,retreivingBalance:!1,currentBalance:"",currentFee:"",isWalletConnected:!1,areYouPilled:!1,pillNum:null,jsonManifest:null}},methods:{myFunction:function(){navigator.clipboard.writeText("0xF95496595890836A358C2d6A3e122354a0A0af5b");var e=document.getElementById("myTooltip");e.innerHTML="Copied: 0xF954....af5b",console.log("tooltip 1")},outFunc:function(){var e=document.getElementById("myTooltip");e.innerHTML="Copy to clipboard",console.log("tooltip 2")},preloadPillCount:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.pre_provider=new o["ethers"].providers.JsonRpcProvider("https://mainnet.optimism.io"),e.pre_contract=new o["ethers"].Contract(l,p,e.pre_provider),console.log("przed...."),t.next=5,e.pre_contract.totalMintedPills();case 5:e.pillNum=t.sent,console.log("czy to jest to ?   ...."+e.pillNum);case 7:case"end":return t.stop()}}),t)})))()},loadYourPill:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.provider=new o["ethers"].providers.Web3Provider(window.ethereum),t.signer=t.provider.getSigner(),t.contract=new o["ethers"].Contract(l,p,t.signer),n.t0=console,n.next=6,t.contract.maxSupply();case 6:return n.t1=n.sent,n.t0.log.call(n.t0,n.t1),n.next=10,t.contract.balanceOf(e);case 10:if(a=n.sent,console.log("ilosc NFTs"+a),!(a>0)){n.next=32;break}return n.prev=13,t.areYouPilled=!0,r=0,n.next=18,t.contract.tokenOfOwnerByIndex(e,r);case 18:return i=n.sent,n.next=21,t.contract.tokenURI(i);case 21:s=n.sent,u=atob(s.substring(29)),console.log("jsonManifestString",u);try{d=JSON.parse(u),t.jsonManifest=d,console.log("jsonManifest",d),t.greenPillIMG=d.image,console.log("greenPillIMG"+t.greenPillIMG)}catch(c){console.log(c),console.log("ktores sie wypierdala")}n.next=30;break;case 27:n.prev=27,n.t2=n["catch"](13),console.log(n.t2);case 30:n.next=33;break;case 32:t.areYouPilled=!1;case 33:case"end":return n.stop()}}),n,null,[[13,27]])})))()},mintYourPill:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=new Date,console.log(n.toLocaleDateString("en-US")),r=n.toLocaleDateString("en-US"),a=null==e.ensName?e.moded_walletAddress:e.ensName,console.log(a),!window.ethereum){t.next=26;break}return e.txStatus=1,e.provider=new o["ethers"].providers.Web3Provider(window.ethereum),e.signer=e.provider.getSigner(),e.contract=new o["ethers"].Contract(l,p,e.signer),t.prev=10,t.next=13,e.contract.mintItem(a,r);case 13:return i=t.sent,e.txStatus=2,t.next=17,i.wait();case 17:e.txStatus=3,e.areYouPilled=!0,e.loadYourPill(e.signer.address),e.preloadPillCount(),t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](10),alert(JSON.stringify(t.t0));case 26:e.txStatus=0;case 27:case"end":return t.stop()}}),t,null,[[10,23]])})))()},getBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.signer.getBalance(e.selectedToken.address);case 2:return n=t.sent,t.abrupt("return",o["ethers"].utils.formatUnits(n,e.selectedToken.decimals));case 4:case"end":return t.stop()}}),t)})))()},getWalletAddress:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.ensName="",a=n("c030"),r=a.ethers,i="https://mainnet.infura.io/v3/8e69dce1a5a44c73a8bc0ba5fa03dc30",s=new r.providers.JsonRpcProvider(i),t.next=6,s.lookupAddress(e.moded_walletAddress);case 6:e.ensName=t.sent,e.moded_walletAddress=e.moded_walletAddress.substring(0,5)+"..."+e.moded_walletAddress.substring(e.moded_walletAddress.length-4,e.moded_walletAddress.length),console.log("siemka "+e.moded_walletAddress+" ENS:"+e.ensName);case 9:case"end":return t.stop()}}),t)})))()},connectMetamask:function(){var e=this;window.ethereum.request({method:"eth_requestAccounts"}).then((function(){10==+window.ethereum.networkVersion?(window.ethereum.request({method:"eth_requestAccounts"}).then((function(t){console.log("accounts",t[0]),e.moded_walletAddress=t[0],e.loadYourPill(t[0]),console.log("accountsII",e.moded_walletAddress),e.getWalletAddress()})),e.isWalletConnected=!0):alert("Please switch network to Optimism network. Use this site for all the information https://chainid.link/?network=optimism")})).catch((function(e){return console.log(e)}))}},components:{},created:function(){this.preloadPillCount()}},c=d,y=(n("034f"),n("2877")),m=Object(y["a"])(c,r,i,!1,null,null,null),f=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(f)}}).$mount("#app")},"856d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgB7dq/S8NAFAfw77UJGAd/DQ5OwQrilqWDi3+E/4D4H+juv+EsTm7q6iS4dnGQFoXQpSiKtNAhDRZyJnax5pDLLy6vvA90yBHSe+Xdu7tcBTRcvEm30UQfhh1tCqFzXwMLiIOiYiGDUg68yw8pf19/RUB3LGGat5burqp4cPpRYSEnJ/45jrfU00YnTtXOGMZYJ33p/m1MxtB/1wmnCew4UPIDVELVD1X/LTGVqZVCd4paUhWrOFdS/edCQQUHRQUHRQWvKHS1VwRayyjsNZS4/URmlQS1Yc8+RYmfTUT23QGPKSo4KCoqKRSTeIsQRigsyPmMSoJ6GEncDWEMjykqOCgqOCgqePLVdbAu0F5FYX4gcfWOzAoF5U/SbS1n9vbWKSEHRna+rUfuoIbxC8/zwfwXJnuoM1frBLNSXCio4OqnQ1U88hqEyEWcvkTmzz1LxulXU6lMU04q3nVv7sYl28b+7jZMu396TrU9Hu7x6TxZXChqQGv60Vp9ejc9N36c8f/7qYqCCo8pKrhQlKjS9eY3Crlb/TXouicAAAAASUVORK5CYII="},"85ec":function(e,t,n){},"9f1d":function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPublicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_lookedUpOwner","type":"string"},{"internalType":"string","name":"_mintDate","type":"string"}],"name":"mintItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"renderTokenById","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isPublicMintEnabled_","type":"bool"}],"name":"setIsPublicMintEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalMintedPills","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}});
//# sourceMappingURL=app.3b0f5f2c.js.map