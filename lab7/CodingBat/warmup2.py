# def string_times(str, n):
#     return str * n
# str = input()
# n = int(input())

# print(string_times(str, n))


# def string_bitd(str):
#     result = ""
#     for i in range(len(str)):
#         if i % 2 == 0:
#             result = result + str[i]
#     return result
# str = input()
# print(string_bitd(str))


# def string_splsion(str):
#     result = ""
#     for i in range(len(str)-1):
#         result = result + str[:i+1]
#     return result

# str = input()
# print(string_splsion(str))


# def last2(str):
#    if len(str) < 2:
#     return 0
#    last2 = str[len(str)-2:]
#    count = 0
#    for i in range(len(str)-2):
#     sub = str[i:i+2]
#     if sub == last2:
#       count = count + 1
#       return count

# str = input()
# print(last2(str))


# def array_count9(arr):
#     count = 0
#     for i in range(len(arr)):
#         if arr[i] == 9:
#             count += 1
#             return count
# arr = list(map(int, input().split()))

# print(array_count9(arr))


# def arr_front(arr):
#     for i in range(min(4, len(arr))):
#         if arr[i] == 9:
#             return True
#         return False
# arr = list(map(int, input().split()))
# print(arr_front(arr))


# def array123(arr):
#     for i in range(len(arr)):
#         if arr[i] == 1 and arr[i+1] == 2 and arr[i+2] == 3:
#             return True
#         return False

# arr = list(map(int, input().split()))
# print(array123(arr))


# def string_match(a, b):
#    shorter = min(len(a), len(b))
#    count = 0
#    for i in range(shorter-1):
#     a_sub = a[i:i+2]
#     b_sub = b[i:i+2]
#     if a_sub == b_sub:
#        count = count + 1
#        return count
# a = input()
# b = input()
# print(string_match(a,b))