--     Author: Georgios P
--     Github: https://github.com/papadoc7
-- HackerRank: hackerrank.com/papadoc

SELECT salary * months AS earnings, COUNT(*)
FROM Employee
GROUP BY earnings
ORDER BY earnings DESC
LIMIT 1;
