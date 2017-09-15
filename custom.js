//To parse and get JSON data
$(document).ready(function() {
  $("#deletelane").hide();
  $("#customtable").hide();
  $("#loadjson").click(function() {
    $("#customtable").show();
    $.get("https://api.myjson.com/bins/f6839", {
      format: "json"
    }, function(data) {
      $.each(data, function(index, val) {
        $("#customtable").append("<tr><th>" + val.id + "</th>" + "<th>" + val.name + "</th><td>" + val.country + "</th><td>" + val.city + "</td><td><button onClick=delete(val)>delete</button></td></tr>");
      })
    });
    $("#loadjson").hide();
    $("#deletelane").show();
  });
});

//search bar
name_source = [];
$(document).ready(function() {
  $.get('https://api.myjson.com/bins/f6839', function(data) {
    $.each(data, function(index, val) {
      var t = val.name;
      name_source[index] = t;
    });
  }, 'json');

  console.log(name_source);
  $("#searchtask").autocomplete({
    source: name_source
  })
});

//Delete Entire Table
$(document).ready(function() {
  $('#deletetable').click(function() {
    if (confirm("Do you want to delete this entire Table?")) {
      this.click;
      $('#customtable').remove();
    } else {
      alert("Delete Operation Canceled..!");
    }
    $("#deletetable").hide();
  });
});

//sorting with table column
$(document).ready(function() {
  $('th').each(function(col) {
    $(this).hover(
    function() { $(this).addClass('focus'); },
    function() { $(this).removeClass('focus'); }
  );
    $(this).click(function() {
      if ($(this).is('.asc')) {
        $(this).removeClass('asc');
        $(this).addClass('desc selected');
        sortOrder = -1;
      }
      else {
        $(this).addClass('asc selected');
        $(this).removeClass('desc');
        sortOrder = 1;
      }
      $(this).siblings().removeClass('asc selected');
      $(this).siblings().removeClass('desc selected');
      var arrData = $('table').find('tbody >tr:has(td)').get();
      arrData.sort(function(a, b) {
        var val1 = $(a).children('td').eq(col).text().toUpperCase();
        var val2 = $(b).children('td').eq(col).text().toUpperCase();
        if($.isNumeric(val1) && $.isNumeric(val2))
        return sortOrder == 1 ? val1-val2 : val2-val1;
        else
           return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
      });
      $.each(arrData, function(index, row) {
        $('tbody').append(row);
      });
    });
  });
});
