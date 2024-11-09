function openEvenlyModal() {
    document.getElementById("evenlyModal").style.display = "block";
}

function closeEvenlyModal() {
    document.getElementById("evenlyModal").style.display = "none";
}

function calculateEvenly(e) {
    e.preventDefault();
    const billName = document.getElementById("billName").value;
    const billTotal = parseFloat(document.getElementById("billTotal").value);

    if (billName && !isNaN(billTotal)) {
        const billList = document.getElementById("billList");
        billList.querySelector('.empty').hidden = true; // убираем текст при пустом списке
        const newBillItem = document.createElement("li");

        const nameElement = document.createElement('a')
        nameElement.href = './invoice/index.html'
        const editIcon = document.createElement("i");
        editIcon.classList.add("editIcon");
        editIcon.classList.add("fa-solid", "fa-pen-to-square")
        nameElement.appendChild(editIcon)
        const nameText = document.createElement('span')
        nameText.classList.add("name");
        nameText.textContent = billName;
        nameElement.appendChild(nameText)        

        const amountSpan = document.createElement("span");
        amountSpan.classList.add("amount");
        amountSpan.textContent = `${billTotal}$`;

        newBillItem.appendChild(nameElement);
        newBillItem.appendChild(amountSpan);
        billList.appendChild(newBillItem);

        // Очистка полей ввода
        document.getElementById("billName").value = "";
        document.getElementById("billTotal").value = "";

        closeEvenlyModal();
    } else {
        alert("Пожалуйста, введите название и стоимость счета.");
    }
}
function splitCustom() {
    alert('Технические шоколадки, пожалуйста повторите позднее!')
}
