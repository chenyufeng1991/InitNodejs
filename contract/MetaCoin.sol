pragma solidity ^0.4.2;

contract MetaCoin {
	uint public aa;

	function sendCoin(uint _aa) {
		aa = _aa;
	}

	function getCoin()constant returns(uint){
	    return aa;
	}
}
