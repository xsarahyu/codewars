# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Additionally, if the number is negative, return 0.

# Note: If the number is a multiple of both 3 and 5, only count it once.

# Solution 1
def solution(num):
  multiples = []
  for i in range(1, num):
    if i % 3 == 0 or i % 5 == 0: 
      multiples.append(i)
  return sum(multiples)

# Solution 2
def solution(num):
  sum = 0
  for i in range(1, num):
    if i % 3 == 0 or i % 5 == 0:
      sum += i
  return sum