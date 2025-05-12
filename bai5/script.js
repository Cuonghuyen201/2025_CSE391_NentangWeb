function openModal() {
    document.getElementById('employeeModal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('employeeModal').style.display = 'none';
  }
  
  function saveEmployee() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const position = document.getElementById('position').value;
  
    const table = document.getElementById('employeeTable');
    const rowCount = table.rows.length;
    const newRow = table.insertRow();
  
    newRow.innerHTML = `
      <td>${rowCount + 1}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${phone}</td>
      <td>${position}</td>
      <td>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
      </td>
    `;
  
    closeModal();
  }
  