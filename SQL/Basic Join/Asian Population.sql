--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT SUM(CITY.POPULATION) 
FROM CITY, COUNTRY
WHERE CITY.COUNTRYCODE = COUNTRY.CODE AND COUNTRY.CONTINENT = 'Asia';
