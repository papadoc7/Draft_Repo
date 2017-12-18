console.log('cldr.js file');
/*global  Globalize*/

Globalize.load({
  'main': {
    'en': {
      'numbers': {
        'defaultNumberingSystem': 'latn',
        'symbols-numberSystem-latn': {
          'decimal': '.',
          'group': ',',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '×',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        },
        'decimalFormats-numberSystem-latn': {
          'standard': '#,##0.###',
        },
      }
    },
    'en-GB': {
      'numbers': {
        'defaultNumberingSystem': 'latn',
        'symbols-numberSystem-latn': {
          'decimal': '.',
          'group': ',',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '×',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        },
        'decimalFormats-numberSystem-latn': {
          'standard': '#,##0.###',
        },
      }
    },
    'pt': {
      'numbers': {
        'defaultNumberingSystem': 'latn',
        'symbols-numberSystem-latn': {
          'decimal': ',',
          'group': '.',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '×',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        },
        'decimalFormats-numberSystem-latn': {
          'standard': '#,##0.###',
        },
      }
    },
    'fr': {
      'numbers': {
        'defaultNumberingSystem': 'latn',
        'symbols-numberSystem-latn': {
          'decimal': ',',
          'group': ' ',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '×',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        },
        'decimalFormats-numberSystem-latn': {
          'standard': '#,##0.###',
        },
      }
    },
    'es': {
      'numbers': {
        'defaultNumberingSystem': 'latn',
        'minimumGroupingDigits': '2',
        'symbols-numberSystem-latn': {
          'decimal': ',',
          'group': '.',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '×',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        },
        'decimalFormats-numberSystem-latn': {
          'standard': '#,##0.###',
        },
      }
    },
    'de': {
      'numbers': {
        'defaultNumberingSystem': 'latn',
        'symbols-numberSystem-latn': {
          'decimal': ',',
          'group': '.',
          'list': ';',
          'percentSign': '%',
          'plusSign': '+',
          'minusSign': '-',
          'exponential': 'E',
          'superscriptingExponent': '·',
          'perMille': '‰',
          'infinity': '∞',
          'nan': 'NaN',
          'timeSeparator': ':'
        },
        'decimalFormats-numberSystem-latn': {
          'standard': '#,##0.###',
        },
      }
    }
  }
});
