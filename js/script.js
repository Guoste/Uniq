$(function () {
    $("#datepicker").datepicker({
        firstDay: 1,
        beforeShowDay: function(date) {
            if(date.getDay() == 4 || date.getDay() == 6) {
                return [true, "highlighted", ''];
            } else {
                return [true, '', ''];
            }

       }
    });
});