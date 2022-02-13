let limit = 3;

function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + '';
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById('random-input').value = pin;
}

document.getElementById('calc-btns').addEventListener('click', function (e) {
  const number = e.target.innerText;
  if (isNaN(number)) {
    if (number == 'C') {
      document.getElementById('pin-input').value = '';
    }
  } else {
    const previousNumber = document.getElementById('pin-input').value;
    const inputPin = previousNumber + number;
    document.getElementById('pin-input').value = inputPin;
  }
});

function matchPin(e) {
  checkPinValidation();
  document.getElementById('pin-input').value = '';
}

function checkPinValidation() {
  const randomNumPin = parseInt(document.getElementById('random-input').value);

  const inputPinByUser = parseInt(document.getElementById('pin-input').value);
  const success = document.getElementById('success-noti');
  const failed = document.getElementById('fail-noti');
  const limitEnd = document.getElementById('not-access');
  if (randomNumPin == inputPinByUser) {
    success.style.display = 'block';
    failed.style.display = 'none';
    limitEnd.style.display = 'none';
  } else {
    success.style.display = 'none';
    failed.style.display = 'block';
    limitEnd.style.display = 'none';
    if (limit > -1) {
      --limit;
    }
    
    if(limit >= 0){
        document.getElementById('pin-try').innerText = limit;
    }

    if (limit == 0) {
      success.style.display = 'none';
      failed.style.display = 'none';
      limitEnd.style.display = 'block';
    //   document.getElementById('pin-input').value = '';
      document.getElementById('match-btn').disabled = true;
    }
  }
}
