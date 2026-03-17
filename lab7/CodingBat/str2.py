# def double_char(arr):
#     result = ""
#     for i in range(len(arr)):
#         result += arr[i] * 2
#     return result

# arr = input()
# print(double_char(arr))


# def count_hi(s):
#     count = 0
#     for i in range(len(s) - 1):
#         if s[i:i+2] == "hi":
#             count += 1
#     return count


# s = input()
# print(count_hi(s))


# def cat_dog(arr):
#     return arr.count("cat") == arr.count("dog")
# arr = input()
# print(cat_dog(arr))


# def count_code(s):
#     count = 0
#     for i in range(len(s) - 3):
#         if s[i:i+2] == "co" and s[i+3] == "e":
#             count += 1
#     return count


# s = input()
# print(count_code(s))


# def end_other(a, b):
#     a = a.lower()
#     b = b.lower()
#     return a.endswith(b) or b.endswith(a)

# a = input()
# b = input()
# print(end_other(a,b))


# def xyz_there(s):
#     i = 0
#     while i < len(s) - 2:
#         if s[i:i+3] == "xyz":
#             if i == 0 or s[i-1] != '.':
#                 return True
#         i += 1
#     return False


# s = input()
# print(xyz_there(s))
