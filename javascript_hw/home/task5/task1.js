
        /**
 * Created by Maxim on 19.06.2015.
 */
                var salaries = {
                "����": 100,
                "����": 300,
                "����": 250
                };

                var max = 0;
                var maxName = '';

                for (var key in salaries) {
                if (max < salaries[key]) {
                max = salaries[key];
                maxName = key;
                }
                };

                console.log( maxName || "��� �����������" );