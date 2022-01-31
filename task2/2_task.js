document.addEventListener('DOMContentLoaded', function() {
  let sumInput = document.querySelector('#sum-input');
  sumInput.addEventListener('input', onSumInput);

  function getInputNumbersValue(input){
    return input.value.replace(/^(0+)|(\D)/g, '');
  }

  function onSumInput(e) {
      let input = e.target;
      let inputValue = getInputNumbersValue(input);

      if (!inputValue) {
        return input.value = '';
      }

      let maskedValue = inputValue.split('');
      if (maskedValue.length < 3) {
        while(maskedValue.length < 2) {
            maskedValue.unshift(0);
        }
        return input.value = '0.' + maskedValue.join('');
      }

      maskedValue[maskedValue.length - 3] = maskedValue[maskedValue.length - 3].concat('.');
      return input.value = maskedValue.join('');
  }
})