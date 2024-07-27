document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("checkin-error").style.display = "none";
    document.getElementById("checkout-error").style.display = "none";
    document.getElementById("rooms-error").style.display = "none";

    let isValid = true;

    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let rooms = document.getElementById("rooms").value;

    if (!checkin) {
      document.getElementById("checkin-error").innerText =
        "Дата заезда обязательна.";
      document.getElementById("checkin-error").style.display = "block";
      isValid = false;
    }

    if (!checkout) {
      document.getElementById("checkout-error").innerText =
        "Дата выезда обязательна.";
      document.getElementById("checkout-error").style.display = "block";
      isValid = false;
    }

    if (!rooms) {
      document.getElementById("rooms-error").innerText =
        "Количество комнат обязательно.";
      document.getElementById("rooms-error").style.display = "block";
      isValid = false;
    }

    if (checkin && checkout && new Date(checkout) <= new Date(checkin)) {
      document.getElementById("checkout-error").innerText =
        "Дата выезда должна быть позже даты заезда.";
      document.getElementById("checkout-error").style.display = "block";
      isValid = false;
    }

    if (rooms < 1 || rooms > 5) {
      document.getElementById("rooms-error").innerText =
        "Количество комнат должно быть от 1 до 5.";
      document.getElementById("rooms-error").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      alert("Бронь подтверждена.");
    }
  });
