window.expect = chai.expect;
window.assert = chai.assert;
window.should = chai.should();

mocha.setup({
	ui: 'bdd'
});


describe('Subject', function(){
	describe('constructor', function(){

			var subject = new Subject();
			var observer1 = new Observer('observer1');
			var observer2 = new Observer('observer2');
			var observer3 = {};

		it('should exist', function(){
			expect(Subject).to.be.a('function');
			expect(subject).to.be.a('object');
		});

		it('should be able to add a subscriber', function(){

			subject.addSubscriber(observer1, observer1.doMe);
			expect(subject.subscribers.length).to.equal(1);
			//expect first item in subscribers to be observer1
			subject.addSubscriber(observer2, observer2.doYou);
			//expect second item in subscribers to be observer2
			//expect length to be 2
		});

		it('should be able to notify a subscriber', function(){
			subject.notify(subject.now);
			//want to make sure observer1 executed method doYou with subject.now
			//want to make sure observer2 executed method doMe with subject.now

		});

		it('should be able to notify a subscriber with a custom message', function(){
			var message = "or pass whatever message we want";
			subject.notify(message);
			//want to make sure observer1 executed method doYou with message message
			//want to make sure observer2 executed method doMe with message message
		});

		it('should be able to remove a subscriber', function(){
				expect(subject.removeSubscriber(observer2)).to.equal(true);
		});

		it('should return false if no subscriber is found', function(){
			expect(subject.removeSubscriber(observer2)).to.equal(false);
		});


	});

});

mocha.run();

//checking undefined, like 80% of my tests i think
//expect(scope.play(10)).to.be.undefined;
//expect(scope.play(10)).to.not.be.undefined;