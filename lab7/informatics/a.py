"""
A

import math
a = 3
b = 4
c = math.sqrt(pow(a, 2) + pow(b, 2))
print(c)

"""

"""
B
a = int(input())

print("The next number for the number " ,a,"is", a+1, sep=" ")
print("The previous  number for the number " ,a,"is", a-1, sep=" ")

"""

"""
C
import math
a = 3
b = 14
print(math.floor(b/a))

"""

"""
D
a = 3
b = 14
print(b%a)

"""
"""
E
a = int(input())
b = int(input())

print((a * b) % 109) 

"""

"""
A
a = int(input())
b = int(input())

print(max(a,b))

"""

"""
B
n = int(input())

if(n % 4 == 0 and n % 100 != 0) or (n % 400 == 0):
    print("YES")
else:
    print("NO")

"""

"""
C
m = int(input())
n = int(input())

if(n == 1 and m == 1) or (n != 1 and m != 1):
    print("YES")
else:
    print("NO")

"""

"""
D
a = int(input())

if(a > 0):
    print(1)
elif(a < 0):
    print(-1)
else:
    print(0)

"""

"""
E
a = int(input())
b = int(input())

print(max(a,b))

"""

"""
A
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

"""


"""
B

a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b+1):
    if i % d == c:
        print(i, end=" ")

"""
"""
C
import math

a = int(input())
b = int(input())

for i in range(a, b + 1):
    if math.isqrt(i) ** 2 == i:
        print(i, end=" ")

"""




"""
G

a = int(input())

for i in range(2, a):
    if(a % i == 0 and i % 2 == 0):
        print(i)


"""

# H
# a = int(input())

# for i in range(1, a+1):
#     if(a % i == 0):
#         print(i)

# I
# a = int(input())

# count = 0
# for i in range(1, a+1):
#     if(a % i == 0):
#         count += 1
# print(count)


# J
# a = int(input())
# count = 0
# for i in range(1, a+1):
#     count += i
#     print(count)


# K
# a = int(input())

# count = 0
# for i in range(a):
#     num = int(input())
#     count += num
# print(count)


# M
#  a = int(input())

# count = 0
# for i in range(a):
#     num = int(input())

#     if num == 0:
#         count += 1
# print(count)

# A
# a = int(input())

# i = 1
# while i * i <= a:
#     print(i * i)
#     i += 1

# B
#  a = int(input())

# i = 2

# while i <= a:
#     if a % i == 0:
#         print(i)
#         break
#     i += 1


# C
# a = int(input())

# i = 1
# while pow(2, i) <= a:
#     print(pow(2, i))
#     i += 1

# D
# a = int(input())

# i = 1
# b = False
# while i <= a:
#     if(pow(2, i) % a == 0):
#         b = True
#     i += 1

# if b == True:
#     print("YES")
# else:
#     print("NO")



# E
#  a = int(input())

# k = 0
# value = 1
# while value < a:
#     value *= 2
#     k += 1
# print(k)


# A
# a = int(input())

# arr = list(map(int, input().split()))

# for i in range(0, a, 2):
#     print(arr[i], end = ' ')



# B
# a = int(input())
# arr = list(map(int, input().split()))


# for i in range(a+1):
#     if arr[i] % 2 == 0:
#         print(arr[i], end=' ')


# C
# a = int(input())

# arr = list(map(int, input().split()))
# for i in range(a):
#     if arr[i] > 0:
#         print(arr[i], end=' ')


# D
# a = int(input())
# arr = list(map(int, input().split()))

# count = 0
# for i in range(a):
#     if(arr[i] > arr[i-1]):
#         count += 1
# print(count)


# E
# a = int(input())
# arr = list(map(int, input().split()))
# found = False
# for i in range(1, a):
#     if arr[i] * arr[i-1] > 0:
#         found = True
#         break

# if found:
#     print("YES")
# else:
#     print("NO")



# F
# a = int(input())
# arr = list(map(int, input().split()))
# count = 0
# for i in range(1, a-1):
#     if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
#         count += 1
# print(count)



# G
# n = int(input())
# arr = list(map(int, input().split()))
# print(*arr[::-1])


# A
# def find_min(a,b,c,d):
#     return(min(a,b,c,d))
# if __name__ == "__main__":
#     a,b,c,d = map(int,input().split())
#     print(find_min(a,b,c,d))

# B
# def square_num(a,b):
#     return(pow(a,b))

# if __name__ == "__main__":
#     a,b = map(int, input().split())
#     print(square_num(a,b))

# C
# def xor(x,y):
#     return(x and not y) or (not x and y)

# if __name__ == "__main__":
#     x,y = map(int, input().split())
#     print(int(xor(x,y)))