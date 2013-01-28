var grunt = require('grunt');

exports.handlebars = {
  compile: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/handlebars.js');
    var expected = grunt.file.read('test/expected/handlebars.js');
    test.equal(actual, expected, 'should compile partials into Handlebars.partials and handlebars template into JST');

    test.done();
  },
  wrapcompile: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/handlebarswrap.js');
    var expected = grunt.file.read('test/expected/handlebarswrap.js');
    test.equal(actual, expected, 'should compile partials into Handlebars.partials and handlebars template into JST');

    test.done();
  },
  uglyfile: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/uglyfile.js');
    var expected = grunt.file.read('test/expected/uglyfile.js');
    test.equal(actual, expected, 'should escape single quotes in filenames');

    test.done();
  },
  ns_nested: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/ns_nested.js');
    var expected = grunt.file.read('test/expected/ns_nested.js');
    test.equal(actual, expected, 'should define parts of nested namespaces');

    test.done();
  },
  ns_nested_this: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/ns_nested_this.js');
    var expected = grunt.file.read('test/expected/ns_nested.js'); // same as previous test
    test.equal(actual, expected, 'should define parts of nested namespaces, ignoring this.');

    test.done();
  },
  no_namespace:function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/no_namespace.js');
    var expected = grunt.file.read('test/expected/no_namespace.js');
    test.equal(actual, expected, 'should skip the creation of a namespace array arround the generated template file');

    test.done();
  },
  processcontent: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/processcontent.js');
    var expected = grunt.file.read('test/expected/processcontent.js');
    test.equal(actual, expected, 'should remove leading and trailing spaces');

    test.done();
  },
};
