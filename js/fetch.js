function fetch(file, target, data) {
  $.ajax({
    url: file,
    dataType: 'html',
    success: function (html) {
      if (data){
        var template = Handlebars.compile(html); 
        $(target).append(template(data));
      } else {
        $(target).append(html);
      }
    },
    error: function (jqxhr,status,error) { 
      console.log(jqxhr,status,error);
    }
  });
}