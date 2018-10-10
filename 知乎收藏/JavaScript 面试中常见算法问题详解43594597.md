# JavaScript 面试中常见算法问题详解

**阐述下 JavaScript 中的变量提升**

所谓提升，顾名思义即是 JavaScript 会将所有的声明提升到当前作用域的顶部。这也就意味着我们可以在某个变量声明前就使用该变量，不过虽然 JavaScript 会将声明提升到顶部，但是并不会执行真的初始化过程。

**阐述下 use strict; 的作用**

use strict; 顾名思义也就是 JavaScript 会在所谓严格模式下执行，其一个主要的优势在于能够强制开发者避免使用未声明的变量。对于老版本的浏览器或者执行引擎则会自动忽略该指令。

> _// Example of strict mode_  
> "use strict";  
>   
> catchThemAll();  
> **function** catchThemAll() {  
> x = 3.14; _// Error will be thrown_  
> **return** x * x;  
> }

**解释下什么是 Event Bubbling 以及如何避免**

Event Bubbling 即指某个事件不仅会触发当前元素，还会以嵌套顺序传递到父元素中。直观而言就是对于某个子元素的点击事件同样会被父元素的点击事件处理器捕获。避免 Event Bubbling 的方式可以使用event.stopPropagation() 或者 IE 9 以下使用event.cancelBubble。

**== 与 === 的区别是什么**

=== 也就是所谓的严格比较，关键的区别在于=== 会同时比较类型与值，而不是仅比较值。

> _// Example of comparators_  
> 0 == **false**; _// true_  
> 0 === **false**; _// false_  
>   
> 2 == '2'; _// true_  
> 2 === '2'; _// false_

**解释下 null 与 undefined 的区别**

JavaScript 中，null 是一个可以被分配的值，设置为 null 的变量意味着其无值。而 undefined 则代表着某个变量虽然声明了但是尚未进行过任何赋值。

**解释下 Prototypal Inheritance 与 Classical Inheritance 的区别**

在类继承中，类是不可变的，不同的语言中对于多继承的支持也不一样，有些语言中还支持接口、final、abstract 的概念。而原型继承则更为灵活，原型本身是可以可变的，并且对象可能继承自多个原型。

**数组**

**找出整型数组中乘积最大的三个数**

给定一个包含整数的无序数组，要求找出乘积最大的三个数。

> **var** unsorted_array = [-10, 7, 29, 30, 5, -10, -70];  
>   
> computeProduct(unsorted_array); _// 21000_  
>   
> **function** sortIntegers(a, b) {  
> **return** a - b;  
> }  
>   
> _// greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)_  
> **function** computeProduct(unsorted) {  
> **var** sorted_array = unsorted.sort(sortIntegers),  
> product1 = 1,  
> product2 = 1,  
> array_n_element = sorted_array.length - 1;  
>   
> _// Get the product of three largest integers in sorted array_  
> **for** (**var** x = array_n_element; x > array_n_element - 3; x--) {  
> product1 = product1 * sorted_array[x];  
> }  
> product2 = sorted_array[0] * sorted_array[1] * sorted_array[array_n_element];  
>   
> **if** (product1 > product2) **return** product1;  
>   
> **return** product2  
> };

**寻找连续数组中的缺失数**

给定某无序数组，其包含了 n 个连续数字中的 n – 1 个，已知上下边界，要求以O(n)的复杂度找出缺失的数字。

> _// The output of the function should be 8_  
> **var** array_of_integers = [2, 5, 1, 4, 9, 6, 3, 7];  
> **var** upper_bound = 9;  
> **var** lower_bound = 1;  
>   
> findMissingNumber(array_of_integers, upper_bound, lower_bound); _//8_  
>   
> **function** findMissingNumber(array_of_integers, upper_bound, lower_bound) {  
>   
> _// Iterate through array to find the sum of the numbers_  
> **var** sum_of_integers = 0;  
> **for** (**var** i = 0; i < array_of_integers.length; i++) {  
> sum_of_integers += array_of_integers[i];  
> }  
>   
> _// 以高斯求和公式计算理论上的数组和_  
> _// Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];_  
> _// N is the upper bound and M is the lower bound_  
>   
> upper_limit_sum = (upper_bound * (upper_bound + 1)) / 2;  
> lower_limit_sum = (lower_bound * (lower_bound - 1)) / 2;  
>   
> theoretical_sum = upper_limit_sum - lower_limit_sum;  
>   
> _//_  
> **return** (theoretical_sum - sum_of_integers)  
> }

