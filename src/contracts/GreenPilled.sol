//SPDX-License-Identifier: MIT

//green pilled ..... this project was inspired by the https://GreenPill.Party/ book of regenerative cryptoeconomics 
//idea for this project is for the users to get green pilled.... and have a record to show for it 
//green pill is just an SVG image that will store pilled number, date of pilled (D>O>P>)
//only cost assosiated with this project is a minting cost , as of this writing idea is to get this set up on L2
//if you really enjoy your pill and are having a great trip on it you can go crazy and #TipDaDev @ logipunk.eth
//have Fun ....peace....

//this contract will only allow one pill per wallet address

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "base64-sol/base64.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import './HexStrings.sol';

contract GreenPilled is ERC721Enumerable,  Ownable {
    uint256 public maxSupply;
    uint256 public totalMintedPills; // this will equal to token counter
    bool public isPublicMintEnabled; 
    uint256 public maxPerWallet;
    using HexStrings for uint160;
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string  lookedUpOwner; //will store shorter wallet address or ENS name used for SVG
    string  mintDate; //gets external date of a mint 

    constructor() payable ERC721("GreenPilled", "GRNPILD") {
        maxSupply = 420420420;
        isPublicMintEnabled = true;
        maxPerWallet = 1;
    }

    //used to control minting
    function setIsPublicMintEnabled(bool isPublicMintEnabled_)
        external
        onlyOwner
    {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    

    //PilledUsers count returns count
    //mint item
    //function that check if address has already minted pill, if yes do not allow minting of the token
    //isUserPilled  return bool
    function mintItem(string memory _lookedUpOwner, string memory _mintDate) public returns (uint256) {
        require(isPublicMintEnabled, "minting not enabled"); //making sure the public minting is enabled
        require(balanceOf(msg.sender) < maxPerWallet, "exceed max pills"); //this checks if user has already been pilled
        require(_tokenIds.current() < maxSupply,"mint limit reached");//checks if mint limit has been reached

        _tokenIds.increment();
        uint256 id = _tokenIds.current();

        totalMintedPills = id;

        _mint(msg.sender, id);

        setLookedUpOwner(_lookedUpOwner, id);

        setStringDate( _mintDate);

        return id;
    }

    //token uri , meta goodies
    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), "not exist");
        string memory name = string(
            abi.encodePacked("I took the #GreenPill #", id.toString())
        );
        string memory description = string(
            abi.encodePacked(
                "If you join me we can build a #SolarPunk future together. Make the pledge here: https://GreenPill.Party/"
            )
        );
        string memory image = Base64.encode(bytes(generateSVGofTokenById(id)));

        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                name,
                                '", "description":"',
                                description,
                                '", "external_url":"https://greenpilled.lol/',
                                id.toString(),
                                '", "attributes": [{"trait_type": "pilled_date", "value": "#',
                                mintDate,
                                '"},{"trait_type": "tip_da_dev", "value": "logipunk.eth"}], "owner":"',
                                lookedUpOwner,
                                '", "image": "',
                                "data:image/svg+xml;base64,",
                                image,
                                '"}'
                            )
                        )
                    )
                )
            );
    }

    //generateSVGofTokenById
    function generateSVGofTokenById(uint256 id)
        internal
        view
        returns (string memory)
    {
        string memory svg = string(
            abi.encodePacked(
                '<svg width="216" height="138" viewBox="0 0 216 138" fill="none" xmlns="http://www.w3.org/2000/svg">',
                renderTokenById(id),
                "</svg>"
            )
        );

        return svg;
    }

    //renderTokenById
    // Visibility is `public` to enable it being called by other contracts for composition.
    function renderTokenById(uint256 id) public view returns (string memory) {
        string memory render = string(abi.encodePacked(
            '<path d="M189.322 53.9479C194.864 56.272 199.78 59.6027 203.793 63.7504C207.807 67.8982 210.835 72.7811 212.709 78.1186C214.582 83.4569 215.264 89.1466 214.712 94.8624C214.161 100.578 212.389 106.207 209.498 111.428C206.612 116.65 202.664 121.364 197.879 125.298C193.093 129.234 187.564 132.312 181.607 134.361C175.65 136.409 169.382 137.386 163.162 137.236C156.941 137.085 150.89 135.811 145.352 133.484L86.3183 108.701L130.273 29.1949L189.322 53.9479Z" fill="#02E2AC" stroke="#0E0333" stroke-miterlimit="10" stroke-linejoin="round"/>',
            '<path d="M85.7155 108.813L26.6607 84.0315C15.4791 79.3398 7.07095 70.6525 3.28252 59.8819C-0.504779 49.1105 0.638409 37.135 6.46079 26.5882C12.2973 16.0426 22.3355 7.79352 34.37 3.65671C46.4038 -0.481105 59.4476 -0.168151 70.6317 4.52481L129.687 29.3058L85.7155 108.813Z" fill="#B3FFED" stroke="#0E0333" stroke-miterlimit="10" stroke-linejoin="round"/>',
            '<path d="M205.225 117.952C208.61 108.018 208.122 97.5169 203.851 88.2968C199.579 79.0784 191.796 71.7332 181.873 67.5532L122.869 42.7241L130.366 29.1353L189.37 53.9644C194.902 56.2955 199.813 59.6326 203.821 63.7821C207.83 67.9327 210.858 72.816 212.731 78.1526C214.606 83.4894 215.289 89.1765 214.742 94.887C214.197 100.598 212.432 106.223 209.55 111.437C208.304 113.706 206.856 115.885 205.225 117.952Z" fill="#11BC92" stroke="#0E0333" stroke-miterlimit="10" stroke-linejoin="round"/>',
            '<path d="M122.584 43.4079L63.3825 18.2269C53.4252 13.9928 41.9774 13.2057 31.0577 16.0037C20.1368 18.8025 10.4447 25.0075 3.68972 33.5249C4.49742 31.0972 5.53062 28.7263 6.7763 26.4422C12.5532 15.8792 22.5467 7.64555 34.5585 3.54971C46.5702 -0.546118 59.6172 -0.167024 70.8309 4.60196L130.032 29.7829L122.584 43.4079Z" fill="#11BC92" stroke="#0E0333" stroke-miterlimit="10" stroke-linejoin="round"/>',
                '<defs>',
                    '<style data-bx-fonts="VT323">@import url(https://fonts.googleapis.com/css2?family=VT323%3Aital%2Cwght%400%2C400&amp;display=swap)</style>',
                '</defs>',
            '<text style="fill: rgb(51, 51, 51); font-family: VT323; font-size: 15px; font-weight: 700; white-space: pre;" x="6" y="55">Pill#',
             concatenate(id.toString()),//123456789012
             '</text>',
            '<text style="fill: rgb(51, 51, 51); font-family: VT323; font-size: 12px; font-weight: 700; white-space: pre;" x="15" y="70">D>O>P> ',
            mintDate,
            '</text>',
            '<text style="fill: rgb(51, 51, 51); font-family: VT323; font-size: 12px; font-weight: 700; white-space: pre;" x="105" y="100">',
            lookedUpOwner, //0xF9549....af5b'
            '</text> '       

        ));

        return render;
    }

    //concatenate and substring functions are used to derive a leading zero id's ex. 000000123456
    function concatenate( string memory token_ID) internal pure
          returns (string memory) {
        string memory default_id = "0000000000";
        uint tokenID_lenght = 10; 
        uint inputID_Lenght = bytes(token_ID).length;
        

        return string(abi.encodePacked(substring(default_id,inputID_Lenght,tokenID_lenght), token_ID));
    }

    function substring(string memory str, uint startIndex, uint endIndex)internal pure
           returns (string memory ) {
            bytes memory strBytes = bytes(str);
            bytes memory result = new bytes(endIndex-startIndex);
            for(uint i = startIndex; i < endIndex; i++) {
                result[i-startIndex] = strBytes[i];
            }
            return string(result);
    }

    //this function is used to load an NFT owner info into an image. Owner info should be fed from a front end, in case someone 
    // mints a token from the etherscan , partial owner id will be implemented as well 
    function setLookedUpOwner( string memory _lookedUpOwner,uint256 id) internal  returns (string memory) 
    {
             bytes memory tempEmptyOwnerTest = bytes(_lookedUpOwner); // Uses memory
                if (tempEmptyOwnerTest.length == 0) {
                    // emptyStringTest is an empty string
                    lookedUpOwner = (uint160(ownerOf(id))).toHexString(20);
                } else {
                    // emptyStringTest is not an empty string
                    lookedUpOwner = _lookedUpOwner;
                }
             
             return lookedUpOwner;

    }


    //sets a date from the front end to determine when was the token minted , this will be called by the mint function 
    function setStringDate(string memory _mintDate) internal
    {
        mintDate = _mintDate;
    }


    
}
