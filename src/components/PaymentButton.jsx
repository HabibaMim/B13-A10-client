import React from 'react';

const PaymentButton = () => {
    return (
        <div>
              <form action={'/api/payment'} method="POST">
                          <button

                            type="submit"

                            className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold transition"

                        >

                            Send Booking Request

                        </button>
                      </form>
        </div>
    );
};

export default PaymentButton;