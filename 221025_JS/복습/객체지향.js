const me = {
    name: '민승',
    address : '경기도 시흥시',
    phoneNum : '010-7609-7934',
    canSwim : function(){
        console.log('어푸어푸');
    },
    cheering : function(YJ){
        YJ.cheerUp();
    }
}

const YJ = {
    cheer:1,
    cheerUp: function(){
        this.cheer++;
    }
}

me.cheering(YJ);