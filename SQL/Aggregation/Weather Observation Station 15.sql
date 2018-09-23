--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT ROUND(LONG_W, 4)
FROM STATION
WHERE LAT_N < 137.2345
ORDER BY LAT_N DESC
LIMIT 1;
