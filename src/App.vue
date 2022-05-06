<template>
  <div id="app">
    <div class="navbar" align="center" padding="30px">
      <div class="nav-box">
        <button
          class="button"
          onclick="window.location.href='https://greenpill.party/';"
        >
          <span> greenpill.party </span>
        </button>
      </div>

      <div class="nav-box">
        <button
          class="button"
          onclick="window.location.href='https://gitcoin.co/grants/explorer/?page=1&limit=12&me=false&sort_option=-metadata__upcoming&collection_id=false&network=mainnet&state=active&profile=false&sub_round_slug=false&collections_page=1&grant_regions=&grant_types=&grant_tags=&tenants=&idle=false&featured=true&round_type=false&tab=grants';"
        >
          <span> Public Goods </span>
        </button>
      </div>
      <div class="nav-box">
        <button class="button">
          <span> # of minted Pills {{ this.pillNum }} </span>
        </button>
      </div>

      <div class="nav-box"></div>

      <div class="nav-box">
        <button class="button" onclick="window.location.href='#About';">
          <span> About </span>
        </button>
      </div>

      <div class="nav-box">
        <a href="https://twitter.com/logipunk"
          ><img src="./assets/social-icons/twitter_32x32.png"
        /></a>
      </div>

      <!-- <div class="nav-box">Connected</div> -->
      <div class="nav-box">
        <button
          class="button"
          style="vertical-align: middle"
          v-on:click="connectMetamask"
          v-if="ensName == null"
        >
          <span>{{ moded_walletAddress }}</span>
        </button>
        <button
          class="button"
          style="vertical-align: middle"
          v-on:click="connectMetamask"
          v-else
        >
          <span>{{ ensName + "\n\n" + moded_walletAddress }}</span>
        </button>
      </div>
    </div>

    <div class="main-box">
      <p fontSize="58px" text-shadow="5px 5px 5px green">Get Your Green Pill</p>
      <p fontSize="30px" fontFamily="VT323" textShadow="0 2px 2px #000000">
        Welcome to pilled party where your appetate for some green goodnes will
        be fullfilled.<br /><br />
        One pill per address, just pay mint fee.
      </p>
      <p v-if="!isWalletConnected">
        Connect your wallet and GET PILLED (note: this project is on Optimism
        network)
      </p>
      <p v-else-if="isWalletConnected && !areYouPilled">
        <button
          class="button"
          style="vertical-align: middle"
          v-on:click="mintYourPill"
        >
          <span>Mint Your Pill</span>
          <span v-if="txStatus == 1">Sending tx...</span>
          <span v-else-if="txStatus == 2"
            >Waiting until tx is committed...</span
          >
          <span v-else-if="txStatus == 3">Transaction completed...</span>
        </button>
      </p>
      <p v-else-if="isWalletConnected && areYouPilled">
        Looks like you have been already pilled. Here is your pill: <br />
        Manifesto: <br /><br />
        {{ jsonManifest.name }}<br />
        {{ jsonManifest.description }}<br />
        <img :src="greenPillIMG" />
      </p>
    </div>

    <div class="main-box" paddingTop="200px" id="About">
      <p fontSize="30px">
        <br /><br /><br /><br /><br /><br /><br /><br />
        green pilled ..... this project was inspired by the "GREENPILLED" book of "How Crypto Can Regenerate The Worls" found at <a href="https://GreenPill.Party/">GreenPill.Party</a> 
        idea for this project is for the users to get green pilled.... and have a record to show for it 
        green pill is just an SVG image that will store pilled number, date of pilled (D>O>P>)
        only cost assosiated with this project is a minting cost , mint contract is created on L2 (layer 2) 
        <a href="https://www.optimism.io/">optimism.io</a> network. Contract address is 
        <a href="https://optimistic.etherscan.io/address/0xc25e8598d8334e5cff2a5fb2beaf5954007719ca" >0xC25e8598d8....54007719CA</a>
        if you really enjoy your pill and are having a great trip on it you can go crazy and #TipDaDev @ logipunk.eth<br />
        have Fun ....peace....<br /><br />
        this contract will only allow one pill per wallet address<br />
        ~logipunk.eth~
      </p>
    </div>
    <div class="footer" align="center" padding="30px">
      <div class="nav-box"></div>
      <div class="nav-box"></div>
      <div class="nav-box"></div>
      <div class="nav-box">
        <div class="tooltip">
          <button class="button" @mouseover="myFunction" @mouseout="outFunc">
            <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
            Tip Da DeV<br/>logipunk.eth
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import {} from "ethers";
import { ethers } from "ethers";


