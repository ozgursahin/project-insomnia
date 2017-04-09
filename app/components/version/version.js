'use strict';

angular.module('insomnia.version', [
  'insomnia.version.interpolate-filter',
  'insomnia.version.version-directive'
])

.value('version', '0.1');
