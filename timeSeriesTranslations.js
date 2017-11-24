console.log("timeSeriesTranslations.js file");
/*global  Globalize*/
//= require moment/en-gb
//= require moment/es
//= require moment/de
//= require moment/fr
//= require moment/pt
//= require ./cldr.js

Globalize.loadMessages({
  'en': {
    'NO_DATA': 'No Data',
    'TIME_FORMAT': 'HH:mm',
    'TIME_FORMAT_WITH_ZONE': 'HH:mm z',
    'FULL_DATE_FORMAT': 'MMM D, YYYY',
    'MONTH_DATE_FORMAT': 'MMM D',
    'MONTH_DATE_COMMA_FORMAT': 'MMM D,',
    'YEAR': 'YYYY'
  },
  'en-GB': {
    'NO_DATA': 'No Data',
    'TIME_FORMAT': 'HH:mm',
    'TIME_FORMAT_WITH_ZONE': 'HH:mm z',
    'FULL_DATE_FORMAT': 'D MMM, YYYY',
    'MONTH_DATE_FORMAT': 'D MMM',
    'MONTH_DATE_COMMA_FORMAT': 'D MMM,',
    'YEAR': 'YYYY'
  },
  'fr': {
    'NO_DATA': 'Aucune donnée',
    'TIME_FORMAT': 'HH:mm',
    'TIME_FORMAT_WITH_ZONE': 'HH:mm z',
    'FULL_DATE_FORMAT': 'D MMM YYYY',
    'MONTH_DATE_FORMAT': 'D MMM',
    'MONTH_DATE_COMMA_FORMAT': 'D MMM',
    'YEAR': 'YYYY'
  },
  'es': {
    'NO_DATA': 'Sin datos',
    'TIME_FORMAT': 'HH:mm',
    'TIME_FORMAT_WITH_ZONE': 'HH:mm z',
    'FULL_DATE_FORMAT': 'D MMM YYYY',
    'MONTH_DATE_FORMAT': 'D MMM',
    'MONTH_DATE_COMMA_FORMAT': 'D MMM',
    'YEAR': 'YYYY'
  },
  'de': {
    'NO_DATA': 'Keine Daten',
    'TIME_FORMAT': 'HH:mm',
    'TIME_FORMAT_WITH_ZONE': 'HH:mm',
    'FULL_DATE_FORMAT': 'D. MMM YYYY',
    'MONTH_DATE_FORMAT': 'D. MMM',
    'MONTH_DATE_COMMA_FORMAT': 'D. MMM',
    'YEAR': 'YYYY'
  },
  'pt': {
    'NO_DATA': 'Sem dados',
    'TIME_FORMAT': 'HH:mm',
    'TIME_FORMAT_WITH_ZONE': 'HH:mm z',
    'FULL_DATE_FORMAT': 'MMM D, YYYY',
    'MONTH_DATE_FORMAT': 'MMM D',
    'MONTH_DATE_COMMA_FORMAT': 'MMM D,',
    'YEAR': 'YYYY'
  }
});
