<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../src/calculator.php';

class CalculatorTest extends TestCase
{
    public function testAddition()
    {
        $calculator = new Calculator();

        $this->assertEquals(5, $calculator->calculate("2 + 3"));
        $this->assertEquals(0, $calculator->calculate("-2 + 2"));
    }

    public function testSoustraction()
    {
        $calculator = new Calculator();

        $this->assertEquals(2, $calculator->calculate("5 - 3"));
        $this->assertEquals(0, $calculator->calculate("5 − 5"));
    }

    public function testMultiplication()
    {
        $calculator = new Calculator();

        $this->assertEquals(15, $calculator->calculate("3 * 5"));
        $this->assertEquals(15, $calculator->calculate("3 × 5"));
    }

    public function testDivision()
    {
        $calculator = new Calculator();

        $this->assertEquals(2, $calculator->calculate("6 / 3"));
        $this->assertEquals(2, $calculator->calculate("6 ÷ 3"));
    }

    public function testDivisionParZero()
    {
        $calculator = new Calculator();

        $this->expectException(\RuntimeException::class);

        $calculator->calculate("6 / 0");
    }
    public function testChaineVide()
    {
        $calculator = new Calculator();


        $this->assertNull($calculator->calculate(""));
    }
}
