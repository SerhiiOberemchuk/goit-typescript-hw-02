/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
type StringOrNumberArray = (string | number)[];

function getPromise<T extends StringOrNumberArray>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
