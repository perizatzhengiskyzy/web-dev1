# 1
# def swap_case(a):
#     return a.swapcase()

# if __name__ == "__main__":
#     a = input()
#     print(swap_case(a))

# 2
# def split_and_join(line):
#     return "-".join(line)
# if __name__ == "__main__":
#     line = input().split()
#     print(split_and_join(line))

# 3
# def print_full_name(first, last):
#     return f"Hello {first} {last}! You just delved into python."

# if __name__ == "__main__":
#     first, last = input().split()
#     print(print_full_name(first,last))


# 4
# import textwrap
# def wrap(string, max_width):

#     return "\n".join(textwrap.wrap(string, max_width))

# if __name__ == "__main__":
#     string = input()
#     max_width = int(input())
#     print(wrap(string, max_width))


# 5
# def average(array):
#     unique_num = set(array)
#     return sum(unique_num) / len(unique_num)


# if __name__ == "__main__":
#     n = int(input())
#     array = list(map(int, input().split()))
#     print(average(array))

# 6
# a = int(input())
# arr = list(map(int, input().split()))

# b = int(input())
# brr = list(map(int, input().split()))

# crr = []
# for i in arr:
#     if i not in brr and i not in crr:
#         crr.append(i)
# print(*crr)


# 7
# a = int(input())
# arr = set(map(int, input().split()))

# m = int(input())

# for i in range(m):
#     command = input().split()

#     if command[0] == "pop":
#         arr.pop()
#     elif command == "remove":
#         arr.remove(int(command[1]))
#     elif command == "discard":
#         arr.discard(int(command[1]))
# print(arr)

# 8
# a = int(input())
# arr = set(map(int, input().split()))

# b = int(input())
# brr = set(map(int, input().split()))


# result = arr.symmetric_difference(brr)
# print(len(result))

# 9
# a = int(input())
# b = int(input())
# c = int(input())
# print(pow(a,b))
# print(pow(a,b,c))