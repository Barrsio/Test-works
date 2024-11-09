import unittest
from unittest.mock import patch
from calculate import Calculate
import io
import logging

logging.basicConfig(level=logging.INFO, format='%(message)s')

class TestCalculator(unittest.TestCase):

    def setUp(self):
        logging.info("\nЗапуск нового теста...")

    @patch('builtins.input', return_value='4')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_add(self, mock_stdout, mock_input):
        logging.info("Тест сложения: 4 + 4")
        Calculate.plus('4')
        result = mock_stdout.getvalue().strip()
        logging.info(f"Результат: {result}")

    @patch('builtins.input', return_value='5')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_subtract(self, mock_stdout, mock_input):
        logging.info("Тест вычитания: 10 - 5")
        Calculate.minus('10')
        result = mock_stdout.getvalue().strip()
        logging.info(f"Результат: {result}")

    @patch('builtins.input', return_value='2')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_divide(self, mock_stdout, mock_input):
        logging.info("Тест деления: 10 / 2")
        Calculate.divide('10')
        result = mock_stdout.getvalue().strip()
        logging.info(f"Результат: {result}")

        with patch('builtins.input', return_value='0'):
            logging.info("Тест деления на ноль")
            Calculate.divide('5')
            result = mock_stdout.getvalue().strip()
            logging.info(f"Результат: {result}")

    @patch('builtins.input', return_value='5')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_multiply(self, mock_stdout, mock_input):
        logging.info("Тест умножения: 3 * 5")
        Calculate.multiply('3')
        result = mock_stdout.getvalue().strip()
        logging.info(f"Результат: {result}")

    @patch('builtins.input', return_value='3')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_degree(self, mock_stdout, mock_input):
        logging.info("Тест возведения в степень: 2 ^ 3")
        Calculate.degree('2')
        result = mock_stdout.getvalue().strip()
        logging.info(f"Результат: {result}")

if __name__ == '__main__':
    unittest.main(verbosity=1, buffer=False)
