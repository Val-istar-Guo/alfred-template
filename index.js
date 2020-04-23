// path of template files
exports.path = './template'

// mili version should >= 3.5.0 and < 4.0.0
exports.engines = '>=3.5.0 <4.0.0'

exports.rules = [
  {
    path: 'index.js',
    upgrade: 'keep',
  },
  {
    path: '.huskyrc.yml',
    upgrade: 'merge',
  },
  {
    path: '.gitignore.mustache',
    upgrade: 'merge',
    handlers: ['mustache'],
  },
  {
    path: 'info.plist.mustache',
    upgrade: 'keep',
    handlers: ['mustache'],
  },
  {
    path: 'package.json.mustache',
    upgrade: 'merge',
    handlers: ['mustache'],
  },
  {
    path: 'README.md.mustache',
    handlers: [
      core => core.extractArea('title', '<!-- title -->'),
      core => core.extractArea('description', '<!-- description -->'),
      core => core.extractArea('usage', '<!-- usage -->'),
      core => core.extractArea('addition', '<!-- addition -->'),
      'mustache',
    ],
  },
]
