// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract UserIdentity{
    
    enum Role { Citizen, Government, Security, Vaccination }
    
    struct User{
        string nric; 
        string name;
        Role role;
        bool isRegistered;
    }
    
    mapping(address => User) public users;

    event IdentityRegistered(address userAddress, string name, Role role);

    modifier onlyGovernment() {
        require(users[msg.sender].role == Role.Government, "Restricted to government.");
        _;
    }
    
    function registerIdentity(address _userAddress, string memory _nric, string memory _name, Role _role) public onlyGovernment {
        require(!users[_userAddress].isRegistered, "Identity already registered.");
        users[_userAddress] = User({
            nric: _nric,
            name: _name,
            role: _role,
            isRegistered: true
        });
        emit IdentityRegistered(_userAddress, _name, _role);
    }

    function getIdentity(address _userAddress) public view returns (User memory) {
        require(users[_userAddress].isRegistered, "Identity not registered.");
        return users[_userAddress];
    }


}