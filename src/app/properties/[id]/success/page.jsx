import { paymentStatusUpdate } from '@/lib/action/property';
import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default async function Success({ params, searchParams }) {
    const { id } = await params;
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error('Please provide a valid session_id (`cs_test_...`)');
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    });

    const { status, metadata } = session;
    const customerEmail = session.customer_details?.email;

    if (status === 'open') {
        return redirect('/');
    }

    if (status === 'complete') {
        await paymentStatusUpdate(metadata.bookingId);

        return (
            <section className="min-h-screen bg-base-200 flex items-center justify-center px-5">
                <div className="bg-base-300 border border-violet-400/20 rounded-3xl p-10 max-w-md text-center">
                    <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-violet-300 mb-2">
                        Payment Successful!
                    </h1>
                    <p className="text-gray-300 mb-6">
                        We appreciate your business! A confirmation email will be sent to{' '}
                        {customerEmail}.
                    </p>
                    <Link
                        href={`/properties/${id}`}
                        className="inline-block bg-violet-500 hover:bg-violet-600 text-white py-3 px-6 rounded-xl font-semibold transition"
                    >
                        Back to Property
                    </Link>
                </div>
            </section>
        );
    }
}