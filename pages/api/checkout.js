// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Stripe from "stripe"

export default async function handler(req, res) {

  if (req.method !== 'POST') { return res.status(405).json({ message: 'POST method required' }) }

  try {
    const body = JSON.parse(req.body)
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2020-08-27'
    })

    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3005/success',
      cancel_url: 'http://localhost:3005/cancel',
      line_items: body.lineItems,
      mode: 'payment'
    })

    res.status(201).json({ session })

  } catch (err) {
    res.status(500).send({ message: err.message })
  }



  res.status(200).json({ name: 'John Doe' })

}
