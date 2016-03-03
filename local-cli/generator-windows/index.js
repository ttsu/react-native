'use strict';

var chalk = require('chalk');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend({
  writing: function() {

  },
  end: function () {
    var projectPath = path.resolve(this.destinationRoot(), 'windows', this.name);
    this.log(chalk.white.bold('To run your app on Windows Universal Platform:'));
    this.log(chalk.white('   cd ' + this.destinationRoot()));
    this.log(chalk.white('   react-native run-windows'));
    this.log(chalk.white('   - or -'));
    this.log(chalk.white('   Open ' + projectPath + '.sln in Visual Studio'));
    this.log(chalk.white('   Hit the Run button'));  
  }
});
