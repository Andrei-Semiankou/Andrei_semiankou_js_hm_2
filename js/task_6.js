// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers. Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt. После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'. Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.




// for(let i=0;input!==null; i+=1){
//     input = +prompt('Enter number','');
//     if (input!= Number(input)) continue;
//     total+=input;
//     if(!input) break;
// }
// alert(`Общая сумма чисел равна ${total+=input} and ${numbers}`)
let total = 0;
const numbers = [];
let input = prompt('Enter number','');
    for (let i=0; input!==null; i+=1){
        if(isNaN(input)){
            alert('Было введено не число, попробуйте еще раз');
            input = prompt('Enter number','');
        } else{
            numbers.push(Number(input));
            input = prompt('Enter number','');
        }
    }
    // for ( let number of numbers){
    //     total+=number;
    // }
    for(let q=0; q<numbers.length; q+=1){
        total=total+numbers[q];
    }
 
alert(`Общая сумма чисел равна ${total}`);
console.log(numbers);