import React from 'react'

const About = () => {

  const pictures = new URL("./furni2.jpeg",import.meta.url)

  return (
    <div>
      <div className="detail">
    <img src={pictures} width="400px" />
    <p className="para">Gulmohar Lane is co-founded by Saurabh Ailawadi and Shweta Mewara, who bring varied experience in the fields of design, interiors, retail and brand management. We at Gulmohar Lane believe that your home should be your own haven; where you dine, work, sleep, dream and live amidst surroundings that inspire you and reflect your unique personality and aesthetics. Your home should be the most comfortable place, for it is rightly said that the things we love tell an intricate tale of who we truly are.

Our passion for crafting furniture that soothingly blends with strong aesthetics, stems from the gap we saw in the Indian market, motivating us to offer options that breathe easy and elevate your space. Branching out from the fast paced, mass produced and machine made industry, we are grounded by our respect for slow living and sustainability. Being aware of the impact that our choices have on the environment, and the value of age-old knowledge passed down through generations, we hope to create products that find harmony in strong aesthetics, nature inspired designs and quality craftsmanship. Intertwining the stories of our master artisans, each of our creations reflects authenticity and adds character to your home</p>
    </div></div>
  )
}

export default About