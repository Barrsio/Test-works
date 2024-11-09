class Calculate:
    def plus(number_str):
        print("Сложение")
        number_one = int(number_str)
        number_two_str = input("Введите число:")
        number_two = int(number_two_str)
        sum_number = number_one + number_two
        print(sum_number)

    def minus(number_str):
        print("Вычитание")
        number_one = int(number_str)
        number_two_str = input("Введите число:")
        number_two = int(number_two_str)
        minus_number = number_one - number_two
        print(minus_number)

    def divide(number_str):
        print("Деление")
        number_one = int(number_str)
        number_two_str = input("Введите число:")
        number_two = int(number_two_str)
        if number_two == 0:
            print("Ошибка: Деление на ноль.")
        else:
            divide_number = number_one / number_two
            print(divide_number)

    def multiply(number_str):
        print("Умножение")
        number_one = int(number_str)
        number_two_str = input("Введите число:")
        number_two = int(number_two_str)
        multiply_number = number_one * number_two
        print(multiply_number)

    def degree(number_str):
        print("Возведение в степень")
        number_one = int(number_str)
        number_two_str = input("Введите число:")
        number_two = int(number_two_str)
        degree_number = number_one ** number_two
        print(degree_number)

def main():
    number_str = input("Введите число:")
    priority = input("Введите что вы хотите сделать (+, -, /, *, ^): ")
    if priority == "+":
        Calculate.plus(number_str)
    elif priority == "-":
        Calculate.minus(number_str)
    elif priority == "/":
        Calculate.divide(number_str)
    elif priority == "*":
        Calculate.multiply(number_str)
    elif priority == "^":
        Calculate.degree(number_str)
    else:
        print("Конец операций")

main()