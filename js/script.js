/* Form Validation */

function validateForm() {
  var x = document.forms["requestForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

/* Bootstrap Pop-Up Modal */

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
