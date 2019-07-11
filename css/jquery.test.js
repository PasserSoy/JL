;(function($,window,document,undefined){
	var test = function(ele,opt){
		this.ele = ele,
		this.defaults = {
			'color':'red'
		},
		this.opt = $.extend({},this.defaults,opt)
	};
	test.prototype = {
		tests:function(){
			return this.ele.css({
				'color':this.opt.color
			})
		}
	};
	$.fn.mytest = function(opt){
		var testx = new test(this,opt);
		return testx.tests();
	}
})(jQuery,window,document);











