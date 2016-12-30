xdescribe('SPEC 3', function() {

    it('3 should add a todo', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write a protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.count()).toEqual(6); //Failure
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });

    it('3 second it', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write a protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.count()).toEqual(3);
        expect(todoList.count()).toEqual(3);
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });

});