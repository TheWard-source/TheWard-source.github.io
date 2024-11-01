let isEditing = false;

function toggleEditMode() {
  isEditing = !isEditing;
  const editButton = document.getElementById('editButton');
  editButton.textContent = isEditing ? 'Save' : 'Edit';

  const editableFields = document.querySelectorAll('.editable');
  editableFields.forEach(field => {
    if (isEditing) {
      // Replace text with input fields
      const input = document.createElement('input');
      input.type = 'text';
      input.value = field.textContent;
      input.className = 'edit-input';
      field.textContent = '';
      field.appendChild(input);
    } else {
      // Save the input field's value and remove the input
      const input = field.querySelector('input');
      field.textContent = input.value;
    }
  });
}