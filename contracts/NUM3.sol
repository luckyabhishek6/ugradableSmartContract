contract NUM3 {
    uint256 public num;
    function update(uint256 _num) public{
        num=_num;
    }
    function get() public view returns(uint256){
        return num;
    }
    function inc() public{
        num= num+1;
    }
    
    function dsc() public{
        num= num-1;
    }
    
}