const GREENPILLED_CONTRACT_ADDRESS = "0xC25e8598d8334e5cff2a5fb2BeAf5954007719CA";//<-PROD Contract addr
//  "0x8202Ce4A98F22bD582f278c58858Af3f96dde7F3"; <- dev constract addy

const GREENPILLED_CONTRACT_ABI = require("./abi.json");

const allowedTokens = require("./tokens.json");

export default {
  name: "App",
  data() {
    return {
      greenPillIMG: "",
      ensName: "",
      moded_walletAddress: "Connect",
      newGreeting: "",
      greeting: "unknown",
      tokens: allowedTokens,
      selectedToken: null,
      selectedTokenAddress: "",
      mainLoading: true,
      provider: null,
      signer: null,
      contract: null,
      pre_provider: null, //used to load data from contract on a page load
      pre_contract: null, //used to load data from contract on a page load
      canSubmit: true,
      // 0 stands for no status, i.e no tx has been sent
      // 1 stands for tx is beeing submitted to the operator
      // 2 stands for tx awaiting commit
      // 3 stands for updating the balance and greeting on the page
      txStatus: 0,
      retreivingFee: false,
      retreivingBalance: false,
      currentBalance: "",
      currentFee: "",
      isWalletConnected: false,
      areYouPilled: false,
      pillNum: null,
      jsonManifest: null,
    };
  },
  methods: {
    myFunction() {
      navigator.clipboard.writeText(
        "0xF95496595890836A358C2d6A3e122354a0A0af5b"
      );

      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Copied: 0xF954....af5b";
      console.log("tooltip 1");
    },

    outFunc() {
      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Copy to clipboard";
      console.log("tooltip 2");
    },
    async preloadPillCount() {
      this.pre_provider = new ethers.providers.JsonRpcProvider(
        "https://mainnet.optimism.io"
      );
      this.pre_contract = new ethers.Contract(
        GREENPILLED_CONTRACT_ADDRESS,
        GREENPILLED_CONTRACT_ABI,
        this.pre_provider
      );

      console.log("przed....");

      this.pillNum = await this.pre_contract.totalMintedPills();

      console.log("czy to jest to ?   ...." + this.pillNum);
    },
    async loadYourPill(address) {
      this.provider = new ethers.providers.Web3Provider(window.ethereum); //block url
      this.signer = this.provider.getSigner();
      this.contract = new ethers.Contract(
        GREENPILLED_CONTRACT_ADDRESS,
        GREENPILLED_CONTRACT_ABI,
        this.signer
      );
      console.log(await this.contract.maxSupply());

      var numOfMintedNFTs = await this.contract.balanceOf(address);

      console.log("ilosc NFTs" + numOfMintedNFTs);
      if (numOfMintedNFTs > 0) {
        try {
          this.areYouPilled = true;

          var tokenIndex = 0;

          const tokenID = await this.contract.tokenOfOwnerByIndex(
            address,
            tokenIndex
          );
          const tokenURI = await this.contract.tokenURI(tokenID);
          const jsonManifestString = atob(tokenURI.substring(29));

          console.log("jsonManifestString", jsonManifestString);

          try {
            const jsonManifest = JSON.parse(jsonManifestString);
            this.jsonManifest = jsonManifest;
            console.log("jsonManifest", jsonManifest);

            this.greenPillIMG = jsonManifest.image;
            console.log("greenPillIMG" + this.greenPillIMG);
          } catch (e) {
            console.log(e);
            console.log("ktores sie wypierdala");
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        this.areYouPilled = false;
      }
    },
    async mintYourPill() {
      var today = new Date();
      console.log(today.toLocaleDateString("en-US"));

      var lookedUpName;
      var dateOfPilled = today.toLocaleDateString("en-US");

      if (this.ensName == null) {
        lookedUpName = this.moded_walletAddress;
      } else {
        lookedUpName = this.ensName;
      }
      console.log(lookedUpName);

      if (window.ethereum) {
        this.txStatus = 1;

        this.provider = new ethers.providers.Web3Provider(window.ethereum); //block url
        this.signer = this.provider.getSigner();
        this.contract = new ethers.Contract(
          GREENPILLED_CONTRACT_ADDRESS,
          GREENPILLED_CONTRACT_ABI,
          this.signer
        );

        try {
          const txHandle = await this.contract.mintItem(
            lookedUpName,
            dateOfPilled
          );
          // TODO: Submit the transaction
          this.txStatus = 2;

          // // Wait until the transaction is committed
          await txHandle.wait();
          // // TODO: Wait for transaction compilation
          this.txStatus = 3;

          this.areYouPilled = true;
          this.loadYourPill(this.signer.address);
          this.preloadPillCount();
        } catch (e) {
          alert(JSON.stringify(e));
        }
      }

      this.txStatus = 0;
    },

    // async getFee() {
    //async Moralis.Web3.onAccountsChanged(function(accounts) {

    //console.log(accounts);
    // your code to run when "accountsChanged" happens

    //});
    // },
    async getBalance() {
      // Getting the balance for the signer in the selected token
      const balanceInUnits = await this.signer.getBalance(
        this.selectedToken.address
      );
      // To display the number of tokens in the human-readable format, we need to format them,
      // e.g. if balanceInUnits returns 500000000000000000 wei of ETH, we want to display 0.5 ETH the user
      return ethers.utils.formatUnits(
        balanceInUnits,
        this.selectedToken.decimals
      );
    },
    async getWalletAddress() {
      //clear ensName and moded_walletAddressl
      this.ensName = "";
      //check for ens if exists return ENS
      const { ethers } = require("ethers");
      const ENSurl = `https://mainnet.infura.io/v3/8e69dce1a5a44c73a8bc0ba5fa03dc30`;
      const ENSprovider = new ethers.providers.JsonRpcProvider(ENSurl);
      this.ensName = await ENSprovider.lookupAddress(this.moded_walletAddress);

      //if does not exists return shorten wallet address
      this.moded_walletAddress =
        this.moded_walletAddress.substring(0, 5) +
        "..." +
        this.moded_walletAddress.substring(
          this.moded_walletAddress.length - 4,
          this.moded_walletAddress.length
        );

      console.log(
        "siemka " + this.moded_walletAddress + " ENS:" + this.ensName
      );
    },

    connectMetamask() {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          if (+window.ethereum.networkVersion == 10) {
            //69 was for Optimism Kovan Testnet

            window.ethereum
              .request({ method: "eth_requestAccounts" })
              .then((accounts) => {
                console.log("accounts", accounts[0]);
                this.moded_walletAddress = accounts[0];
                this.loadYourPill(accounts[0]);
                console.log("accountsII", this.moded_walletAddress);
                this.getWalletAddress();
              });

            this.isWalletConnected = true;
          } else {
            alert(
              "Please switch network to Optimism network. Use this site for all the information https://chainid.link/?network=optimism"
            );
          }
        })
        .catch((e) => console.log(e));
    },
  },
  components: {},
  //this call the function on page load.....
  created: function () {
    this.preloadPillCount();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
@import url("https://fonts.googleapis.com/css?family=VT323");

#app {
  font-family: "Press Start 2P", "VT323";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}

body {
  overflow: visible;
  margin-top: 100px;
  background-image: url("./assets/background/throw_green_pill.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.button {
  display: inline-block;
  border-radius: 35px;
  background-color: #4caf4fcb;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 10px;
  padding: 15px;
  width: 175px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  font-family: inherit;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.nav-box {
  /* border: 1px solid green; */
  margin: 0 15px;
  width: 40%;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.main-box {
  text-align: center;
  width: 520px;
  height: 100vh;

  margin: auto;
  margin-top: 40px;

  /* border: 1px solid green; */
  background: #4caf4f23;
  border-radius: 35px;
}



/* The navigation bar */
.navbar {
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  background: rgba(199, 196, 196, 0.932);
  justify-content: space-evenly;
  display: flex;
}

/* Footer */
.footer {
  overflow: hidden;
  position: fixed; /* Set the footer to fixed position */
  bottom: 0; /* Position the footer at the bottom of the page */
  width: 100%; /* Full width */
  height: 150px;
  /* border: 1px solid green; */
  justify-content: space-evenly;
  display: flex;
}

.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #4caf4fcb;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 45%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: green;
  background-color: transparent;
  text-decoration: none;

}

</style>