**数组去重**

给定某无序数组，要求去除数组中的重复数字并且返回新的无重复数组。

> _// ES6 Implementation_  
> **var** **array** = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];  
>   
> **Array**.from(**new** Set(**array**)); _// [1, 2, 3, 5, 9, 8]_  
>   
>   
> _// ES5 Implementation_  
> **var** **array** = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];  
>   
> uniqueArray(**array**); _// [1, 2, 3, 5, 9, 8]_  
>   
> **function** uniqueArray(**array**) {  
> **var** hashmap = {};  
> **var** unique = [];  
> **for**(**var** i = 0; i < **array**.length; i++) {  
> _// If key returns null (unique), it is evaluated as false._  
> **if**(!hashmap.hasOwnProperty([**array**[i]])) {  
> hashmap[**array**[i]] = 1;  
> unique.push(**array**[i]);  
> }  
> }  
> **return** unique;  
> }

**数组中元素最大差值计算**

给定某无序数组，求取任意两个元素之间的最大差值，注意，这里要求差值计算中较小的元素下标必须小于较大元素的下标。譬如[7, 8, 4, 9, 9, 15, 3, 1, 10]这个数组的计算值是 11( 15 – 4 ) 而不是 14(15 – 1)，因为 15 的下标小于 1。

> **var** **array** = [7, 8, 4, 9, 9, 15, 3, 1, 10];  
> _// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`_  
> _// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1._  
>   
> findLargestDifference(**array**);  
>   
> **function** findLargestDifference(**array**) {  
>   
> _// 如果数组仅有一个元素，则直接返回 -1_  
>   
> **if** (**array**.length <= 1) **return** -1;  
>   
> _// current_min 指向当前的最小值_  
>   
> **var** current_min = **array**[0];  
> **var** current_max_difference = 0;  
>   
> _// 遍历整个数组以求取当前最大差值，如果发现某个最大差值，则将新的值覆盖 current_max_difference_  
> _// 同时也会追踪当前数组中的最小值，从而保证 `largest value in future` - `smallest value before it`_  
>   
> **for** (**var** i = 1; i < **array**.length; i++) {  
> **if** (**array**[i] > current_min && (**array**[i] - current_min > current_max_difference)) {  
> current_max_difference = **array**[i] - current_min;  
> } **else** **if** (**array**[i] <= current_min) {  
> current_min = **array**[i];  
> }  
> }  
>   
> _// If negative or 0, there is no largest difference_  
> **if** (current_max_difference <= 0) **return** -1;  
>   
> **return** current_max_difference;  
> }

**数组中元素乘积**

给定某无序数组，要求返回新数组 output ，其中 output[i] 为原数组中除了下标为 i 的元素之外的元素乘积，要求以 O(n) 复杂度实现：

> **var** firstArray = [2, 2, 4, 1];  
> **var** secondArray = [0, 0, 0, 2];  
> **var** thirdArray = [-2, -2, -3, 2];  
>   
> productExceptSelf(firstArray); _// [8, 8, 4, 16]_  
> productExceptSelf(secondArray); _// [0, 0, 0, 0]_  
> productExceptSelf(thirdArray); _// [12, 12, 8, -12]_  
>   
> **function** productExceptSelf(numArray) {  
> **var** product = 1;  
> **var** size = numArray.length;  
> **var** output = [];  
>   
> _// From first array: [1, 2, 4, 16]_  
> _// The last number in this case is already in the right spot (allows for us)_  
> _// to just multiply by 1 in the next step._  
> _// This step essentially gets the product to the left of the index at index + 1_  
> **for** (**var** x = 0; x < size; x++) {  
> output.push(product);  
> product = product * numArray[x];  
> }  
>   
> _// From the back, we multiply the current output element (which represents the product_  
> _// on the left of the index, and multiplies it by the product on the right of the element)_  
> **var** product = 1;  
> **for** (**var** i = size - 1; i > -1; i--) {  
> output[i] = output[i] * product;  
> product = product * numArray[i];  
> }  
>   
> **return** output;  
> }

