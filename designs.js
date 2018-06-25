function makeGrid() {
  const height = $("#inputHeight");
  const width = $("#inputWeight");
  const color = $("#colorPicker");
  const table = $("#pixelCanvas");
  table.children().remove();
  for (let row = 0; row < height.val(); row++) {
    table.append("<tr></tr>");
  }
  const rows = $("tr");
  for (let column = 0; column < width.val(); column++) {
    rows.append("<td></td>");
  }
  const cell = table.find("td");
  cell.click(function() {
      $(this).css("backgroundColor", $("#colorPicker").val());
  });
  cell.dblclick(function() {
    $(this).css("backgroundColor", "");
  });
}
$("#sizePicker").submit(function(e) {
  makeGrid();
  e.preventDefault();
});
