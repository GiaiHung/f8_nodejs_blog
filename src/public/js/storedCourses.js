document.addEventListener('DOMContentLoaded', function () {
  var courseId
  var deleteForm = document.forms['delete-course-form']
  var btnDeleteCourse = document.getElementById('btn-delete-course')

  $('#delete-course-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    courseId = button.data('id')
  }) // When delete course btn clicked
  btnDeleteCourse.onclick = function () {
    deleteForm.action = '/courses/' + courseId + '?_method=DELETE'
    deleteForm.submit()
  }

console.log('hello')
})
