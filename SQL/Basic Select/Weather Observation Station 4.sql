--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT 
    COUNT(CITY) - COUNT(DISTINCT CITY)
FROM
    STATION;
