var a = {
    b: 'b is echo',
    func: function() {
        console.log(this.b);
        var innerFunc = function () {
            console.log(this);
            console.log(this.b);
        }
        innerFunc();
    }
}
a.func();
