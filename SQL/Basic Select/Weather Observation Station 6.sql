--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT DISTINCT CITY FROM STATION
WHERE CITY REGEXP '^[aeiou]';

--  Pattern   | What the pattern matches
---------------------------------------
--    ^       |  Beginning of string
--  [...]     |  Any character listed between the square brackets

-- Useful Reference: https://www.tutorialspoint.com/mysql/mysql-regexps.htm
