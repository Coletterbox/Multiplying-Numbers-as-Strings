function multiply(a, b) {
  var product = [...new Array(a.length + b.length)];
  for (var k = 0; k < product.length; k++) {
    product[k] = 0;
  }
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      product[product.length - 1 - i - j] += parseInt(a[a.length - 1 - i]) * parseInt(b[b.length - 1 - j]);
    }
  }
  for (var l = product.length - 1; l > -1; l--) {
    if (product[l].toString().length > 1) {
      product[l - 1] += parseInt(product[l].toString().slice(0, product[l].toString().length - 1));
      product[l] = product[l].toString();
      product[l] = product[l][product[l].length - 1];
    }
  }
  product = product.join("");
  if (product == 0) {
    return "0";
  } else {
    return product.replace(/\b0+/g, "");
  }
}
