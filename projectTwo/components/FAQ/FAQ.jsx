import React from "react";
import one from "../../assets/heart.png";
import two from "../../assets/Featured.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";
import img from "../../assets/Image.png";
import Image from "next/image";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      img: one,
      tags: "Is there a free trial available?",
      desc: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      id: 2,
      img: two,
      tags: "Can I change my plan later?",
      desc: "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan. ",
    },
    {
      id: 3,
      img: three,
      tags: "May I need to pay full amount while I update plan in the middle of the month?",
      desc: "No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew. ",
    },
    {
      id: 4,
      img: four,
      tags: "Can I disable the auto renew?",
      desc: "You can disable and enable auto renew anytime also you can choose auto renew from different options.",
    },
    {
      id: 5,
      img: five,
      tags: "What is your cancellation policy?",
      desc: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    },
    {
      id: 6,
      img: six,
      tags: "Can I run my business Pay As You Go for lifetime",
      desc: "Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan.",
    },
  ];
  return (
    <div className="my-[80px]  max-w-[1200px] lg:mx-auto mx-[40px]">
      <p className="text-[16px] text-green font-semibold">Support</p>
      <h2 className="text-[30px] lg:text-[50px] text-light-blue my-[10px] font-semibold">
        Frequently asked questions
      </h2>
      <p className="text-[14px] text-light-blue font-light">
        Everything you need to know about the product and billing. Can’t find
        the <br /> answer you’re looking for? Please chat to our friendly team.
      </p>

      <div className="flex justify-start items-center gap-[40px] mt-[40px] mx-[40px]">
        <div className="flex-1">
          {faqData.map((data) => (
            <div
              className="flex justify-start items-start gap-[10px] mb-[40px]"
              key={data.id}
            >
              <Image src={data.img} width={40} height={40} alt="faq" />
              <div>
                <p className="text-[20px] text-[#101828] font-semibold">
                  {data.tags}
                </p>
                <p className="text-[15px] text-[#475467] font-extralight">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 hidden lg:block">
          <Image src={img} width={500} height={500} alt="faq" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