**数组交集**

给定两个数组，要求求出两个数组的交集，注意，交集中的元素应该是唯一的。

> **var** firstArray = [2, 2, 4, 1];  
> **var** secondArray = [1, 2, 0, 2];  
>   
> intersection(firstArray, secondArray); _// [2, 1]_  
>   
> **function** intersection(firstArray, secondArray) {  
> _// The logic here is to create a hashmap with the elements of the firstArray as the keys._  
> _// After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash_  
> _// If it does exist, add that element to the new array._  
>   
> **var** hashmap = {};  
> **var** intersectionArray = [];  
>   
> firstArray.**forEach**(**function**(element) {  
> hashmap[element] = 1;  
> });  
>   
> _// Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added_  
> secondArray.**forEach**(**function**(element) {  
> **if** (hashmap[element] === 1) {  
> intersectionArray.push(element);  
> hashmap[element]++;  
> }  
> });  
>   
> **return** intersectionArray;  
>   
> _// Time complexity O(n), Space complexity O(n)_  
> }

**字符串**

**颠倒字符串**

给定某个字符串，要求将其中单词倒转之后然后输出，譬如”Welcome to this Javascript Guide!” 应该输出为 “emocleW ot siht tpircsavaJ !ediuG”。

> **var** **string** = "Welcome to this Javascript Guide!";  
>   
> _// Output becomes !ediuG tpircsavaJ siht ot emocleW_  
> **var** reverseEntireSentence = reverseBySeparator(**string**, "");  
>   
> _// Output becomes emocleW ot siht tpircsavaJ !ediuG_  
> **var** reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");  
>   
> **function** reverseBySeparator(**string**, separator) {  
> **return** **string**.split(separator).reverse().join(separator);  
> }

**乱序同字母字符串**

给定两个字符串，判断是否颠倒字母而成的字符串，譬如Mary与Army就是同字母而顺序颠倒：

> **var** firstWord = "Mary";  
> **var** secondWord = "Army";  
>   
> isAnagram(firstWord, secondWord); _// true_  
>   
> **function** isAnagram(first, second) {  
> _// For case insensitivity, change both words to lowercase._  
> **var** a = first.toLowerCase();  
> **var** b = second.toLowerCase();  
>   
> _// Sort the strings, and join the resulting array to a string. Compare the results_  
> a = a.split("").sort().join("");  
> b = b.split("").sort().join("");  
>   
> **return** a === b;  
> }

**会问字符串**

判断某个字符串是否为回文字符串，譬如racecar与race car都是回文字符串：

> isPalindrome("racecar"); _// true_  
> isPalindrome("race Car"); _// true_  
>   
> **function** isPalindrome(**word**) {  
> _// Replace all non-letter chars with "" and change to lowercase_  
> **var** lettersOnly = **word**.toLowerCase().replace(_/\s/g_, "");  
>   
> _// Compare the string with the reversed version of the string_  
> **return** lettersOnly === lettersOnly.split("").reverse().join("");  
> }

**栈与队列**

**使用两个栈实现入队与出队**

> **var** inputStack = []; _// First stack_  
> **var** outputStack = []; _// Second stack_  
>   
> _// For enqueue, just push the item into the first stack_  
> **function** enqueue(stackInput, item) {  
> **return** stackInput.push(item);  
> }  
>   
> **function** dequeue(stackInput, stackOutput) {  
> _// Reverse the stack such that the first element of the output stack is the_  
> _// last element of the input stack. After that, pop the top of the output to_  
> _// get the first element that was ever pushed into the input stack_  
> **if** (stackOutput.length <= 0) {  
> **while**(stackInput.length > 0) {  
> **var** elementToOutput = stackInput.pop();  
> stackOutput.push(elementToOutput);  
> }  
> }  
>   
> **return** stackOutput.pop();  
> }

