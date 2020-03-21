- When to use insetion Sort
    - only if input is small or sorted
- Bubble sort?
    - Almost never, just for teaching purposes
- Selection sort?
    - as a teaching mechanism only really
- merge sort?
    - Really good due to devide and conquer
    - O(N log N)
    - sort in memory is very expensive
- Quick sort?
    - better than merge sort
    - if you dont pic the pivot properly, it can be O(n^2)

Comparison Sort:
- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

Non-Comparison Sort
- Counting Sort
- Radix Sort

- Can we beat O(N log N)? ... only work with number
    - Counting Sort
    - Radix Sort

Exercise:
//#1 - Sort 10 schools around your house by distance: 
- Insertion Sort
- Space: O(1)

//#2 - eBay sorts listings by the current Bid amount: 
- Radix or Counting Sort

//#3 - Sport scores on ESPN:
- Quick Sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data:
- Merge Sort
- not sorting in memory
- better time complexity

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews:
- Insertion Sort
- works best for pre ordered lists

//#6 - Temperature Records for the past 50 years in Canada:
- Radix or Countin sort
- if numbers have .4433 use quick sort

//#7 - Large user name database needs to be sorted. Data is very random.:
- Merge Sort if we have anough memory
- Quick sort if not worried about worst case

//#8 - You want to teach sorting for the first time:
- Bubble Sort
- Selection Sort

