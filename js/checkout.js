document.addEventListener('DOMContentLoaded', () => {
    var stripe = Stripe('pk_test_zelfV90Dn1BQHyVzs46MPXVI', { betas: ['checkout_beta_4'] });

    document.querySelector('#buyNowButton').addEventListener('click', () => {
        stripe.redirectToCheckout({
            items: [
                { sku: 'sku_EChZ41DeaJFvd0', quantity: 1 }
            ],
            successUrl: 'https://www.madonna-explore.com/',
            cancelUrl: 'https://www.madonna-explore.com/tickets',
        }).then(function (result) {
            // Display result.error.message to your customer
        });
    });
});

