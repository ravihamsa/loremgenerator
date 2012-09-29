var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    var loremArray = lorem.split(/\s/);

    function getWordList(count, wordCount) {
        var toReturn = []
        var loremLength = loremArray.length
        wordCount = wordCount || 1;
        for (var i = 0; i < count; i++) {
            var s = []
            for (var j = 0; j < wordCount; j++) {
                s.push(loremArray[Math.ceil(Math.random() * loremLength)]);
            }
            toReturn.push(s.join(' '));
        }
        return toReturn;
    }