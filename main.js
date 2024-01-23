//wait for the document to be ready before making a call
$(document).ready( function() {
//make a GET request to the JSON API using JQuery's.getJSON method    
    $.getJSON("schedule.json", function(data){
        //store the schedule data in a global variable
        let scheduleData = data.schedule;
        //populate the table with all the schedule data
        populateTable(scheduleData);
    })
    function populateTable(scheduleData) {
        $('#schedule-table-body').empty();
$.each(scheduleData. function(i, schedule) {


        let row = "<tr>";
        row += "<td>" + schedule.class_name + "<tb>";
        row += "<td>" + schedule.teacher_name + "<tb>";
        row += "<td>" + schedule.room_number + "<tb>";
        row += "<td>" + schedule.days.join(', ') + "<tb>";
        $('#schedule-table-body').append(row)
    }
})
})