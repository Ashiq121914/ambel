import React from "react";
import one from "../../assets/pay.png";
import two from "../../assets/practitionar.png";
import three from "../../assets/enterprice.png";
import Card from "./Card";

const PricingCards = () => {
  const pricingData = [
    {
      id: 1,
      img: one,
      tag: "Pay As You Go",
      price: "10%",
      practitionarNumber: false,
      msg: "10% from your customer payment",
      dataFeature: [
        "Only pre-paid booking",
        "Both practitioner and Organization",
        "Up to 5 practitioners in organization",
        "2 staff members are allowed",
        "Basic chat and email support",
      ],
    },
    {
      id: 2,
      img: two,
      tag: "Practitioner",
      price: "$49",
      msg: "1 practitioner license/monthly",
      practitionarNumber: false,
      dataFeature: [
        "All booking options",
        "All schedule Feature",
        "Individual single practitioner license",
        "3 staff members are allowed",
        "Unlimited email marketing",
      ],
    },
    {
      id: 3,
      img: three,
      tag: "Enterprise",
      price: "$39",
      msg: "Practitioner Number",
      practitionarNumber: true,
      dataFeature: [
        "All booking options",
        "Only for Organization",
        " Unlimited practitioners and staff",
        "Customizable 6 page website",
        "E-commerce functionality",
      ],
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-wrap mx-[20px] gap-[20px] justify-center">
        {pricingData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
