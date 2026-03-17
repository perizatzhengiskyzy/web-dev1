# def count_event(arr):
#     count = 0
#     for i in range(len(arr)):
#         if arr[i] % 2 == 0:
#             count += 1
#     return count
# arr = list(map(int, input().split()))
# print(count_event(arr))


# def bif_diff(arr):
#     return max(arr) - min(arr)
# arr = list(map(int,input().split()))
# print(bif_diff(arr))


# def centered_average(arr):

#     arr_min = min(arr)
#     arr_max = max(arr)

#     arr.remove(arr_min)
#     arr.remove(arr_max)

#     return sum(arr) // len(arr)
# arr = list(map(int, input().split()))
# print(centered_average(arr))


# def sum13(arr):
#     total = 0
#     skip = False
#     for n in arr:
#         if n == 13:
#             skip = True
#             continue
#         if skip:
#             skip = False
#             continue
#         total += n
#     return total


# def has22(nums):
#     for i in range(len(nums) - 1):
#         if nums[i] == 2 and nums[i+1] == 2:
#             return True
#     return False

# nums = list(map(int, input().split()))
# print(has22(nums))