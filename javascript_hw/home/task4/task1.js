/*Created by Maxim on 14.06.2015.*/
        /* пример с формулой Бине (есть маленькая погрешность при больших вычислениях)
                function fibonaci(n) {

                var sqrt = Math.sqrt(5)
                return (Math.pow((1+sqrt)/2,n) - Math.pow((1 - sqrt)/2,n))/sqrt
                }
                console.log(fibonaci(77));

        */

        var a = 1, b = 1, c;

        function fibonaci(n) {

        for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        }
        return b;
        }
        console.log(fibonaci(77));

