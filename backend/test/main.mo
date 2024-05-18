import Principal "mo:base/Principal";

actor Test {    
    public query ({ caller }) func whoAmI() : async Principal {
        return caller;
    };
};
