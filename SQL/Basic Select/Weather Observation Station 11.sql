--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT DISTINCT CITY FROM STATION
WHERE CITY REGEXP '^[^aeiou]|[^aeiou]$';