**判断大括号是否闭合**

创建一个函数来判断给定的表达式中的大括号是否闭合：

> **var** expression = "{{}}{}{}"  
> **var** expressionFalse = "{}{{}";  
>   
> isBalanced(expression); _// true_  
> isBalanced(expressionFalse); _// false_  
> isBalanced(""); _// true_  
>   
> **function** isBalanced(expression) {  
> **var** checkString = expression;  
> **var** stack = [];  
>   
> _// If empty, parentheses are technically balanced_  
> **if** (checkString.length <= 0) **return** **true**;  
>   
> **for** (**var** i = 0; i < checkString.length; i++) {  
> **if**(checkString[i] === '{') {  
> stack.push(checkString[i]);  
> } **else** **if** (checkString[i] === '}') {  
> _// Pop on an empty array is undefined_  
> **if** (stack.length > 0) {  
> stack.pop();  
> } **else** {  
> **return** **false**;  
> }  
> }  
> }  
>   
> _// If the array is not empty, it is not balanced_  
> **if** (stack.pop()) **return** **false**;  
> **return** **true**;  
> }

**递归**

**二进制转换**

通过某个递归函数将输入的数字转化为二进制字符串：

> decimalToBinary(3); _// 11_  
> decimalToBinary(8); _// 1000_  
> decimalToBinary(1000); _// 1111101000_  
>   
> **function** decimalToBinary(digit) {  
> **if**(digit >= 1) {  
> _// If digit is not divisible by 2 then recursively return proceeding_  
> _// binary of the digit minus 1, 1 is added for the leftover 1 digit_  
> **if** (digit % 2) {  
> **return** decimalToBinary((digit - 1) / 2) + 1;  
> } **else** {  
> _// Recursively return proceeding binary digits_  
> **return** decimalToBinary(digit / 2) + 0;  
> }  
> } **else** {  
> _// Exit condition_  
> **return** '';  
> }  
> }

**二分搜索**

> **function** recursiveBinarySearch(**array**, value, leftPosition, rightPosition) {  
> _// Value DNE_  
> **if** (leftPosition > rightPosition) **return** -1;  
>   
> **var** middlePivot = Math.floor((leftPosition + rightPosition) / 2);  
> **if** (**array**[middlePivot] === value) {  
> **return** middlePivot;  
> } **else** **if** (**array**[middlePivot] > value) {  
> **return** recursiveBinarySearch(**array**, value, leftPosition, middlePivot - 1);  
> } **else** {  
> **return** recursiveBinarySearch(**array**, value, middlePivot + 1, rightPosition);  
> }  
> }

**数字**

**判断是否为 2 的指数值**

> isPowerOfTwo(4); _// true_  
> isPowerOfTwo(64); _// true_  
> isPowerOfTwo(1); _// true_  
> isPowerOfTwo(0); _// false_  
> isPowerOfTwo(-1); _// false_  
>   
> _// For the non-zero case:_  
> **function** isPowerOfTwo(number) {  
> _// `&` uses the bitwise n._  
> _// In the case of number = 4; the expression would be identical to:_  
> _// `return (4 & 3 === 0)`_  
> _// In bitwise, 4 is 100, and 3 is 011\. Using &, if two values at the same_  
> _// spot is 1, then result is 1, else 0\. In this case, it would return 000,_  
> _// and thus, 4 satisfies are expression._  
> _// In turn, if the expression is `return (5 & 4 === 0)`, it would be false_  
> _// since it returns 101 & 100 = 100 (NOT === 0)_  
>   
> **return** number & (number - 1) === 0;  
> }  
>   
> _// For zero-case:_  
> **function** isPowerOfTwoZeroCase(number) {  
> **return** (number !== 0) && ((number & (number - 1)) === 0);  
> }