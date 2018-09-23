--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT
    TRUNCATE(MAX(LAT_N), 4)
FROM
    STATION
WHERE
    LAT_N < 137.2345;
