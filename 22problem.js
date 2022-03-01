var someObject = {
    myProperty : 'Foo',
    myMethod : function(prefix, postfix) {
    alert(prefix + this.myProperty + postfix);
    }
    };
    someObject.myMethod('<', '>');
    var someOtherObject = {
    myProperty : 'Bar'
    };

someObject.myMethod.call(someOtherObject, '<', '>');
someObject.myMethod.apply(someOtherObject, ['<', '>']);

/*
Both .call() and .apply() functions are almost identical in their use, with a major exception in how arguments are passed to the function.

Because arguments are to be passed in the .call() method, it is compulsory to know about the function's arguments. On the other hand, the .apply() method is used when the number of arguments is unknown. The following example demonstrates using the two functions:
*/