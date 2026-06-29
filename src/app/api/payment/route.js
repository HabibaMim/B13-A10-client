import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { auth } from '@/lib/auth';

export async function POST(request) {
    const { bookingId, propertyId, rentPrice, propertyTitle } = await request.json();

    try {
        const headersList = await headers();
        const origin = headersList.get('origin');

        const userSession = await auth.api.getSession({
            headers: await headers()
        });

        const user = userSession?.user;
        if (!user) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        unit_amount: Number(rentPrice) * 100,
                        product_data: {
                            name: propertyTitle,
                        }
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                price: Number(rentPrice),
                userId: user.id,
                userEmail: user.email,
                propertyTitle,
                propertyId,
                bookingId,
            },
            mode: 'payment',
            success_url: `${origin}/properties/${propertyId}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/properties/${propertyId}`,
        });

        return NextResponse.json({ url: session.url });

    } catch (err) {
        console.error("Stripe error:", err.message);
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        );
    }
}