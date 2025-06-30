export const payWithPaystack = ({
  email,
  amount,
  productName,
  size,
  customerName,
  phone,
  address,
  onSuccess
}) => {
  if (!window.PaystackPop) {
    alert("Paystack is not loaded. Please check your internet or try again.");
    return;
  }

  const handler = window.PaystackPop.setup({
    key: "pk_live_1537f5a0bca688f785e1c294fb84291203ef4f93",
    email,
    amount: amount * 100,
    currency: "NGN",
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    metadata: {
      custom_fields: [
        { display_name: "Product", variable_name: "product", value: productName },
        { display_name: "Size", variable_name: "size", value: size },
        { display_name: "Customer Name", variable_name: "customer_name", value: customerName },
        { display_name: "Phone", variable_name: "phone", value: phone },
        { display_name: "Address", variable_name: "delivery_address", value: address }
      ]
    },
    callback: function (response) {
      alert("Payment successful! Ref: " + response.reference);
      if (onSuccess) onSuccess();
    },
    onClose: function () {
      alert("Transaction was cancelled.");
    }
  });

  handler.openIframe();
};
