// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver, 
        uint amount, 
        string memory message, 
        string memory keyword
    ) public payable {
            require(msg.value == amount, "Sent amount must match the specified amount");
        transactionCount += 1;
        transactions.push(TransferStruct(
            msg.sender, 
            receiver, 
            amount, 
            message, 
            block.timestamp, 
            keyword
        ));

        (bool success, ) = receiver.call{value: msg.value}("");
        require(success, "Failed to send Ether to the recipient");

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
}