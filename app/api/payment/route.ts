import ITechnique from "@/interfaces/data";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ||"");
   const   {searchedTechnique:{dailyRent,name}}: any  = await request.json();

console.log(dailyRent);
console.log(name);
//    console.log(searchedTechnique);
//    console.log(searchedTechnique.dailyRent);
//    console.log(searchedTechnique.name);
//    console.log(searchedTechnique.imageUrl);

   const session = await stripe.checkout.sessions.create({
    line_items: [{
        quantity: 1,
        price_data: {
            currency: "azn",
            product_data: {
                name: name,

            },
            unit_amount:dailyRent * 100
            
        },
    }],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000/about",
});

   return  NextResponse.json({session})
 }